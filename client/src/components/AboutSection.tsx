const AboutSection = () => {
  return (
    <section id="sobre" className="section-container rounded-xl p-6 md:p-10 animate-fade-in-up shadow-2xl border border-primary/20 backdrop-blur-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-shadow">Sobre o Jogo</h2>
      
      <div className="space-y-5 text-gray-200">
        <p className="text-lg leading-relaxed">
          <strong className="text-white">The Isle: Legacy</strong> é um jogo de sobrevivência onde você vive como um dinossauro em um mundo selvagem e perigoso. No servidor Next Level Brasil, a imersão é prioridade: caçadas em grupo, sobrevivência estratégica e interações realistas com outros jogadores tornam a experiência única.
        </p>
        <p className="text-lg leading-relaxed">
          Nosso servidor oferece eventos semanais, balanceamento justo e uma comunidade acolhedora pronta para te ajudar a evoluir seu dinossauro e enfrentar os desafios da ilha.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="flex items-center bg-black/50 p-5 rounded-lg border-l-4 border-primary hover:bg-black/60 transition-all duration-300">
            <i className="fas fa-users text-primary text-2xl mr-3"></i>
            <div>
              <h3 className="font-semibold">Comunidade Ativa</h3>
              <p className="text-sm text-gray-300">Jogadores online todos os dias</p>
            </div>
          </div>
          
          <div className="flex items-center bg-black/50 p-5 rounded-lg border-l-4 border-primary hover:bg-black/60 transition-all duration-300">
            <i className="fas fa-calendar-alt text-primary text-2xl mr-3"></i>
            <div>
              <h3 className="font-semibold">Eventos Semanais</h3>
              <p className="text-sm text-gray-300">Participe de desafios exclusivos</p>
            </div>
          </div>
          
          <div className="flex items-center bg-black/50 p-5 rounded-lg border-l-4 border-primary hover:bg-black/60 transition-all duration-300">
            <i className="fas fa-headset text-primary text-2xl mr-3"></i>
            <div>
              <h3 className="font-semibold">Suporte Ativo</h3>
              <p className="text-sm text-gray-300">Equipe pronta para ajudar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
