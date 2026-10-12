import { useState, useEffect } from 'react'
import Item from './Item'

function ItemListContainer({ titulo, soloDestacados = false, onAgregar }) {
  const [products, setProducts] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudo leer el archivo de productos')
        }
        return respuesta.json()
      })
      .then((datos) => {
        if (soloDestacados) {
          setProducts(datos.filter((producto) => producto.destacado))
        } else {
          setProducts(datos)
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [soloDestacados])

  return (
    <section className="seccion">
      {titulo && <h2 className="titulo-seccion">{titulo}</h2>}

      {cargando && <p className="mensaje-estado">Cargando productos...</p>}

      {error && (
        <p className="mensaje-error">
          {error}. Revisá que exista el archivo public/productos.json y recargá la página.
        </p>
      )}

      {!cargando && !error && (
        <div className="grilla-productos">
          {products.map((producto) => (
            <Item key={producto.id} producto={producto} onAgregar={onAgregar} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ItemListContainer
