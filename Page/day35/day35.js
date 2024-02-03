const imagenes = document.querySelectorAll('.contenedor')
const movimiento = document.querySelector('.movimiento')
const anterior = document.querySelector('.anterior')
const siguiente = document.querySelector('.siguiente')

let numGato = 0
anterior.addEventListener('click', () => {
    if(numGato==0){
        numGato = 4
        movimiento.style = `transform: translateX(-${numGato*500}px)`
    }else{
        numGato--
        movimiento.style = `transform: translateX(-${numGato*500}px)`
    }
})
siguiente.addEventListener('click', () => {
    if(numGato==4){
        numGato = 0
        movimiento.style = `transform: translateX(-${numGato*500}px)`
    }else{
        numGato++
        movimiento.style = `transform: translateX(-${numGato*500}px)`
    }
})