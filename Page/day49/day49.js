const contenedor = document.querySelector('.contenedor')
const creardorNotas = document.querySelector('.creardorNotas')

creardorNotas.addEventListener('keypress', (e) => {
    // console.log(e)
    if(e.key === 'Enter'){
        let contenedorTodo = document.createElement('div')
        contenedorTodo.classList.add('notas')
        contenedorTodo.innerHTML = `<p>${e.target.value}</p>`
        contenedorTodo.addEventListener('click', (e) => {
            console.log(e)
            contenedorTodo.children[0].classList.toggle('completado')
        })
        contenedorTodo.addEventListener('dblclick', () => {
            let evento = confirm('Eliminar la nota.')
            if(evento){
                contenedorTodo.remove()
            }
        })
        contenedor.appendChild(contenedorTodo)
    }
})
