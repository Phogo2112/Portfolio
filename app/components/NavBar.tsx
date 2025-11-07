


export default function NavBar() {

  return (
    <div>
      <nav className="w-full flex items-center justify-between px-8 py-4">
        <h2 className="text-black text-[25px] absolute mt-5" >Porfolio <br /> <span className="text-(--color-accent)">Sulyvann</span> Dain</h2>

        <div className="container mx-auto px-4 flex justify-end">
          <ul className="flex items-center justify-center gap-4 text-black h-8 ">
            <li className="text-(--color-primary) hover:bg-(--color-secondary) hover:text-white px-2 py-1 rounded transition-colors text-xl"><a href="/">a propos de moi !</a></li>
            <li className="text-xl text-(--color-primary) hover:bg-(--color-secondary) hover:text-white px-2 py-1 rounded transition-colors"><a href="/projects">Mes projets</a></li>
            <li ><a className="text-xl text-(--color-primary) hover:bg-(--color-secondary) hover:text-white px-2 py-1 rounded transition-colors" href="/last"> mon passer</a></li>
          </ul></div></nav>

    </div>
  )
}