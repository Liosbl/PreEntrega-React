import { useState, useEffect } from 'react'
import TarjetaContacto from './TarjetaContacto'

// Clase 05: directorio del equipo.
// Maneja el fetch y los tres estados: datos, cargando y error.
function Directorio() {
  const [nosotros, setNosotros] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/data/nosotros.json')
      .then((respuesta) => {
        // fetch no falla solo si el archivo no existe, por eso lo revisamos
        if (!respuesta.ok) {
          throw new Error('No se pudo cargar el equipo')
        }
        return respuesta.json()
      })
      .then((datos) => setNosotros(datos))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, []) // [] = se ejecuta una sola vez, al montar el componente

  return (
    <section className="directorio">
      <h2 className="directorio-titulo">Quiénes cuidan tus plantas</h2>

      {/* Renderizado condicional */}
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
