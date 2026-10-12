import { NavLink } from 'react-router-dom'

// Clase 03: barra de navegación con enlaces de ejemplo.
// Clase 07: usamos NavLink en lugar de <a> para no recargar la página.
// NavLink le agrega la clase "active" al enlace de la página actual.
function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/productos">Productos</NavLink>
      <NavLink to="/nuevo-producto">Cargar producto</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
      <NavLink to="/carrito">Carrito</NavLink>
    </nav>
  )
}

export default Nav
