import { useState, useEffect } from 'react'
import Item from './Item'

// Clase 08: el listado ya no usa datos "hardcodeados".
// Los productos se piden con fetch a /productos.json (simula una API).
// Clase 07: con la prop "soloDestacados" reutilizamos este mismo componente en Inicio.
function ItemListContainer({ titulo, soloDestacados = false }) {
  // 1) Estado inicial: array vacío
  const [products, setProducts] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  // 2) Carga automática al montar el componente
  useEffect(() => {
    fetch('/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudo leer el archivo de productos')
        }
        return respuesta.json()
      })
      .then((datos) => {
        // 3) Actualización del estado con los datos del JSON
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

      {/* 4) Renderizado dinámico: un Item por cada producto */}
      {!cargando && !error && (
        <div className="grilla-productos">
          {products.map((producto) => (
            <Item key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ItemListContainer
