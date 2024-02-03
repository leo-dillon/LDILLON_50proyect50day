const inicio = document.querySelector('.inicio')
const continuar = document.querySelector('.continuar')

const game = document.querySelector('.game')
const contenedor__tiempo = document.querySelector('.tiempo')
const contenedor__puntaje = document.querySelector('.puntaje')

const fin = document.querySelector('.cotenedorFin')

let tiempo = 100
let puntaje = 0

continuar.addEventListener('click', ()=>{
    generarImagen() 
    inicio.classList.add('fuera')
    game.classList.remove('fuera')
    let pasaTiempo = setInterval(() => {
        contenedor__tiempo.innerHTML = `Tiempo: ${tiempo}`
        if(tiempo == 0){
            clearInterval(pasaTiempo)
            fin.classList.remove('fuera')
        }
        tiempo--
    }, 1000);
})


function random(max){
    return parseInt(Math.random() * max)
}
function generarImagen(){
    let cantidad = random(5)
    let imagen = document.createElement('img')
    imagen.classList.add('elDiablo')
    imagen.src='../../IMG/diablo.png'
    imagen.alt = 'El diablo'
    imagen.style.top = `${random(540)}px`
    imagen.style.left = `${random(840)}px`
    imagen.addEventListener('click', () => {
        imagen.remove()
        puntaje++
        contenedor__puntaje.innerHTML = `Puntaje: ${puntaje}`
        for (let i = 0; i < cantidad; i++) {
            generarImagen()
        }
    })
    game.appendChild(imagen)
}