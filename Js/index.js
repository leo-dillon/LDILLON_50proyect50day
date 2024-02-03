const NAVIGATION_EVENT = 'pushState'

LogoBradtravers?.addEventListener('click', () => {
  LogoBradtravers.classList.add('rotate-vertical-center')
  setTimeout(() => {
    LogoBradtravers.classList.remove('rotate-vertical-center')
  }, 500)
})

document.addEventListener('DOMContentLoaded', function () {
  const circle = document.getElementById('circle');
  document.addEventListener('mousemove', (mau) => {
    setTimeout(() => {
      circle.style.left = (mau.clientX -5) + 'px';
      circle.style.top = mau.clientY  + window.pageYOffset - 5 + 'px';
    }, 50);
  },);
  // window.addEventListener('scroll', (e) => {
  //   circle.style.top += e.offsetHeight;
  //   console.log(e.offsetHeight)
  // })

});

function createProyects () {
  fetch('proyectos.json')
    .then(res => res.json())
    .then(data => {
      const proyects = data.proyectos.paginas
      proyects.forEach((proyect) => {
        if (proyect.completado !== false) {
          let imgLenguajes = proyect.assets.map((lenguajeImg) => {
            return `<img class="assets" src="IMG/Lenguajes/${lenguajeImg}.png" alt="day${proyect.day}">`
          })
          const card = document.createElement('article')
          card.classList.add('proyect')
          card.innerHTML = `
          <div class="proyect_title">
            <h2 class="proyect_Name">${proyect.link}</h2>
            <p class="proyect_day">día ${proyect.day}</p>
          </div>
              <div class="proyect_assets">
                ${imgLenguajes.join('')}
              </div>
              <a class="proyect_go" href="Page/day${proyect.day}/day${proyect.day}.html" >Ver</a>
            `
            card.style.backgroundImage = `url(IMG/daysProyects/proyect${proyect.day}.avif)`
          containerProyect.appendChild(card)
        }
      })
    })
}
createProyects ()
const handleClick = (e) => {
  const isMainEvent = e.button === 0
  const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
  const isManageableEvent = target === undefined || target === '_self'
  if (isMainEvent && isManageableEvent && !isModifiedEvent) {
    e.preventDefault()
    window.history.pushState({}, '', href)
    const navigationEvent = new Event(NAVIGATION_EVENT)
    window.dispatchEvent(navigationEvent)
    window.scrollTo(0, 0)
  }
}
