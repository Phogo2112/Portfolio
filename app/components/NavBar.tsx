"use client";
import { useState, useEffect } from "react";


export default function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 200) {
        // On descend → cacher la navbar
        setShowNavbar(false);
      } else {
        // On monte → afficher la navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div>
      <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-3  transition-all duration-500 ease-in-out
        backdrop-blur-md dark:bg-#0a0a0a bg-white" ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <h2 className=" text-base sm:text-2xl  md:text-3xl lg:text-4xl font-bold">
          <span className="block md:inline text-[var(--color-accent)]">Sulyvann</span> Dain
        </h2>

        <div className=" container mx-auto px-4 flex justify-end">
          <ul className=" flex items-center justify-center gap-4 text-black h-8 ">
            <li className="text-[12px] sm:text-base md:text-xl lg:text-2xl text-(--color-primary) hover:bg-(--color-secondary) hover:text-white px-2 py-1 rounded transition-colors "><button onClick={() => scrollToSection("about")}>À propos</button></li>
            <li className="text-[10px] sm:text-base md:text-xl lg:text-2xl text-(--color-primary) hover:bg-(--color-secondary) hover:text-white px-2 py-1 rounded transition-colors"><button onClick={() => scrollToSection("projects")}>Projets</button></li>
            <li className="text-[10px] sm:text-base md:text-xl lg:text-2xl text-(--color-primary) hover:bg-(--color-secondary) hover:text-white px-2 py-1 rounded transition-colors" ><button onClick={() => scrollToSection("contact")}>Contact</button></li>
          </ul>
        </div>
      </nav>

    </div>
  )
}