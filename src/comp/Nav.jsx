import { NavLink } from 'react-router-dom'

function Nav({ cantidadEnCarrito = 0 }) {
  return (
    <nav className="nav">
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/productos">Productos</NavLink>
      <NavLink to="/nuevo-producto">Cargar producto</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
      <NavLink to="/carrito">
        Carrito
        {cantidadEnCarrito > 0 && <span className="nav-contador">{cantidadEnCarrito}</span>}
      </NavLink>
    </nav>
  )
}

export default Nav
