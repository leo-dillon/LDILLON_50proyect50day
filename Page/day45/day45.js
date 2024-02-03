const gatitoElegido = document.querySelector('.gatitoElegido')
const bordeExterior = document.querySelector('.bordeExterior')
const bordeMedio = document.querySelector('.bordeMedio')
const interior = document.querySelector('.interior')
const gatitos = document.querySelectorAll('.gatito')
const abrirMenu = document.querySelector('.abrirMenu')
const cerrarMenu = document.querySelector('.cerrarMenu')



cerrarMenu.addEventListener('click', () => {
    interior.style.width = 0 + 'px'
    setTimeout(() => {
        bordeMedio.style.width = 0 + 'px'
    }, 300);
    setTimeout(() => {
        bordeExterior.style.width = 0 + 'px'
    }, 500);
})
abrirMenu.addEventListener('click', () => {
    bordeExterior.style.width = 348 + 'px'
    setTimeout(() => {
        bordeMedio.style.width = 324 + 'px'
    }, 300);
    setTimeout(() => {
        interior.style.width = 300 + 'px'
    }, 500);
})
gatitos.forEach(gatito => {
    gatito.addEventListener('click', (e) => {
        let number = e.target.innerText[e.target.innerText.split('').length - 1]
        gatitoElegido.innerHTML = `
        <picture>
            <img src="../../IMG/FotosGatitos/kitti-${number}.jpeg" alt="gatito - 1">
        </picture>
        <h1>Gatito - ${number}</h1>
        `
        cerrarMenu.click()
    })

})
