import { useState } from "react";

const galleryImages = [
  {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/376210/ss_55b4f9d4c6b35a46e6c95cc0b5f3b21c3cfbe048.1920x1080.jpg",
    alt: "Dinossauros em caçada",
    caption: "Caçada em grupo"
  },
  {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/376210/ss_f7c285ec1a127f99d345d0f15b490db3d95bc63c.1920x1080.jpg",
    alt: "Paisagem da ilha",
    caption: "Paisagem natural"
  },
  {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/376210/ss_c99c69a06cb70d738c84cbf29b5108b38c02a8b2.1920x1080.jpg",
    alt: "Encontro de predadores",
    caption: "Confronto de espécies"
  },
  {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/376210/ss_27b6172d93792b3c0e5a9ef0e7a3ecfbfbd384ae.1920x1080.jpg",
    alt: "Dinossauro na área vulcânica",
    caption: "Região vulcânica"
  },
  {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/376210/ss_656133e95890a3c19e5b4cd1ac3c815268c12120.1920x1080.jpg",
    alt: "Dinossauro bebendo água",
    caption: "Fonte de água"
  },
  {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/376210/ss_a4d7be38e14c04d3546b2551a7fb56e55fc4070b.1920x1080.jpg",
    alt: "T-Rex ao anoitecer",
    caption: "Caçador noturno"
  }
];

const GallerySection = () => {
  // Track which images have loaded to remove shimmer effect
  const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [src]: true
    }));
  };

  return (
    <section id="galeria" className="section-container rounded-xl p-6 md:p-10 animate-fade-in-up shadow-2xl border border-primary/20 backdrop-blur-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-shadow">Imagens do Servidor</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div className="group" key={index}>
            <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video border border-white/10">
              {!loadedImages[image.src] && (
                <div className="absolute inset-0 loading-shimmer opacity-50"></div>
              )}
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onLoad={() => handleImageLoad(image.src)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-50 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <span className="p-4 text-white font-medium text-shadow">{image.caption}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <a 
          href="https://discord.gg/HdG6x29g" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center bg-black/50 text-primary hover:text-white hover:bg-primary/80 px-6 py-3 rounded-lg transition-all duration-300 border border-primary/30"
        >
          <span className="mr-2">Ver mais no Discord</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default GallerySection;
