


export default function NavBar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav className="w-full flex items-center justify-between px-8 py-4">
        <h2 className="text-black text-[25px] absolute mt-5" >Porfolio <br /> <span className="text-(--color-accent)">Sulyvann</span> Dain</h2>

        <div className="container mx-auto px-4 flex justify-end">
          <ul className="flex items-center justify-center gap-4 text-black h-8 ">
            <li className="text-(--color-primary) hover:bg-(--color-secondary) hover:text-white px-2 py-1 rounded transition-colors text-xl"><button onClick={() => scrollToSection("about")}>À propos</button></li>
            <li className="text-xl text-(--color-primary) hover:bg-(--color-secondary) hover:text-white px-2 py-1 rounded transition-colors"><button onClick={() => scrollToSection("projects")}>Projets</button></li>
            <li className="text-xl text-(--color-primary) hover:bg-(--color-secondary) hover:text-white px-2 py-1 rounded transition-colors" ><button onClick={() => scrollToSection("contact")}>Contact</button></li>
          </ul></div></nav>

    </div>
  )
}