const numero = document.querySelector('.numero')
const texto = document.querySelector('.text')
const repley = document.querySelector('.repley')
numero.style = 'animation: rotar 3s ease-out both'

giros ()
repley.addEventListener('click', () => {
    numero.style.animation = ''
    setTimeout(() => {
        valor = 3
        numero.innerHTML = `${valor--}`
        texto.style.display = 'block'
        repley.style.display = 'none'
        numero.style = 'animation: rotar 3s ease-out both'
        giros()
    }, 30);
})
function giros (){
    let valor = 3
    let contador = setInterval(() => {
        numero.innerHTML = `${valor--}`
        if(valor == 0){
            clearInterval(contador)
            texto.style.display = 'none'
            repley.style.display = 'block'
    }
}, 800);
}


