import { useState, useEffect } from 'react';

const ServerStatus = () => {
  const [serverStatus, setServerStatus] = useState({
    isOnline: true,
    playersOnline: 78,
    maxPlayers: 100,
    ping: 35,
    lastUpdated: new Date()
  });
  
  // Simular atualizações periódicas do status do servidor
  useEffect(() => {
    const updateTimer = setInterval(() => {
      // Valores simulados
      const randomPlayerChange = Math.floor(Math.random() * 5) - 2; // -2 a +2 jogadores
      const newPlayersOnline = Math.max(
        1, 
        Math.min(
          serverStatus.maxPlayers, 
          serverStatus.playersOnline + randomPlayerChange
        )
      );
      
      const pingVariation = Math.floor(Math.random() * 15) - 5; // -5 a +10 ms
      const newPing = Math.max(10, Math.min(150, serverStatus.ping + pingVariation));
      
      // 99% chance de estar online
      const newOnlineStatus = Math.random() > 0.01;
      
      setServerStatus({
        isOnline: newOnlineStatus,
        playersOnline: newOnlineStatus ? newPlayersOnline : 0,
        maxPlayers: serverStatus.maxPlayers,
        ping: newOnlineStatus ? newPing : 0,
        lastUpdated: new Date()
      });
    }, 15000); // Atualiza a cada 15 segundos
    
    return () => clearInterval(updateTimer);
  }, [serverStatus]);
  
  // Determinar cor do ping
  const getPingColor = (ping: number) => {
    if (ping < 50) return 'text-green-400';
    if (ping < 100) return 'text-yellow-400';
    return 'text-red-400';
  };
  
  // Formatar horário da última atualização
  const formatLastUpdated = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#23272A]/95 z-50 border-b border-[#2A2E33]">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-3 flex-wrap">
          <div className="flex items-center">
            <div className={`h-3 w-3 rounded-full mr-2 ${serverStatus.isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm font-medium hidden sm:inline text-gray-300">
              Status:
            </span>
            <span className={`ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${serverStatus.isOnline ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
              {serverStatus.isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
          
          <div className="flex items-center border-l border-gray-700 pl-3">
            <i className="fas fa-users text-[#28a745] text-sm mr-2"></i>
            <span className="text-sm text-gray-300">
              {serverStatus.playersOnline}/{serverStatus.maxPlayers} <span className="hidden xs:inline">jogadores</span>
            </span>
          </div>
          
          <div className="hidden sm:flex items-center border-l border-gray-700 pl-3">
            <i className="fas fa-wifi text-[#28a745] text-sm mr-2"></i>
            <span className="text-sm text-gray-300">
              Ping: <span className={getPingColor(serverStatus.ping)}>{serverStatus.ping} ms</span>
            </span>
          </div>
        </div>
        
        <div className="flex items-center ml-auto">
          <button 
            onClick={() => window.open('https://legacy.nextlevel.net.br/', '_blank')}
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs px-3 py-1 rounded-md transition-colors duration-200 flex items-center shadow-sm"
          >
            <i className="fas fa-external-link-alt mr-1"></i>
            <span className="hidden xs:inline">Acessar Painel</span>
            <span className="xs:hidden">Painel</span>
          </button>
          
          <span className="ml-3 text-xs text-gray-400 hidden md:inline">
            Atualizado: {formatLastUpdated(serverStatus.lastUpdated)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServerStatus;