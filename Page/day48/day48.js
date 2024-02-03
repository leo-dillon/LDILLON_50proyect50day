const contendor = document.querySelector('.contenedor')
const unsplashURL = 'https://source.unsplash.com/random/'

for (let i = 0; i < 12; i++) {
    contendor.innerHTML += `<img class="imagen" src="${unsplashURL + i}" alt="">`
    
}