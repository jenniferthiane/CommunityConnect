const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-sm py-8 px-6 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary mb-4 md:mb-0">Next Level Brasil</h2>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://discord.gg/HdG6x29g" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-discord text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; 2025 Next Level Brasil. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">Termos de Uso</a>
            <a href="mailto:contato@nextlevel.net.br" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
