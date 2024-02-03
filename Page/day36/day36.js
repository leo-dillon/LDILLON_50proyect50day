const CB = document.querySelector('.contenedorBloques')
let color = ['red','yellow','blue','green','grey','salmon','brown']

for (let i = 0; i < 483; i++) {
    let bloque = document.createElement('div')
    bloque.setAttribute('class', 'bloque')
    bloque.addEventListener('mouseover', (e) =>{
        e.target.style.background = color[random()]
        e.target.style.boxShadow = `0 0 12px ${color[random()]}`
    })
    bloque.addEventListener('mouseout', (e) => {
        setTimeout(() => {
            e.target.style.background = 'none'
            e.target.style.boxShadow = `none`
        }, 1000);
    })
    CB.appendChild(bloque)
}

function random () {
    return parseInt(Math.random()*color.length)
}