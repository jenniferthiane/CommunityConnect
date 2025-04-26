import { Button } from "@/components/ui/button";

const languageRules = [
  {
    language: "Português",
    flag: "https://flagcdn.com/w80/br.png",
    flagAlt: "Bandeira Brasil",
    description: "Regras completas para jogadores brasileiros e portugueses.",
    actionText: "Acessar regras",
    link: "https://discord.com/channels/605389794641707018/1362449779375734914"
  },
  {
    language: "Español",
    flag: "https://flagcdn.com/w80/es.png",
    flagAlt: "Bandeira Espanha",
    description: "Reglas completas para jugadores de habla hispana.",
    actionText: "Acceder a las reglas",
    link: "https://discord.com/channels/605389794641707018/1362446644947321112"
  },
  {
    language: "English",
    flag: "https://flagcdn.com/w80/gb.png",
    flagAlt: "Bandeira Reino Unido",
    description: "Complete rules for English-speaking players.",
    actionText: "Access rules",
    link: "https://discord.com/channels/605389794641707018/1362446756582785135"
  }
];

const RulesSection = () => {
  return (
    <section id="regras" className="section-container rounded-xl p-6 md:p-10 animate-fade-in-up shadow-2xl border border-primary/20 backdrop-blur-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-shadow">Rules / Regras / Reglas</h2>
      <p className="text-lg text-gray-200 mb-8">Confira as regras completas do servidor em seu idioma preferido:</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {languageRules.map((rule, index) => (
          <a 
            key={index}
            href={rule.link} 
            target="_blank" 
            rel="noreferrer" 
            className="block bg-black/50 hover:bg-black/70 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl border-l-4 border-primary group hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <img src={rule.flag} alt={rule.flagAlt} className="w-8 h-6 mr-3 shadow-md" />
              <h3 className="text-xl font-semibold">{rule.language}</h3>
            </div>
            <p className="text-gray-300 mb-4">{rule.description}</p>
            <span className="inline-flex items-center text-primary group-hover:text-white transition-colors duration-300">
              <span>{rule.actionText}</span>
              <i className="fas fa-chevron-right ml-2 transform transition-transform duration-300 group-hover:translate-x-1"></i>
            </span>
          </a>
        ))}
      </div>
      
      <div className="bg-black/40 p-6 rounded-lg mt-8 border border-red-500/30">
        <h3 className="text-xl font-semibold text-red-400 mb-2">⚠️ Lembre-se</h3>
        <p className="text-gray-300">
          O cumprimento das regras é essencial para manter nossa comunidade saudável e a experiência de jogo agradável para todos. Jogadores que desrespeitarem as regras podem ser sujeitos a penalidades.
        </p>
      </div>
    </section>
  );
};

export default RulesSection;
