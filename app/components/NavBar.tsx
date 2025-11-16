"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Highlight } from "./ui/Highlight";

export default function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 200) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav
        className={`
          fixed top-0 left-0 w-full 
          flex items-center justify-between 
          px-5 py-3 z-50
          transition-all duration-500 ease-in-out 
          backdrop-blur-md 
          bg-white dark:bg-gray-900
          border-b border-gray-200 dark:border-gray-800
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Logo/Nom avec responsive */}
        <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl px-5 font-bold">
          {/* Version MOBILE/TABLETTE : Retour à la ligne */}
          <span className="flex flex-col sm:hidden">
            <Highlight>Sulyvann</Highlight>
            <span>Dain</span>
          </span>

          {/* Version DESKTOP : Sur une ligne avec espace */}
          <span className="hidden sm:flex sm:flex-row sm:items-center sm:gap-3">
            <Highlight>Sulyvann</Highlight>
            <span>Dain</span>
          </span>
        </h2>

        {/* Menu navigation */}
        <div className="container mx-auto px-4 flex justify-end">
          <ul className="flex items-center justify-center gap-4 text-black dark:text-white h-8 text-[10px] sm:text-base md:text-[16px] lg:text-[18px]">
            <ThemeToggle />
            <li className="hover:text-[var(--color-accent)] px-2 py-1 rounded transition-colors">
              <button onClick={() => scrollToSection("about")}>À propos</button>
            </li>
            <li className="hover:text-[var(--color-accent)] px-2 py-1 rounded transition-colors">
              <button onClick={() => scrollToSection("projects")}>Projets</button>
            </li>
            <li className="hover:text-[var(--color-accent)] px-2 py-1 rounded transition-colors">
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}