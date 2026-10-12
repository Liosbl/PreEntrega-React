function TarjetaContacto({ nombre, email, puesto, foto }) {
  return (
    <article className="tarjeta-contacto">
      <img src={foto} alt={`Foto de ${nombre}`} className="tarjeta-contacto-foto" />
      <div>
        <h3>{nombre}</h3>
        <p className="tarjeta-contacto-puesto">{puesto}</p>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </article>
  )
}

export default TarjetaContacto
