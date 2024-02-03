const carta = document.querySelector('.carta')
const COLOR__TIPO = {
    grass: 'rgba(60, 160, 36, .1)',
    steel: 'rgba(96, 162, 185, .1)',
    water: 'rgba(36, 129, 240, .1)',
    bug: 'rgb(146, 162, 18, .1)',
    dragon: 'rgba(79, 96, 226, .1)',
    electric: 'rgba(250, 193, 0, .1)',
    ghost: 'rgba(105, 59, 105, .1)',
    fire: 'rgba(231, 35, 36, .1)',
    fairy: 'rgba(220, 104, 221, .1)',
    ice: 'rgba(61, 217, 255, .1)',
    fighting: 'rgba(251, 127, 0, .1)',
    normal: 'rgba(158, 160, 158, .1)',
    psychic: 'rgba(223, 59, 114, .1)',
    rock: 'rgba(166, 161, 122, .1)',
    dark: 'rgba(77, 62, 60, .1)',
    ground: 'rgba(146, 80, 27, .1)',
    poison: 'rgba(146, 63, 204, .1)',
    flying: 'rgba(121, 173, 224, .1)'
}
buscaPoke(1) 
function buscaPoke(valor){
  fetch('https://pokeapi.co/api/v2/pokemon/'+ valor)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        console.log(COLOR__TIPO[data.types[0].type.name])
        carta.style = `background-color: ${COLOR__TIPO[data.types[0].type.name]};`
        carta.innerHTML = `
            <h2>${data.name}</h2>
            <picture> 
                <img src="${data.sprites.front_default}" alt="Imagen pokemon ${data.name}">
            </picture>
            <ul class="stats">
                
            </ul>
            <div class="contador"></div>
        `
        let stats = document.querySelector('.stats')
        let contador = document.querySelector('.contador')
        // contador.style = `background-color: ${COLOR__TIPO[data.types[0].type.name]};`
        let datos = data.stats.map( array => {
            return `<li class="stat"> <p> <strong class="name"> ${array.stat.name}:</strong> ${array.base_stat}</p> </li>  `
        })
        datos.forEach( hab => { stats.innerHTML += hab})

    })
}
setInterval(() => {
    buscaPoke(random())
}, 10000);
function random(){
    return(parseInt(Math.random()*156))
}