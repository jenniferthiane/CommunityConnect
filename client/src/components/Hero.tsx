import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <header className="h-screen flex flex-col justify-center items-center text-center p-6 animate-fade-in relative overflow-hidden">
      {/* Container com efeito de brilho e neblina para o título */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-shadow-lg">
          Next Level Brasil
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-200">
          Entre agora em um mundo jurássico de sobrevivência e emoção!
        </p>
        
        {/* Novos botões com Discord e Servidor */}
        <div className="flex flex-wrap gap-5 justify-center">
          <Button 
            variant="green" 
            size="xl"
            onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-6 text-lg"
          >
            <i className="fas fa-images mr-2"></i>Ver Galeria
          </Button>
          
          <Button 
            variant="white" 
            size="xl"
            asChild
            className="px-8 py-6 text-lg"
          >
            <a href="https://legacy.nextlevel.net.br/" target="_blank" rel="noreferrer">
              <i className="fas fa-server mr-2"></i>Servidor
            </a>
          </Button>
          
          <Button 
            variant="discord" 
            size="xl"
            asChild
            className="px-8 py-6 text-lg"
          >
            <a href="https://discord.gg/HdG6x29g" target="_blank" rel="noreferrer">
              <i className="fab fa-discord mr-2"></i>Discord
            </a>
          </Button>
        </div>
      </div>
      
      {/* Seta para baixo */}
      <div className="absolute bottom-8 w-full flex justify-center animate-bounce">
        <button 
          className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300"
          onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <i className="fas fa-chevron-down text-3xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Hero;
