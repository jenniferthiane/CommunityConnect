import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import GallerySection from "./components/GallerySection";
import RulesSection from "./components/RulesSection";
import JoinSection from "./components/JoinSection";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ServerStatus from "./components/ServerStatus";

function App() {
  return (
    <div className="min-h-screen font-sans text-white antialiased bg-background relative">
      {/* Imagem de fundo principal com overlay escuro */}
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed -z-10" 
           style={{ 
             backgroundImage: "url('https://cdn.cloudflare.steamstatic.com/steam/apps/376210/ss_e700ec846b56ef68930ad0b16288b321e2889e1e.1920x1080.jpg')",
             backgroundPosition: "center 25%" 
           }} />
      
      {/* Overlay gradiente para melhorar a legibilidade do texto */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 -z-10" />
      
      {/* Barra de status do servidor */}
      <ServerStatus />
      
      {/* Adicionado padding-top para compensar a barra fixa no topo */}
      <div className="pt-12">
        <Hero />

        <main className="max-w-7xl mx-auto px-4 py-8 space-y-16">
          <AboutSection />
          <TestimonialsSection />
          <GallerySection />
          <RulesSection />
          <JoinSection />
        </main>

        <FloatingButtons />
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
}

export default App;
