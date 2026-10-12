import { Link } from 'react-router-dom'
import ItemListContainer from '../comp/ItemListContainer'

// Clase 07: página de inicio ( / )
function Inicio() {
  return (
    <>
      {/* Paso 1: diseño atractivo para la portada */}
      <section className="hero">
        <div className="hero-texto">
          <h1>Plantas que llegan sanas a tu casa</h1>
          <p>
            Las cultivamos en nuestro vivero y las enviamos en maceta, con una guía de
            riego y luz para cada una.
          </p>
          <Link to="/productos" className="boton-principal">
            Ver todas las plantas
          </Link>
        </div>
        <img src="/img/productos/monstera.svg" alt="Monstera en maceta" className="hero-img" />
      </section>

      {/* Paso 2: productos destacados reutilizando ItemListContainer */}
      <ItemListContainer titulo="Destacadas de la temporada" soloDestacados={true} />
    </>
  )
}

export default Inicio
