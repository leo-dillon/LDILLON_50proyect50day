const valor = document.querySelector('.valor')
const inputRange = document.querySelector('.inputRange')

inputRange.addEventListener('input', (e) => {
    valor.innerText = e.target.value
})