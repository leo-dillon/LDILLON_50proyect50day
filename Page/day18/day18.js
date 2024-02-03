let siguiente = document.querySelector('.posterior')
let anterior = document.querySelector('.anterior')
let imagen = document.querySelector('.imagenes')
let imagenFondo = document.querySelector('.day18')
let linkKitty = 'http://127.0.0.1:5500/IMG/FotosGatitos/'

function animation(valor, linkKitty) {
    imagenFondo.style.background = 'url(' + linkKitty + `kitti-${valor}.jpeg)` 
    imagenFondo.style.backgroundSize = 'cover'
    imagenFondo.style.backdropFilter = 'blur(100px) greyscale(100%)'
    imagenFondo.classList.add('animacion')
    setTimeout(() => {
        imagenFondo.classList.remove('animacion')
    }, 500);
}
siguiente.addEventListener('click', (e) => {
    let img = imagen.children[0]
    let valor = parseInt(img.src.split('-')[1][0])
    valor++
    (valor>5) ? valor = 1 : valor
    setTimeout(() => {
        img.src = linkKitty + `kitti-${valor}.jpeg`
    }, 100);
    animation(valor, linkKitty)
})
anterior.addEventListener('click', (e) => {
    let img = imagen.children[0]
    let valor = parseInt(img.src.split('-')[1][0])
    valor--
    (valor<1) ? valor = 5 : valor
    img.src = linkKitty + `kitti-${valor}.jpeg`
    animation(valor, linkKitty)
})