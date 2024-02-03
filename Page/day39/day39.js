const password = document.querySelector('.password')
const imagen = document.querySelector('.imagen')


password.addEventListener('input', () => {
    imagen.style.filter = `blur(${20 - password.value.length*2 }px)`
})
