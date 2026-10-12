import { Link } from 'react-router-dom'

const formatearPrecio = (valor) =>
  Number(valor).toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  })

function Carrito({ carrito, onCambiarCantidad, onQuitar, onVaciar }) {
  if (carrito.length === 0) {
    return (
      <section className="seccion texto-corto">
        <h2 className="titulo-seccion">Tu carrito</h2>
        <p>Todavía no agregaste plantas.</p>
        <Link to="/productos" className="boton-principal">Elegir plantas</Link>
      </section>
    )
  }

  const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0)

  return (
    <section className="seccion">
      <h2 className="titulo-seccion">Tu carrito</h2>

      <ul className="carrito-lista">
        {carrito.map((item) => (
          <li key={item.id} className="carrito-item">
            <img src={item.imagen} alt={item.nombre} className="carrito-img" />

            <div className="carrito-datos">
              <h3>{item.nombre}</h3>
              <p>{formatearPrecio(item.precio)} c/u</p>
            </div>

            <div className="carrito-cantidad">
              <button
                onClick={() => onCambiarCantidad(item.id, -1)}
                aria-label={`Quitar una unidad de ${item.nombre}`}
              >
                −
              </button>
              <span>{item.cantidad}</span>
              <button
                onClick={() => onCambiarCantidad(item.id, 1)}
                disabled={item.cantidad >= item.stock}
                aria-label={`Agregar una unidad de ${item.nombre}`}
              >
                +
              </button>
            </div>

            <p className="carrito-subtotal">{formatearPrecio(item.precio * item.cantidad)}</p>

            <button className="carrito-quitar" onClick={() => onQuitar(item.id)}>
              Quitar
            </button>
          </li>
        ))}
      </ul>

      <div className="carrito-resumen">
        <button className="carrito-vaciar" onClick={onVaciar}>Vaciar carrito</button>
        <p className="carrito-total">
          Total: <strong>{formatearPrecio(total)}</strong>
        </p>
      </div>
    </section>
  )
}

export default Carrito
