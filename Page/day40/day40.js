const button = document.querySelector('.magic')
const contenedorGif = document.querySelector('.contenedorGif')
contenedorGif.style.gap = '32px'
button.addEventListener('click', () => {
    if(contenedorGif.style.gap == '32px'){
        contenedorGif.style.gap = '0px'
    }else{
        contenedorGif.style.gap = '32px'
    }
})