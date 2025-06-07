require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const app = express();
const PORT = 3000;

const usersPath = path.join(__dirname, 'users.json');
const logsPath = path.join(__dirname, 'logs.json');
let users = require(usersPath);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'multiregra',
  resave: false,
  saveUninitialized: false
}));
app.use('/public', express.static('public'));

// NOVO: Servir novidades.json diretamente na raiz do site para facilitar o fetch
app.use('/novidades.json', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'novidades.json');
  if (!fs.existsSync(filePath)) return res.json({});
  res.sendFile(filePath);
});

function requireLogin(req, res, next) {
  if (!req.session.user) return res.redirect('/public/index.html');
  next();
}
function requireAdmin(req, res, next) {
  if (req.session.user?.role !== 'admin') return res.status(403).send('Acesso negado');
  next();
}

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (user && await bcrypt.compare(password, user.passwordHash)) {
    req.session.user = { username: user.username, role: user.role };
    return res.redirect('/');
  }
  res.send('Login inválido');
});

app.get('/', requireLogin, (req, res) => res.redirect('/public/painel.html'));

app.get('/file', requireLogin, (req, res) => {
  const file = req.query.name;
  const filePath = path.join(__dirname, 'protected', file);
  if (!fs.existsSync(filePath)) return res.status(404).send('Arquivo não encontrado');

  const html = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html);
  const regras = {};

  $('[data-edit]').each((i, el) => {
    const key = $(el).attr('data-edit');
    regras[key] = $(el).text().trim();
  });

  res.json({ regras });
});

app.post('/save', requireLogin, (req, res) => {
  const { name, edits } = req.body;
  const filePath = path.join(__dirname, 'protected', name);
  if (!fs.existsSync(filePath)) return res.status(404).send('Arquivo não encontrado');

  let html = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html);
  const logs = [];

  for (const key in edits) {
    if (key === 'conteudo') continue;
    const newContent = edits[key];
    const el = $(`[data-edit="${key}"]`);
    if (el.length > 0) {
      el.text(newContent);
      logs.push({
        date: new Date().toISOString(),
        user: req.session.user?.username || "desconhecido",
        file: name,
        action: "edit",
        before: "[editado parcialmente]",
        after: `${key}: ${newContent.substring(0, 200)}`
      });
    }
  }

  fs.writeFileSync(filePath, $.html(), 'utf8');
  const existingLogs = fs.existsSync(logsPath) ? JSON.parse(fs.readFileSync(logsPath)) : [];
  fs.writeFileSync(logsPath, JSON.stringify([...existingLogs, ...logs], null, 2));

  res.send("Alterações salvas com sucesso!");
});

app.get('/logs', requireLogin, requireAdmin, (req, res) => {
  const logs = fs.existsSync(logsPath) ? JSON.parse(fs.readFileSync(logsPath)) : [];
  res.json(logs);
});

app.post('/register', requireLogin, requireAdmin, async (req, res) => {
  const { username, password, role } = req.body;
  if (!username || !password || !role) return res.status(400).send("Campos obrigatórios");
  const existing = users.find(u => u.username === username);
  if (existing) return res.status(400).send("Usuário já existe");

  const passwordHash = await bcrypt.hash(password, 10);
  users.push({ username, passwordHash, role });
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
  res.send("Usuário criado com sucesso!");
});

app.get('/whoami', requireLogin, (req, res) => {
  res.json({
    username: req.session.user?.username,
    role: req.session.user?.role
  });
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/public/login.html');
  });
});

app.get('/view/:file', (req, res) => {
  const file = req.params.file;
  const filePath = path.join(__dirname, 'protected', file);
  if (!fs.existsSync(filePath)) return res.status(404).send('Arquivo não encontrado');
  res.sendFile(filePath);
});

// NOVO: Salva novidades em JSON
app.post('/salvar-novidades', (req, res) => {
  const { titulo1, descricao1, titulo2, descricao2 } = req.body;
  const filePath = path.join(__dirname, 'public', 'novidades.json');
  const novidades = { titulo1, descricao1, titulo2, descricao2 };
  fs.writeFileSync(filePath, JSON.stringify(novidades, null, 2), 'utf8');
  res.redirect('/public/painel.html');
});

app.listen(PORT, () => console.log(`Painel rodando em http://localhost:${PORT}`));
