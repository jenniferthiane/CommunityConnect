import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      <a 
        href="https://legacy.nextlevel.net.br/" 
        target="_blank" 
        rel="noreferrer"
        className="flex items-center bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105 animate-pulse-glow"
      >
        <i className="fas fa-server mr-2"></i>
        <span className="hidden sm:inline">Painel do Servidor</span>
      </a>
      
      <a 
        href="https://discord.gg/HdG6x29g" 
        target="_blank" 
        rel="noreferrer"
        className="flex items-center bg-[#5865F2] hover:bg-[#4752C4] text-white py-3 px-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105 animate-pulse-glow"
      >
        <i className="fab fa-discord mr-2"></i>
        <span className="hidden sm:inline">Discord</span>
      </a>
    </div>
  );
};

export default FloatingButtons;
