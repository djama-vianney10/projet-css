import { Palette, Code2, Laptop, Users, Zap, Flag } from "lucide-react";

function Projet() {
  const services = [
    {
      icon: <Palette className="w-10 h-10 text-cyan-400 mb-3" />,
      title: "Creative Design",
      desc: "Création de designs modernes, uniques et adaptés à votre identité visuelle.",
    },
    {
      icon: <Code2 className="w-10 h-10 text-cyan-400 mb-3" />,
      title: "Clean Code",
      desc: "Développement de code propre, lisible et maintenable pour des performances optimales.",
    },
    {
      icon: <Laptop className="w-10 h-10 text-cyan-400 mb-3" />,
      title: "User Interface",
      desc: "Conception d’interfaces intuitives et esthétiques pour une expérience fluide.",
    },
    {
      icon: <Users className="w-10 h-10 text-cyan-400 mb-3" />,
      title: "User Experience",
      desc: "Optimisation du parcours utilisateur pour renforcer l’engagement et la satisfaction.",
    },
    {
      icon: <Zap className="w-10 h-10 text-cyan-400 mb-3" />,
      title: "Fast Support",
      desc: "Assistance rapide et efficace pour la maintenance et les mises à jour.",
    },
    {
      icon: <Flag className="w-10 h-10 text-cyan-400 mb-3" />,
      title: "Branding",
      desc: "Développement d’une image de marque cohérente et impactante.",
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6"
    >
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-cyan-400 text-lg font-semibold uppercase tracking-wider mb-2">
          <span className="inline-block mr-2">▸</span> Mes Services
        </h2>
        <h3 className="text-4xl font-bold text-white mb-4">
          Que puis-je faire ?
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          En tant que développeur full-stack, j’offre des services couvrant la
          conception, le développement et la mise en valeur de votre image
          digitale.
        </p>
      </div>

      {/* ===== Liste des services ===== */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg hover:bg-white/20 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition duration-500"
          >
            <div className="flex flex-col items-center text-center">
              {service.icon}
              <h4 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                {service.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projet
