import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <header className="hero-overlay h-screen flex flex-col justify-center items-center text-center p-6 animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">Next Level Brasil</h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200">Entre agora em um mundo jurássico de sobrevivência e emoção!</p>
      
      <div className="flex flex-wrap gap-4 justify-center">
        <Button 
          variant="green" 
          size="xl"
          onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <i className="fas fa-images mr-2"></i>Ver Galeria
        </Button>
        
        <Button 
          variant="green" 
          size="xl"
          onClick={() => document.getElementById('regras')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <i className="fas fa-scroll mr-2"></i>Regras
        </Button>
      </div>
      
      <div className="absolute bottom-8 w-full flex justify-center animate-bounce">
        <button 
          className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300"
          onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Hero;
