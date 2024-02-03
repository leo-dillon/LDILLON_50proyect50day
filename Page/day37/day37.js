const contenedor = document.querySelector('.pokedex')
const input = document.querySelector('.buscador')
const button = document.querySelector('.botonBuscador')


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
buscaPokes( )
button.addEventListener('click', () => {
    contenedor.innerHTML = ''
    console.log(input.value)
    buscaPokes( input.value)
})


function buscaPokes(nombre){
    console.log(nombre)
    if(nombre){
        fetch('https://pokeapi.co/api/v2/pokemon/'+nombre)
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                let tipo = data.types[0].type.name
                contenedor.innerHTML += `
                    <section class="contenedorPokemon" style="background-color: ${COLOR__TIPO[tipo]} ;">
                        <h2>${data.name}</h2>
                        <picture>
                            <img src="${data.sprites.front_default}" alt="pokemon">
                        </picture>
                        <ul>
                            <li><p><Strong>ID: </Strong> ${data.id}</p></li>
                            <li><p><Strong>Tipo: </Strong>${data.types[0].type.name}</p></li>
                        </ul>
                    </section>
                    `
            })
    } else {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(res => res.json())
            .then(data => {
                let resultados = data.results
                resultados.forEach( (pokemon) => { 
                    fetch(pokemon.url)
                    .then( res2 => res2.json())
                    .then( data2 =>{
                        console.log(data2)
                        let tipo = data2.types[0].type.name
                              contenedor.innerHTML += `
                            <section class="contenedorPokemon" style="background-color: ${COLOR__TIPO[tipo]} ;">
                                <h2>${data2.name}</h2>
                                <picture>
                                    <img src="${data2.sprites.front_default}" alt="pokemon">
                                </picture>
                                <ul>
                                    <li><p><Strong>ID: </Strong> ${data2.id}</p></li>
                                    <li><p><Strong>Tipo: </Strong>${data2.types[0].type.name}</p></li>
                                </ul>
                            </section>
                            `
                    })
            })
        })
    }
}
