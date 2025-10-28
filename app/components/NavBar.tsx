


export default function NavBar() {

  return (
    <div className="navbar bg-white flex items-center justify-center">
      <ul className="flex items-center justify-center gap-4 text-black h-8">
        <li><a href="/">a propos de moi !</a></li>
        <li><a href="/projects">Mes projets</a></li>
        <li><a href="/last">mon passer</a></li>
      </ul>
    </div>
  )
}