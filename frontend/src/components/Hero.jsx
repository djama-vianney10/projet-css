 function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Arrière-plan flou lumineux */}
      <div className="absolute inset-0 bg-[url('/path/to/your-image.jpg')] bg-cover bg-center opacity-10"></div>

      {/* Contenu principal */}
      <div className="relative container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* Texte principal */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-lg tracking-wide text-cyan-400 font-medium">
            Hello, my name is
          </h2>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Djama Anthony <span className="text-cyan-400">Vianney</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg">
            Un développeur <span className="text-cyan-400">Full-Stack</span> passionné et dévoué, motivé par le monde en constante évolution de la technologie et ses possibilités illimitées.
          </p>

          <div>
            <a
              href="#contact"
              className="inline-block px-8 py-3 text-lg font-semibold text-black bg-cyan-400 rounded-full shadow-lg hover:bg-cyan-300 hover:scale-105 transform transition duration-300"
            >
              Contacte-moi
            </a>
          </div>
        </div>

        {/* Image / illustration */}
        <div className="md:w-1/2 flex justify-center mb-12 md:mb-0">
          <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_0_25px_rgba(34,211,238,0.5)]">
            <img
              src="/path/to/your-photo.jpg"
              alt="Vianney"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
