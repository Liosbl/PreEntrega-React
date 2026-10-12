import { Link } from 'react-router-dom'

function NoEncontrada() {
  return (
    <section className="seccion texto-corto">
      <h2 className="titulo-seccion">Esta página no existe</h2>
      <p>Revisá la dirección o volvé al inicio.</p>
      <Link to="/" className="boton-principal">Ir al inicio</Link>
    </section>
  )
}

export default NoEncontrada
