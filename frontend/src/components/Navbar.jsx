import { useState } from "react";
import { Menu, X } from "lucide-react";

 function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-white tracking-wide hover:text-cyan-400 transition"
        >
          coco<span className="text-cyan-400">Crafted</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-cyan-400 transition duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/10">
          <ul className="flex flex-col items-center py-4 space-y-3 text-white font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-cyan-400 transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar
