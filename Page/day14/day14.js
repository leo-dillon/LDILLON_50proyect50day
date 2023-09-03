window.addEventListener('load', moviendoCosas)

const navigation = document.querySelector('.navigation')
const imgOpen = document.querySelector('img[alt="Menu"]')
const imgClose = document.querySelector('img[alt="Close"]')
const links = document.querySelectorAll('.link')

function moviendoCosas() {
   navigation.style.rotate = 1080 + 'deg'
} 

imgOpen.addEventListener('click', ( ) => {
   imgOpen.style.width = 0 + 'px'
   imgOpen.style.height = 0 + 'px'
   imgClose.style.width = 32 + 'px'
   imgClose.style.height = 32 + 'px'
})
imgClose.addEventListener('click', ( ) => {
   imgClose.style.width = 0 + 'px'
   imgClose.style.height = 0 + 'px'
   imgOpen.style.width = 32 + 'px'
   imgOpen.style.height = 32 + 'px'
})
links.forEach( (btn) => {
   console.log(btn)
   btn.addEventListener('click', ( e ) => {
      const rotateValor = (e.target.style.rotate).split('deg')[0]
      console.log(rotateValor)
      if(rotateValor > 14){
         e.target.style.rotate = 0 + 'deg'
      }else{
         e.target.style.rotate = 360 + 'deg'
      }
   })
})