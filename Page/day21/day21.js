const imagen = document.querySelector('.imagen')
const cubos = document.querySelectorAll('.vacio')


cubos.forEach((cubo)=>{
    cubo.addEventListener('dragover', (e) => {
        e.preventDefault()
        e.target.classList.add('hold')
        imagen.remove() 
    } )
    cubo.addEventListener('dragenter', (e) => {

    } )
    cubo.addEventListener('dragleave', (e) => {
        e.target.classList.remove('hold')
    } )
    cubo.addEventListener('drop', (e) => {
        e.target.classList.remove('hold');
        e.target.appendChild(imagen)
    } ) 
})