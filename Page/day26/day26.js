const siguiente = document.querySelector('.siguiente')
const anterior = document.querySelector('.anterior')
const texto = document.querySelector('.texto')
const imagen = document.querySelector('.imagen')
const textoB = document.querySelector('.textoB')
const imagenB = document.querySelector('.imagenB')
const textoC = document.querySelector('.textoC')
const imagenC = document.querySelector('.imagenC')
let numero = 0
const gato =[
    {
        nombre: 'Gato numero 1',
        descripcion: 'En esta imagen tenemos una gran cantidad de gatos explorando un patio.'
    },
    {
        nombre: 'Gato numero 2',
        descripcion: 'Em esta imagen tenemos a una gata que disfruta de nadar en la bañera.'
    },
    {
        nombre: 'Gato numero 3',
        descripcion: 'En esta imagen tenemos a dos gatitos que estan exploando su nueva casa.'
    },
    {
        nombre: 'Gato numero 4',
        descripcion: 'En esta imagen tenemos a dos gatitos descansando.'
    },
    {
        nombre: 'Gato numero 5',
        descripcion: 'En esta imagen tenemos una gatita mirando con curiosidad a la camara de fotos mienrtas se esconde detras de un sofa.'
    },
]
function numeroImagen(numero, operacion){
    numero = numero + operacion
    if(numero>=5){
        numero = 0
    }else if(numero<0){
        numero = 4
    }
    return numero
}

siguiente.addEventListener('click', (e) => {
    numero = numeroImagen(numero, 1)

    imagen.children[0].classList.add('arriba')
    texto.classList.add('abajo')
    setTimeout(() => {     
        imagen.children[0].classList.remove('arriba')
        imagen.children[0].style = 'transform: translateY(1000px);'
        imagen.children[0].classList.add('abajoB')
        texto.classList.remove('abajo')
        texto.style = 'transform: translateY(-1000px);'
        texto.classList.add('arribaB')
        setTimeout(() => {
            imagen.children[0].classList.remove('abajoB')
            imagen.children[0].style = 'transform: translateY(0px);'
            texto.classList.remove('arribaB')
            texto.style = 'transform: translateY(0px);'
        }, 300);
        imagen.children[0].src = `../../IMG/FotosGatitos/kitti-${numero+1}.jpeg`
            texto.innerHTML = `
            <h1>${gato[numero].nombre}</h1>
            <p>${gato[numero].descripcion}</p>
            `
        
    }, 300);
})
anterior.addEventListener('click', (e) => {
    numero = numeroImagen(numero, -1)

    imagen.children[0].src = `../../IMG/FotosGatitos/kitti-${numero+1}.jpeg`
        texto.innerHTML = `
        <h1>${gato[numero].nombre}</h1>
        <p>${gato[numero].descripcion}</p>
        `
})
