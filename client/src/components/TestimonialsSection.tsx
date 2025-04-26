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
    <section id="depoimentos" className="section-container rounded-xl p-6 md:p-10 animate-fade-in-up shadow-xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">O que os jogadores dizem</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className="bg-dark-overlay p-6 rounded-lg shadow-lg testimonial">
            <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
            <footer className="text-right">
              <cite className="font-semibold text-primary-dark">– {testimonial.author}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
