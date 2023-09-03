const btnJoke = document.querySelector('.button1')
const contenedorTexto = document.querySelector('.contenedor__reto')


async function generarBroma(){
   const configuracion = {
      headers: {
         Accept: 'application/json'
      }
   }
   const respuesta = await fetch('https://icanhazdadjoke.com', configuracion)
   const datos = await respuesta.json()
   contenedorTexto.innerHTML = datos.joke
}

btnJoke.addEventListener('click', ()=>{
   generarBroma()
})
generarBroma()