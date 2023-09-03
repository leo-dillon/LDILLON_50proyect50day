const btns = document.querySelectorAll('.button1')
const audios = document.querySelectorAll('audio')
btns.forEach(( btn ) => {
  const nombrebtn = btn.innerHTML.split(' ').slice(1).join("-")
  btn.addEventListener('click', ( e ) => {
    const sonido = document.querySelector(`.${nombrebtn}`)
    audios.forEach((audio) => {
      audio.pause()
      audio.currentTime = 0
    })
    sonido.play()
  })
})