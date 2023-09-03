const key = document.querySelector('.contenedor__key')
const keyCode = document.querySelector('.contenedor__keyCode')
const code = document.querySelector('.contenedor__code')


window.addEventListener('keydown', (e)=>{
console.log(e)
   key.innerHTML = e.key;
   keyCode.innerHTML = e.keyCode
   code.innerHTML = e.code
} )