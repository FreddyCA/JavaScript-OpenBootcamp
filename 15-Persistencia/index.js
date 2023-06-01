const nombre = "Freddy"
const apellido = "Fly"

const datos = {nombre, apellido}

const datosJSON = JSON.stringify(datos)

// Para Session Storage
sessionStorage.setItem("datosSession", datosJSON)

// Para Local Storage
localStorage.setItem("datosLocal", datosJSON)

// Para cookie
let fechaCaducidad = new Date();
fechaCaducidad.setTime(fechaCaducidad.getTime() + (2 * 60 * 1000))

document.cookie = "cookieDatos=" + datosJSON + "; expires=" + fechaCaducidad.toUTCString() + "; path=/"
