import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './TarjetaProducto.module.css' // Clase 03: CSS Modules

// Clase 03: componente reutilizable que recibe imagen, nombre y precio por props.
// Clase 04: cada tarjeta tiene su PROPIO estado de favorito.
// Clase 08: si recibe un "id", la imagen y el nombre llevan al detalle del producto.
function TarjetaProducto({ id, imagen, nombre, precio }) {
  // 1) Generación del estado: variable + función que la cambia
  const [esFavorito, setEsFavorito] = useState(false)

  // 2) Actualización dinámica: si está en true pasa a false y viceversa
  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito)
  }

  const agregarProducto = () => {
    alert(`Agregaste "${nombre}" al carrito`)
  }

  // Formateamos el precio en pesos argentinos
  const precioFormateado = Number(precio).toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  })

  // Contenido que se repite con o sin enlace
  const imagenYNombre = (
    <>
      <div className={styles.contenedorImagen}>
        <img src={imagen} alt={nombre} className={styles.imagen} />
      </div>
      <h3 className={styles.nombre}>{nombre}</h3>
    </>
  )

  return (
    <article className={styles.tarjeta}>
      {id ? (
        <Link to={`/producto/${id}`} className={styles.enlace}>
          {imagenYNombre}
        </Link>
      ) : (
        imagenYNombre
      )}

      <p className={styles.precio}>{precioFormateado}</p>

      <div className={styles.acciones}>
        <button className={styles.botonAgregar} onClick={agregarProducto}>
          Añadir producto
        </button>

        {/* 3) Asignación: la función se asigna al botón de la estrella */}
        <button
          className={esFavorito ? `${styles.estrella} ${styles.estrellaActiva}` : styles.estrella}
          onClick={marcarComoFavorito}
          aria-pressed={esFavorito}
          aria-label={esFavorito ? 'Quitar de favoritos' : 'Marcar como favorito'}
          title={esFavorito ? 'Quitar de favoritos' : 'Marcar como favorito'}
        >
          {esFavorito ? '★' : '☆'}
        </button>
      </div>
    </article>
  )
}

export default TarjetaProducto
