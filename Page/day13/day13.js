const textArea = document.querySelector('.contenedor__input')
const contenedorElegibles = document.querySelector('.contenedor__elegibles')

textArea.addEventListener('keydown', (e)=>{
   if(e.key == 'Enter'){
      contenedorElegibles.innerHTML = ''
      if(e.target.value.length > 1){
         const posibilidades = (e.target.value).split(',')
         posibilidades.forEach(e => {
            crearElegibles(e)
         });
         elegir()
         e.target.value = ''
      }
   }
})
function crearElegibles(texto){
   const textoLimpio = texto.trim()
   if(textoLimpio.length > 0){
      const elegible = document.createElement('div')
      elegible.setAttribute('class', 'elegible')
      elegible.innerHTML = textoLimpio
      contenedorElegibles.appendChild(elegible)
   }
}
function elegir(){
   const elegibles = document.querySelectorAll('.elegible')
   const cantidad = elegibles.length
   const time = 100  

   let elegido = setInterval(()=>{
      for(let i = 0; i < cantidad; i++ ){
         setTimeout( ( ) => {
            elegibles[i].classList.add('elegido')
            console.log('agregar')
         }, 100)
         setTimeout( ( ) => {
            elegibles[i].classList.remove('elegido')
            console.log('quitar')
         }, 200)
         }   
   },200)

   setTimeout(()=>{
      clearInterval(elegido)
      elegibles.forEach((e)=>{
         e.classList.remove('elegido')
      })
      const posicionElegida = parseInt(Math.random() * cantidad)
      setTimeout(()=>{
         elegibles[posicionElegida].classList.add('elegido')
      },200)
      console.log('Elegido')
   },time * cantidad * 10)
}