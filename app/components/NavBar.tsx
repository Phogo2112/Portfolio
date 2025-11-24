"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Highlight } from "./ui/Highlight";

export default function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [screenSize, setScreenSize] = useState<"xs" | "sm" | "lg">("lg");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 475) {
        setScreenSize("xs");
      } else if (width < 640) {
        setScreenSize("sm");
      } else {
        setScreenSize("lg");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          bg-gray-900
          border-b border-gray-200 dark:border-gray-800
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Logo/Nom */}
        <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl px-3 sm:px-5 font-bold">
          {screenSize === "xs" && (
            <span className="flex flex-col">
              <Highlight>S.</Highlight>
              <span>Dain</span>
            </span>
          )}

          {screenSize === "sm" && (
            <span className="flex flex-col">
              <Highlight>Sulyvann</Highlight>
              <span>Dain</span>
            </span>
          )}

          {screenSize === "lg" && (
            <span className="flex flex-row items-center gap-3">
              <Highlight>Sulyvann</Highlight>
              <span>Dain</span>
            </span>
          )}
        </h2>
        {/* Menu navigation */}
        <div className="container mx-auto px-4 flex justify-end">
          <ul className="flex items-center justify-center gap-4 text-white h-8 text-[10px] sm:text-base md:text-[16px] lg:text-[18px]">
            <ThemeToggle />
            <li className="hover:text-[var(--color-accent)] px-2 py-1 rounded transition-colors">
              <button onClick={() => scrollToSection("about")}>À propos</button>
            </li>
            <li className="hover:text-[var(--color-accent)] px-2 py-1 rounded transition-colors">
              <button onClick={() => scrollToSection("projects")}>
                Projets
              </button>
            </li>
            <li className="hover:text-[var(--color-accent)] px-2 py-1 rounded transition-colors">
              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
