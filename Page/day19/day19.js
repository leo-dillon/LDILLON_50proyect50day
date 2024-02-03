const relojHora = document.querySelector('.reloj--hora')
const relojMinuto = document.querySelector('.reloj--minuto')
const relojSegundo = document.querySelector('.reloj--segundo')
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabados', 'Domingo']
const mes = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const diaEscrito = document.querySelector('.hora-escrita')
const diaNumerico = document.querySelector('.hora-numerica')
const darkMode = document.querySelector('.darkMode')


function rotacion(ticks, tiempo){
    const rotateOrigin = -90
    const grados = parseFloat(360/ticks, 1) * tiempo
    return rotateOrigin + grados
}

darkMode.addEventListener('click', (e) => {
    const day19 = document.querySelector('.day19')
    day19.classList.toggle('dark')
})


function reloj(){
    const tiempo = new Date()
    const segundo = tiempo.getSeconds()
    relojSegundo.style.transform =`translate(0%, 0%) rotate(${rotacion(60, segundo)}deg)`
    const minuto = tiempo.getMinutes()
    relojMinuto.style.transform =`translate(0%, 0%) rotate(${rotacion(60, minuto)}deg)`
    const horas = tiempo.getHours()
    relojHora.style.transform =`translate(0%, 0%) rotate(${rotacion(12, horas)}deg)`
    diaEscrito.innerText = `${dias[tiempo.getDay()]} - ${mes[tiempo.getMonth()]} - ${tiempo.getFullYear()}`
    diaNumerico.innerText = `${horas}:${(minuto<10)?'0'+minuto:minuto}:${(segundo<10)?'0'+segundo:segundo}:${(horas > 12)?'PM':'AM'}`
}
reloj()
setInterval(reloj, 1000)

