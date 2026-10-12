import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import TarjetaProducto from '../comp/TarjetaProducto'

function DetalleProducto({ onAgregar }) {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setCargando(true)
    fetch('/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudo leer el archivo de productos')
        }
        return respuesta.json()
      })
      .then((datos) => {
        const encontrado = datos.find((p) => p.id === Number(id))
        if (!encontrado) {
          throw new Error('Ese producto no existe')
        }
        setProducto(encontrado)
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [id])

  if (cargando) {
    return <p className="mensaje-estado">Cargando producto...</p>
  }

  if (error) {
    return (
      <div className="seccion">
        <p className="mensaje-error">{error}.</p>
        <Link to="/productos">Volver al catálogo</Link>
      </div>
    )
  }

  return (
    <section className="detalle">
      <Link to="/productos" className="volver">← Volver al catálogo</Link>

      <div className="detalle-grilla">
        <TarjetaProducto
          imagen={producto.imagen}
          nombre={producto.nombre}
          precio={producto.precio}
          onAgregar={() => onAgregar(producto)}
        />

        <div className="detalle-info">
          <p className="detalle-categoria">{producto.categoria}</p>
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion}</p>

          <dl className="detalle-cuidados">
            <div>
              <dt>Luz</dt>
              <dd>{producto.luz}</dd>
            </div>
            <div>
              <dt>Riego</dt>
              <dd>{producto.riego}</dd>
            </div>
            <div>
              <dt>Stock</dt>
              <dd>{producto.stock} unidades</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default DetalleProducto
