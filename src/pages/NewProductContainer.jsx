import { useState } from 'react'
import ProductForm from '../comp/ProductForm'
import TarjetaProducto from '../comp/TarjetaProducto'
import { subirImagen, guardarProducto } from '../services/nube'

const productoVacio = { nombre: '', precio: '', descripcion: '' }

function NewProductContainer() {
  const [producto, setProducto] = useState(productoVacio)
  const [imagen, setImagen] = useState(null)
  const [productosCreados, setProductosCreados] = useState([])
  const [mensaje, setMensaje] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value })
  }

  const handleImagen = (e) => {
    setImagen(e.target.files[0])
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMensaje(null)

    try {
      const urlImagen = await subirImagen(imagen)
      const nuevo = await guardarProducto({
        ...producto,
        precio: Number(producto.precio),
        imagen: urlImagen,
      })
      setProductosCreados([nuevo, ...productosCreados])
      setMensaje({ tipo: 'ok', texto: `"${nuevo.nombre}" se guardó correctamente.` })
      setProducto(productoVacio)
      setImagen(null)
      e.target.reset()
    } catch (err) {
      setMensaje({ tipo: 'error', texto: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="seccion">
      <h2 className="titulo-seccion">Cargar un producto</h2>

      <div className="carga-grilla">
        <ProductForm
          producto={producto}
          handleChange={handleChange}
          handleImagen={handleImagen}
          handleFormSubmit={handleFormSubmit}
          loading={loading}
        />

        <div>
          {mensaje && (
            <p className={mensaje.tipo === 'ok' ? 'mensaje-ok' : 'mensaje-error'} role="status">
              {mensaje.texto}
            </p>
          )}

          {productosCreados.length === 0 ? (
            <p className="mensaje-estado">
              Los productos que guardes van a aparecer acá.
            </p>
          ) : (
            <div className="grilla-productos">
              {productosCreados.map((p) => (
                <TarjetaProducto key={p.id} imagen={p.imagen} nombre={p.nombre} precio={p.precio} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default NewProductContainer
