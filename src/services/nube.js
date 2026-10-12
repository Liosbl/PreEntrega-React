// Clase 06: servicio que SIMULA subir una imagen y guardar un producto en la nube.
// Usamos setTimeout para imitar la demora de una conexión real.
// Si en clase usaron un servicio real (Cloudinary, ImgBB, Firebase, MockAPI),
// solo hay que reemplazar el contenido de estas funciones.

export function subirImagen(archivo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!archivo) {
        reject(new Error('Elegí una imagen antes de guardar'))
        return
      }
      if (!archivo.type.startsWith('image/')) {
        reject(new Error('El archivo tiene que ser una imagen'))
        return
      }
      // Creamos una URL temporal para poder mostrar la imagen
      resolve(URL.createObjectURL(archivo))
    }, 2000)
  })
}

export function guardarProducto(producto) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Le agregamos un id, como haría una base de datos
      resolve({ ...producto, id: Date.now() })
    }, 800)
  })
}
