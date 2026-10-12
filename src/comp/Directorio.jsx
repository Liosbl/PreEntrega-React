import { useState, useEffect } from 'react'
import TarjetaContacto from './TarjetaContacto'

function Directorio() {
  const [nosotros, setNosotros] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/data/nosotros.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudo cargar el equipo')
        }
        return respuesta.json()
      })
      .then((datos) => setNosotros(datos))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [])

  return (
    <section className="directorio">
      <h2 className="directorio-titulo">Quiénes cuidan tus plantas</h2>

      {cargando && <p className="mensaje-estado claro">Cargando equipo...</p>}

      {error && (
        <p className="mensaje-error">
          {error}. Revisá el archivo public/data/nosotros.json.
        </p>
      )}

      {!cargando && !error && (
        <div className="grilla-contactos">
          {nosotros.map((persona) => (
            <TarjetaContacto
              key={persona.id}
              nombre={persona.nombre}
              email={persona.email}
              puesto={persona.puesto}
              foto={persona.foto}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Directorio
