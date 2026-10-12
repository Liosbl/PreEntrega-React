import { Link } from 'react-router-dom'
import Nav from './Nav'

function Header({ cantidadEnCarrito }) {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/img/productos/monstera.svg" alt="" className="logo-img" />
        <span>Raíz</span>
      </Link>
      <Nav cantidadEnCarrito={cantidadEnCarrito} />
    </header>
  )
}

export default Header
