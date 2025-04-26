const testimonials = [
  {
    quote: "Melhor servidor que já joguei! A staff é ativa e a comunidade é incrível.",
    author: "LucasRex"
  },
  {
    quote: "Adoro os eventos e o realismo que o Next Level oferece. É viciante!",
    author: "DinoQueen"
  },
  {
    quote: "Servidor leve, bem administrado e com muita diversão garantida.",
    author: "GigaFanBR"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-container rounded-xl p-6 md:p-10 animate-fade-in-up shadow-2xl border border-primary/20 backdrop-blur-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-shadow">O que os jogadores dizem</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className="bg-black/50 p-6 rounded-lg shadow-lg border-l-4 border-primary hover:bg-black/60 transition-all duration-300">
            <p className="text-gray-300 italic mb-4 text-lg">"{testimonial.quote}"</p>
            <footer className="text-right">
              <cite className="font-semibold text-primary">– {testimonial.author}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
