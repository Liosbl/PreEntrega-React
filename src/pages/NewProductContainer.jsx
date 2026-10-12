import { useState } from 'react'
import ProductForm from '../comp/ProductForm'
import TarjetaProducto from '../comp/TarjetaProducto'
import { subirImagen, guardarProducto } from '../services/nube'

const productoVacio = { nombre: '', precio: '', descripcion: '' }

// Clase 06: contenedor con la lógica del formulario de productos
function NewProductContainer() {
  const [producto, setProducto] = useState(productoVacio)
  const [imagen, setImagen] = useState(null)
  const [productosCreados, setProductosCreados] = useState([])
  const [mensaje, setMensaje] = useState(null)
  // 1) Estado de carga, inicializado en false
  const [loading, setLoading] = useState(false)

  // Un solo manejador para todos los campos de texto (usa el "name" del input)
  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value })
  }

  const handleImagen = (e) => {
    setImagen(e.target.files[0])
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    // 2) Lo primero: activar el estado de carga
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
      e.target.reset() // limpia el input de archivo
    } catch (err) {
      setMensaje({ tipo: 'error', texto: err.message })
    } finally {
      // 3) finally se ejecuta SIEMPRE, haya salido bien o mal
      setLoading(false)
    }
  }

  return (
    <section className="seccion">
      <h2 className="titulo-seccion">Cargar un producto</h2>

      <div className="carga-grilla">
        {/* 4) Pasamos "loading" como prop al formulario */}
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
