import TarjetaProducto from './TarjetaProducto'

// Clase 08: componente Item.
// Recibe un producto completo (el objeto del JSON) y se lo pasa a TarjetaProducto.
function Item({ producto }) {
  return (
    <TarjetaProducto
      id={producto.id}
      imagen={producto.imagen}
      nombre={producto.nombre}
      precio={producto.precio}
    />
  )
}

export default Item
