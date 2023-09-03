const imgLupa = document.querySelector('.contenedor__img')
const contenedor = document.querySelector('.contenedor')
const inputText = document.querySelector('.contenedor__text')

imgLupa.addEventListener('click',(e)=>{
   if( parseInt(e.target.parentElement.style.width) > 100 ){
      e.target.parentElement.style.width = 48 + 'px'
   } else {
      e.target.parentElement.style.width = 300 + 'px'
   }
})
inputText.addEventListener('keydown',(e)=>{
   if(e.key == 'Enter'){
      let text = document.createElement('p')
      text.innerHTML = e.target.value
      contenedor.parentElement.appendChild(text)
      e.target.value = ''
   }
})


