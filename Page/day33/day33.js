const crearNota = document.querySelector('.crearNota')
const day = document.querySelector('.day33')
if(localStorage.getItem('notas')){
    cargarNotas ()
}

crearNota.addEventListener('click', () => {
    let nota = document.createElement('article')
    nota.classList.add('nota')
    nota.innerHTML = `
    <header>
        <button class="editar">
            <img src="../../IMG/editar.png" alt="Editar nota">
        </button>
        <button class="borrar">
            <img  src="../../IMG/borrar.png" alt="Borrar nota">
        </button>
    </header>
    <textarea class="textarea"> </textarea>`
    
    const editar = nota.querySelector('.editar')
    const eliminar = nota.querySelector('.borrar')
    const textarea = nota.querySelector('.textarea')

    editar.addEventListener('click', (e) => {
        (textarea.disabled) ? textarea.disabled = false : textarea.disabled = true
    })
    eliminar.addEventListener('click', () => {
        nota.remove()
        guardarNotas()
    })
    textarea.addEventListener('input', (e) => {
        guardarNotas()
    })
    day.appendChild(nota)
})

function guardarNotas() {
    const NodeList__contenedorNotas = document.querySelectorAll('.textarea')
    const contenedorNotas = Array.from(NodeList__contenedorNotas) 
    notas = contenedorNotas.map(nota=>{ 
        return nota.value
    })
    localStorage.setItem('notas', JSON.stringify(notas))
    
}
function cargarNotas () {
    let notas = JSON.parse(localStorage.getItem('notas'))
    notas.forEach(nota => {
        let contenedorNota = document.createElement('article')
        contenedorNota.classList.add('nota')
        contenedorNota.innerHTML = `
        <header>
            <button class="editar">
                <img src="../../IMG/editar.png" alt="Editar nota">
            </button>
            <button class="borrar">
                <img  src="../../IMG/borrar.png" alt="Borrar nota">
            </button>
        </header>
        <textarea class="textarea"> ${nota} </textarea>`
        const editar = contenedorNota.querySelector('.editar')
        const eliminar = contenedorNota.querySelector('.borrar')
        const textarea = contenedorNota.querySelector('.textarea')

        editar.addEventListener('click', (e) => {
            (textarea.disabled) ? textarea.disabled = false : textarea.disabled = true
        })
        eliminar.addEventListener('click', () => {
            contenedorNota.remove()
            guardarNotas()
        })
        textarea.addEventListener('input', (e) => {
            guardarNotas()
        })
   
        day.appendChild(contenedorNota)
        });
}

