import { Link } from 'react-router-dom'

// Página de carrito (por ahora vacía, se completa en próximas clases)
function Carrito() {
  return (
    <section className="seccion texto-corto">
      <h2 className="titulo-seccion">Tu carrito</h2>
      <p>Todavía no agregaste plantas.</p>
      <Link to="/productos" className="boton-principal">Elegir plantas</Link>
    </section>
  )
}

export default Carrito
