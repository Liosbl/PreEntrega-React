// Clase 06: formulario para cargar un producto nuevo.
// Solo muestra el formulario: la lógica está en NewProductContainer.
function ProductForm({ producto, handleChange, handleImagen, handleFormSubmit, loading }) {
  return (
    <form className="formulario" onSubmit={handleFormSubmit}>
      <label>
        Nombre de la planta
        <input
          type="text"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
          placeholder="Ej: Calathea"
          required
        />
      </label>

      <label>
        Precio (ARS)
        <input
          type="number"
          name="precio"
          value={producto.precio}
          onChange={handleChange}
          min="1"
          placeholder="Ej: 9500"
          required
        />
      </label>

      <label>
        Descripción
        <textarea
          name="descripcion"
          value={producto.descripcion}
          onChange={handleChange}
          rows="3"
          placeholder="Contá cómo es y qué cuidados necesita"
        />
      </label>

      <label>
        Foto del producto
        <input type="file" accept="image/*" onChange={handleImagen} required />
      </label>

      {/* Botón que cambia según "loading" (operador ternario) */}
      <button type="submit" className="boton-principal" disabled={loading}>
        {loading ? (
          <>
            <span className="spinner" aria-hidden="true"></span>
            Subiendo imagen...
          </>
        ) : (
          'Guardar producto'
        )}
      </button>
    </form>
  )
}

export default ProductForm
