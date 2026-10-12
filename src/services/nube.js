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
      resolve(URL.createObjectURL(archivo))
    }, 2000)
  })
}

export function guardarProducto(producto) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...producto, id: Date.now() })
    }, 800)
  })
}
