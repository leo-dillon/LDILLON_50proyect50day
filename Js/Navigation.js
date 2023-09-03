window.addEventListener('DOMContentLoaded', () => {
  navigation()
})

window.addEventListener('hashchange', navigation)

const MAGICSTRINGS = {
  inicio: '',
  contactame: 'Contactame',
  proyect: 'proyect'
}

function hash () {
  const hashConEspacios = window.location.hash.slice(1)
  const hashSinEspacios = hashConEspacios.split('%20').join(' ')
  return hashSinEspacios
}
function navigation () {
  const hashLimpio = hash()
  console.log(hashLimpio)
  switch (hashLimpio) {
    case MAGICSTRINGS.inicio:
      containerLoading.classList.remove('ocultar')
      presentProyect.classList.remove('ocultar')
      presentAuthor.classList.remove('ocultar')
      email.classList.add('ocultar')
      break
    case MAGICSTRINGS.contactame:
      containerLoading.classList.add('ocultar')
      presentProyect.classList.add('ocultar')
      presentAuthor.classList.add('ocultar')
      email.classList.remove('ocultar')
      break
    default:
      break
  }
 
}
