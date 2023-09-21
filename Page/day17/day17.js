const API_KEY = "4d2c948f6429bb7d3e181b471ab143b8" 
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=4d2c948f6429bb7d3e181b471ab143b8&query="'
const API = "https://api.themoviedb.org/3/" 

const contenedorPeliculas = document.querySelector('.container')
const input = document.querySelector('.input')
const buscador = document.querySelector('.header_div_picture')
const logoPage = document.querySelector('.Logo_Page')

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 4d2c948f6429bb7d3e181b471ab143b8'
  }
};
function populares () {
  let listFilms = fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=4d2c948f6429bb7d3e181b471ab143b8', options)
    .then(response => response.json())
    .then(respon => {mostrarPeliculas(respon.results); console.log(respon.results) })
    .catch(err => console.error(err));
}
populares()
function mostrarPeliculas(peliculas) {
  contenedorPeliculas.innerHTML = ''
  peliculas.forEach(pelicula => {
    const contenedor = document.createElement('article')
    contenedor.classList.add('container_film')
    contenedor.innerHTML = `
      <img class="imgPeliculas" src='${IMG_PATH + pelicula.poster_path}' alt='${pelicula.title}'>
      <div class="description">
        <p class="description__title">${pelicula.title}</p>
        <p class="description__popular ${color(pelicula.vote_average)}">${number(pelicula.vote_average)}</p>
        <p class="description_description"></p>
      </div>
    `
    contenedor.querySelector('.description_popular')
    contenedorPeliculas.appendChild(contenedor)
  });
}

logoPage.addEventListener('click', (e) => {
  populares()
})
input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    search(e.target.value)
    e.target.value = ''
  }
})
buscador.addEventListener('click', (e) => {
  const text = e.target.parentElement.parentElement.querySelector('.input').value
  search(text)
  e.target.parentElement.parentElement.querySelector('.input').value = ''
})
function search (text) {
  console.log(text)
  fetch(SEARCH_API + text)
    .then(res => res.json())
    .then(respuesta => {console.log(respuesta); mostrarPeliculas(respuesta.results)})
}
function number(num) { 
  if((String(num)).length == 1){
    return (num + '.0')
  }else{
    return num
  }
}
function color (num) {
  if(num > 7){
    return 'green'
  }
  if(num < 6) {
    return 'red'
  }
}


