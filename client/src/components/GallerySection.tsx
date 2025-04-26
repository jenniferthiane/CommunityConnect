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
    <section id="galeria" className="section-container rounded-xl p-6 md:p-10 animate-fade-in-up shadow-xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Imagens do Servidor</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div className="group" key={index}>
            <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="p-4 text-white font-medium">{image.caption}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <a href="#" className="inline-flex items-center text-primary hover:text-primary-dark">
          <span className="mr-2">Ver mais imagens</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default GallerySection;
