import { Code, Download, Sparkles } from "lucide-react";

 function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* ===== Image ===== */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.5)]">
            <img
              src="/images/hero-portfolio.jfif"
              alt="Djama Anthony Vianney"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>

        {/* ===== Texte ===== */}
        <div className="md:w-1/2 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg">
          <h2 className="text-cyan-400 text-lg font-semibold flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-cyan-400" /> About Me
          </h2>

          <h3 className="text-3xl font-bold mb-6">Qui suis-je ?</h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            Je suis <span className="text-cyan-400 font-medium">Djama Anthony Vianney</span>, 
            un développeur <span className="text-cyan-400 font-medium">Full-Stack</span> passionné, 
            curieux et créatif. J’aime transformer des idées en applications fonctionnelles 
            et esthétiques, avec une attention particulière au détail et à la performance.
          </p>

          {/* ===== Compétences ===== */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {[
              { name: "HTML5", icon: "🌐" },
              { name: "CSS3", icon: "🎨" },
              { name: "JavaScript", icon: "⚡" },
              { name: "Bootstrap", icon: "🧩" },
              { name: "React.js", icon: "⚛️" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center bg-white/10 rounded-xl py-3 hover:bg-cyan-400/10 transition"
              >
                <span className="text-2xl mb-1">{skill.icon}</span>
                <span className="text-sm text-gray-200 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* ===== Bouton CV ===== */}
          <a
            href="/images/CV_djama.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 hover:scale-105 transition-transform duration-300"
          >
            <Download className="w-5 h-5" />
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About
