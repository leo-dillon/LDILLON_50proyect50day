const pantallaCarga = document.querySelector('.pantallaCarga')
const imagen = document.querySelector('.imagen')

let i = 0
let int = setInterval(()=>{
   pantallaCarga.innerHTML = i
   i++
   imagen.style.filter = `blur(${( 100 - i )/ 5 }px)`
   if(i>100){
      clearInterval(int)
      pantallaCarga.remove()
   }
}, 30)
