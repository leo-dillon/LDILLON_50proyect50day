const imagenes = document.querySelectorAll('.imagen')
imagenes.forEach((imagen) => {
  imagen.addEventListener('click', () => {
    reducirWidth()
    imagen.style.width = 80 + '%'
  })
})

function reducirWidth () {
  imagenes.forEach((imagen) => {
    imagen.style.width = 5 + '%'
  })
}