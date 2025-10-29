


export default function NavBar() {

  return (
    <div>
      <h2 className="text-black text-3xl" >Porfolio <br /> Sulyvann Dain</h2>
    <div className="navbar bg-white flex items-center justify-center flex-row">
      
      
      <ul className="flex items-center justify-center gap-4 text-black h-8 ">
        <li className="text-(--color-primary) hover:bg-(--color-secondary) hover:text-white px-2 py-1 rounded transition-colors text-xl"><a href="/">a propos de moi !</a></li>
        <li className="text-xl text-(--color-primary) hover:bg-(--color-secondary) hover:text-white px-2 py-1 rounded transition-colors"><a href="/projects">Mes projets</a></li>
        <li ><a className="text-xl text-(--color-primary) hover:bg-(--color-secondary) hover:text-white px-2 py-1 rounded transition-colors" href="/last"> mon passer</a></li>
      </ul>
    </div>
    </div>
  )
}