const gatitos = document.querySelectorAll('.gatito')
const elegir = document.querySelector('.enviar')
const sector = document.querySelector('.pregunta')
const agrageecimiento = document.querySelector('.agradecimiento')
const volverSector = document.querySelector('.volverSector')
const gatoElegido = document.querySelector('.gatoElegido')

elegir.disabled = true

elegir.addEventListener('click', (e) => {
    let gatitoCat = document.querySelector('.elegido')
    gatoElegido.innerHTML = `<img src="${gatitoCat.children[0].src}" alt="gatito">`
    sector.classList.add('quitar')
    agrageecimiento.classList.remove('quitar')
})
volverSector.addEventListener('click', (e) => {
    sector.classList.remove('quitar')
    agrageecimiento.classList.add('quitar')
})
gatitos.forEach(gatito => {
    gatito.addEventListener('click', () => {
        gatitos.forEach((cat)=>cat.classList.remove('elegido'))
        gatito.classList.add('elegido')
        elegir.disabled = false
    })
});
