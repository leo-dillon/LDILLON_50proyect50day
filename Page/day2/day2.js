/* buscar */
let progreso = document.querySelector('.progreso')
const anterior = document.querySelector('#anterior')
const posterior = document.querySelector('#posterior')
const circulos = document.querySelectorAll('.circulo')
circulos[0].classList.add('activado')
posterior.addEventListener('click',()=>{
   if(progreso.style.width == ""){
      progreso.style.width = 33 + '%'
      console.log('caso 1')
   }else{
      progreso.style.width = parseInt(progreso.style.width.split('%')[0]) + 32 + '%'
      console.log('caso 2')
   }
   if(parseInt(progreso.style.width.split('%')[0]) >100){
      progreso.style.width = 98 + '%'
      console.log('caso 3')
   }
   circulo()
})
anterior.addEventListener('click',()=>{
   if(parseInt(progreso.style.width.split('%')[0])<5){
      progreso.style.width = 0 + '%'
      console.log('caso 4')
   }
   if(progreso.style.width == ""){
      progreso.style.width = 0 + '%'
      console.log('caso 5')
   }else{
      progreso.style.width = parseInt(progreso.style.width.split('%')[0]) - 32 + '%'
      console.log('caso 6')
      console.log(parseInt(progreso.style.width.split('%')[0]))
   }
   circulo()
})
function circulo(){
   let porcentajeProceso = parseInt(progreso.style.width.split('%')[0])
   if(parseInt(progreso.style.width.split('%')[0])<10){
      circulos[0].classList.add('activado')
      circulos[1].classList.remove('activado')
   }
   if(parseInt(progreso.style.width.split('%')[0])>25){
      circulos[0].classList.add('activado')
      circulos[1].classList.add('activado')
      circulos[2].classList.remove('activado')
      circulos[3].classList.remove('activado')
   }
   if(parseInt(progreso.style.width.split('%')[0])>55){
      circulos[0].classList.add('activado')
      circulos[1].classList.add('activado')
      circulos[2].classList.add('activado')
      circulos[3].classList.remove('activado')
   }
   if(parseInt(progreso.style.width.split('%')[0])>70){
      circulos.forEach(element => {
         element.classList.add('activado')
      });
   }
}
