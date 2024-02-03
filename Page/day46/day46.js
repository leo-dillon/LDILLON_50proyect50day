const contenedorPregunta = document.querySelector('.contenedorPregunta')
let RESPUESTAS__CORRECTAS = 0
let PREGUNTA = 0
const SECCIONES = [
    {
        pregunta: '¿HTML es un lenguaje de progrmación?',
        respuestas: ['Es un lenguaje de progrmación.', 'Es un lenguaje de marcado.', 'Es una marca de lavaropas.', 'Es una forma de jugar al FIFA.'],
        correcta: '2',
        button: 'siguiente'
    },
    {
        pregunta: '¿Que significan las siglas C.S.S?',
        respuestas: ['Hojas de estilo en cascada', 'Hojas de estilo de cascaron', 'Hojas de estilo cambiantes', 'Hora de estilar la web'],
        correcta: '1',
        button: 'siguiente'
    },
    {
        pregunta: '¿Cuanto es 12 * 5?',
        respuestas: ['30', '90', '120', '60'],
        correcta: '4',
        button: 'siguiente'
    },
    {
        pregunta: 'Son las 5 menos 5, faltan 5 para las 5. ¿Cuantas veces dije cinco? cin contar el ultimo 5.',
        respuestas: ['5', '6', '7', '13'],
        correcta: '3',
        button: 'Enviar'
    }
]
crearPregunta (PREGUNTA)
function crearPregunta (PREGUNTA){
    
    contenedorPregunta.innerHTML = `
    <h2>${SECCIONES[PREGUNTA].pregunta}</h2>
    <div>
        <div>
            <input class="respuesta" type="radio" name="answer" id="1">
            <label for="1">${SECCIONES[PREGUNTA].respuestas[0]}</label>
        </div>
        <div>
            <input class="respuesta" type="radio" name="answer" id="2">
            <label for="2">${SECCIONES[PREGUNTA].respuestas[1]}</label>
        </div>
        <div>
            <input class="respuesta" type="radio" name="answer" id="3">
            <label for="3">${SECCIONES[PREGUNTA].respuestas[2]}</label>
        </div>
        <div>
            <input class="respuesta" type="radio" name="answer" id="4">
            <label for="4">${SECCIONES[PREGUNTA].respuestas[3]}</label>
        </div>
    </div>
    <button class="button">${SECCIONES[PREGUNTA].button}</button>
    `

    let respuestas = contenedorPregunta.querySelectorAll('.respuesta')
    let button = contenedorPregunta.querySelector('.button')
    button.disabled = true
    let respuesta_final = ''
    respuestas.forEach(respuesta => {
        respuesta.addEventListener('click', (e) => {
            respuesta_final = e.target.id
            button.disabled = false
        })
    })
    button.addEventListener('click', (e) => {
        console.log(PREGUNTA)
        if(PREGUNTA>=3){
            contenedorPregunta.innerHTML = `
            <h2>Gracias por participar en nuestro cuestionario!!</h2>
            <h3>Respuestas: ${RESPUESTAS__CORRECTAS}/4</h3>
            <button class="button" onClick="location.reload()">Volver a comenzar</button>
            `
        }else{
            console.log(respuesta_final, SECCIONES[PREGUNTA].correcta)
            if(respuesta_final == SECCIONES[PREGUNTA].correcta){
                RESPUESTAS__CORRECTAS++
            }
            PREGUNTA++
            crearPregunta (PREGUNTA)

        }
    })
}