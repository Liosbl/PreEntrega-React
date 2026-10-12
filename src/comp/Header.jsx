import { Link } from 'react-router-dom'
import Nav from './Nav'

// Clase 03: Header con el logo y la barra de navegación
function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/img/productos/monstera.svg" alt="" className="logo-img" />
        <span>Raíz</span>
      </Link>
      <Nav />
    </header>
  )
}

export default Header
