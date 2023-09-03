const boxes = document.querySelectorAll('.contenedor')



window.addEventListener('scroll', animation)
animation()
function animation(){
   const heightPage = window.innerHeight
   boxes.forEach((box) => {
      techoCaja = box.getBoundingClientRect().top
      if(techoCaja < (heightPage - 60)){
         box.classList.add('teVeo')
      }
      else{
         box.classList.remove('teVeo')
      }
   })
}