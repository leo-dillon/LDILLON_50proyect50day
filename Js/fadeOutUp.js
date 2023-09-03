containerLoading.addEventListener('click', () => {
  containerLoading.classList.add('fadeOutUp', 'animated')
})
setTimeout(() => {
  const buttonContinue = document.createElement('button')
  buttonContinue.setAttribute('class', 'continue')
  buttonContinue.classList.add('animated2', 'flash')
  buttonContinue.innerText = 'Click para continuar'
  containerLoading.appendChild(buttonContinue)
}, 500)
setTimeout(() => {
  containerLoading.classList.add('fadeOutUp', 'animated')
}, 3000)
