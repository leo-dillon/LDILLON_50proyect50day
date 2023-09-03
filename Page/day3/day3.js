/* BÚSQUEDA */

const btnCierreMenu = document.querySelector('.btnCierreMenu')
const btnMenu = document.querySelector('.btnMenu')
const contenedorDog = document.querySelector('.contenedorGoblal')
console.log(contenedorDog.style.rotate)


btnMenu.addEventListener('click', (button)=>{
   button.target.parentElement.style.rotate = -180 + 'deg'
   contenedorDog.style.rotate = +10 + 'deg'

})
btnCierreMenu.addEventListener('click', (button)=>{
   button.target.parentElement.style.rotate = 0 + 'deg'
   contenedorDog.style.rotate = +0 + 'deg'
})