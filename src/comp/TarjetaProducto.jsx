import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './TarjetaProducto.module.css'

function TarjetaProducto({ id, imagen, nombre, precio, onAgregar }) {
  const [esFavorito, setEsFavorito] = useState(false)

  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito)
  }

  const precioFormateado = Number(precio).toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  })

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
        <button className={styles.botonAgregar} onClick={onAgregar}>
          Añadir producto
        </button>

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
