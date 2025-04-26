import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import RulesSection from "@/components/RulesSection";
import JoinSection from "@/components/JoinSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen font-sans text-white antialiased bg-background relative">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed -z-10" 
           style={{ backgroundImage: "url('https://cdn.cloudflare.steamstatic.com/steam/apps/376210/ss_50a25404567943c9488fc06301915977b6b4e0a4.1920x1080.jpg')" }} />
      
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
  );
}

export default App;
