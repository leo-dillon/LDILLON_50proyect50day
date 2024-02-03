const imgGattio = document.querySelector('.gatito')
const corazon = document.querySelector('.corazon')
const contenedor = document.querySelector('.contenedor')

imgGattio.addEventListener('dblclick', (e) => {
    
    corazon.style.top = e.clientY - e.target.clientHeight +  60 + 'px'
    corazon.style.left = e.clientX - e.target.clientWidth - 80 + 'px'
    corazon.classList.add('like')
    setTimeout(() => {
        corazon.classList.remove('like')
    }, 600);
})