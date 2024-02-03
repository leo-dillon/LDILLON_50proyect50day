const btnNoti = document.querySelector('.noti')
const barraNoti = document.querySelector('.barraNotis')


const MENSAJES = [
    'El sol brillaba en el cielo azul, iluminando el día con su cálido resplandor',
    'Ríete de tus errores, aprende de tus caídas y sigue adelante con la determinación de alcanzar tus sueños.',
    'Las olas acarician la playa mientras el viento susurra secretos marinos, creando una sinfonía natural que llena el corazón de paz.',
    'En la penumbra, las estrellas titilan como destellos de esperanza, guiándonos en la oscuridad hacia un futuro lleno de posibilidades.',
    'Cada libro es una puerta hacia mundos desconocidos, donde la imaginación vuela libre y los personajes cobran vida entre las páginas.',
    'Mensaje # 6',
]
const COLORES = [
    '#CD5C5C',
    '#F08080',
    '#581845 ',
    '#DAF7A6',
    '#454545',
    '#25500',
    '#202020'
]
btnNoti.addEventListener('click', ()=>{
    const contenedorNotificacion = document.createElement('div')
    contenedorNotificacion.classList.add('mensajeA')
    contenedorNotificacion.style.backgroundColor = COLORES[valorRandom(COLORES)]
    contenedorNotificacion.innerText = MENSAJES[valorRandom(MENSAJES)]
    barraNoti.appendChild(contenedorNotificacion)
    setTimeout(() => {
        
        contenedorNotificacion.remove()
    }, 1000);

})

function valorRandom (ARRAY){
    return Math.floor(Math.random() * ARRAY.length)
}