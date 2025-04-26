import { Button } from "@/components/ui/button";

const JoinSection = () => {
  return (
    <section className="bg-primary rounded-xl p-10 text-center animate-fade-in-up shadow-xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para a aventura?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">Junte-se à nossa comunidade e comece sua jornada no mundo jurássico hoje mesmo!</p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Button 
          variant="white" 
          size="xl" 
          asChild
        >
          <a href="https://legacy.nextlevel.net.br/" target="_blank" rel="noreferrer">
            <i className="fas fa-server mr-2"></i>Acessar Servidor
          </a>
        </Button>
        
        <Button 
          variant="discord" 
          size="xl" 
          asChild
        >
          <a href="https://discord.gg/HdG6x29g" target="_blank" rel="noreferrer">
            <i className="fab fa-discord mr-2"></i>Entrar no Discord
          </a>
        </Button>
      </div>
    </section>
  );
};

export default JoinSection;
