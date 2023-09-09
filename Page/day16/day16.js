const remained = document.querySelector('.bottle__remained')
const litersFaltantes = document.querySelector('.bottle__remained__litros')
const drinked = document.querySelector('.bottle__drinked')
const cups = document.querySelectorAll('.cup')
let remai = 100
let drin = 0

console.log(cups)

cups.forEach( ( cup ) => {
   cup.addEventListener('click', ( e ) => {
      const cupsAtras = Array.from(cups).indexOf(cup) -1;
      const cupsDelante = (cups.length - 1) - Array.from(cups).indexOf(cup) ;
      if((cup.classList.value.split(' ')).length > 1){
         cup.classList.toggle('activado')
         agregar()
      }else{
         cup.classList.toggle('activado')
         quitar()
      }
      for (let i = 0; i <= cupsAtras; i++) {
         if((cups[i].classList.value.split(' ')).length < 2){
            cups[i].classList.toggle('activado')
            quitar()
         }
      }
      for (let i = 7; i >= 8 - cupsDelante; i--) {
         if((cups[i].classList.value.split(' ')).length > 1){
            cups[i].classList.toggle('activado')
            agregar()
         }
      }   
   })
})
function quitar(){
   litersFaltantes.innerHTML = (parseFloat(litersFaltantes.innerHTML.split('L')[0]) - 0.25) + 'L'
   remained.style.height = (remai - 12.5) + '%' 
   remai -= 12.5
   drinked.style.height = (drin + 12.5) + '%'
   drin += 12.5
   drinked.innerHTML = drin + '%'
}

function agregar(){
   litersFaltantes.innerHTML = (parseFloat(litersFaltantes.innerHTML.split('L')[0]) + 0.25) + 'L'
   remained.style.height = (remai + 12.5) + '%' 
   remai += 12.5
   drinked.style.height = (drin - 12.5) + '%'
   drin -= 12.5
   drinked.innerHTML = drin + '%'
}