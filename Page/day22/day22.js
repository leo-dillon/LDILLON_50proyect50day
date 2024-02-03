const menos = document.querySelector('.menos')
const trazo = document.querySelector('.grosor')
const mas = document.querySelector('.mas')
const inputColor = document.querySelector('input')
const limpiar = document.querySelector('.limpiar')
const canvas = document.querySelector('#canvas')

const canvas2D = canvas.getContext('2d')

let tamañoLetra = 10
let presionar = false
let color = 'black'
let x, y

trazo.innerText = tamañoLetra

canvas.addEventListener('mousedown', (e) => {
    presionar = true
    x = e.offsetX
    y = e.offsetY
})
canvas.addEventListener('mouseup', (e) => {
    presionar = false
    x = ''
    y = ''
})
canvas.addEventListener('mousemove', (e) => {
    if(presionar){
        const x2 = e.offsetX
        const y2 = e.offsetY
        circulo(x2, y2)
        linea(x, x2, y, y2)
        x = x2
        y = y2
    }
})
function circulo() {
    canvas2D.beginPath()
    canvas2D.arc(x, y, tamañoLetra, 0, Math.PI * 2)
    canvas2D.fillStyle = color
    canvas2D.fill()
}
function linea(x, x2, y, y2){
    canvas2D.beginPath()
    canvas2D.moveTo(x,y)
    canvas2D.lineTo(x2,y2)
    canvas2D.strokeStyle = color
    canvas2D.lineWidth = tamañoLetra*2
    canvas2D.stroke()
}
menos.addEventListener('click', () => {
    (tamañoLetra<6) ? tamañoLetra : tamañoLetra -= 5 
    trazo.innerText = tamañoLetra
})
mas.addEventListener('click', () => {
    (tamañoLetra>49) ? tamañoLetra : tamañoLetra += 5 
    trazo.innerText = tamañoLetra
})
inputColor.addEventListener('change', (e) => color = e.target.value)

limpiar.addEventListener('click', () => canvas2D.clearRect(0,0, canvas.width, canvas.height))