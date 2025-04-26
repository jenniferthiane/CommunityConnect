import { Button } from "@/components/ui/button";

const JoinSection = () => {
  return (
    <section className="rounded-xl p-10 text-center animate-fade-in-up shadow-2xl relative overflow-hidden border border-primary/20">
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-30" 
           style={{ backgroundImage: "url('https://cdn.cloudflare.steamstatic.com/steam/apps/376210/ss_9f9b8a882bed07ae2fed8a686af47a9c5a1a53cf.1920x1080.jpg')" }} />
      
      {/* Overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-black/90 z-0"></div>
      
      {/* Conteúdo */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-shadow-lg">Pronto para a aventura?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-shadow">Junte-se à nossa comunidade e comece sua jornada no mundo jurássico hoje mesmo!</p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Button 
            variant="white" 
            size="xl" 
            asChild
            className="px-8 py-6 text-lg shadow-lg"
          >
            <a href="https://legacy.nextlevel.net.br/" target="_blank" rel="noreferrer">
              <i className="fas fa-server mr-2"></i>Acessar Servidor
            </a>
          </Button>
          
          <Button 
            variant="discord" 
            size="xl" 
            asChild
            className="px-8 py-6 text-lg shadow-lg"
          >
            <a href="https://discord.gg/HdG6x29g" target="_blank" rel="noreferrer">
              <i className="fab fa-discord mr-2"></i>Entrar no Discord
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
