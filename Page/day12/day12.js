const container = document.querySelector('.container')
const containerTest = document.querySelectorAll('.container__test')
// const answer = document.querySelector('.container__test__answer')
// const btnOpen = document.querySelectorAll('img[alt="open"]') 
// const btnClose = document.querySelector('img[alt="btnClose"]') 

const cargando = document.querySelector('.cargando')
const cargado = document.querySelector('.cargado')

window.addEventListener('load', () => {
   setTimeout( () => {
      cargando.style.display = 'none'
      cargado.style.display = 'block'
   }, 1000)
})

containerTest.forEach( ( e ) => {
   const answer = e.querySelector('.container__test__answer')
   const btnOpen = e.querySelector('img[alt="open"]')
   const btnClose = e.querySelector('img[alt="close"]')

   console.log(btnClose)

   btnOpen.addEventListener( 'click' , ( ) => {
      answer.style.display = 'block'
      e.style.height = 70 + 'px'
      btnOpen.style.display = 'none'
      btnClose.style.display = 'block'
   })
   btnClose.addEventListener( 'click' , ( ) => {
      answer.style.display = 'none'
      e.style.height = 30 + 'px'
      btnOpen.style.display = 'block'
      btnClose.style.display = 'none'
   })

})

