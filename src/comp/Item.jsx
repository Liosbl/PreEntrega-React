import TarjetaProducto from './TarjetaProducto'

function Item({ producto, onAgregar }) {
  return (
    <TarjetaProducto
      id={producto.id}
      imagen={producto.imagen}
      nombre={producto.nombre}
      precio={producto.precio}
      onAgregar={() => onAgregar(producto)}
    />
  )
}

export default Item
