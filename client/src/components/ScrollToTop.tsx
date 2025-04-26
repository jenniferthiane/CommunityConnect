import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full shadow-md transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Voltar ao topo"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;
