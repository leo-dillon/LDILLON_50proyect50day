const APIURL = 'https://api.github.com/users/'

const input = document.querySelector('.buscador')
const form = document.getElementById('form')
const user = document.querySelector('.user')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    buscarPerfil(input.value)
    
})

function buscarPerfil (v) { 
    fetch(APIURL + v).then(res => {
        if(res.ok){
            return res.json()
        }
        })
        .then(dato =>{
            user.innerHTML = `
            <picture>
                <img src="${dato.avatar_url}" alt="Imagen de usuario ${dato.login}">
            </picture>
            <article>
                <h1>${dato.name}</h1>
                <p class="description">${(dato.bio)?dato.bio:`${dato.name} no tiene bibliografia`}.</p>
                <ul>
                    <li>
                        <p>${dato.public_repos} <strong> Repositorios </strong></p>
                    </li>
                    <li>
                        <p>${dato.followers} <strong> followers </strong></p>
                    </li>
                    <li>
                        <p>${dato.following} <strong> following </strong></p>
                    </li>
                </ul>
                <div class="proyectos">
                    ${repos(v)}
                </div>
            </article>
            `
        })

        .catch(err=> {
            user.innerHTML = `
            <article>
                
                <p class="description">No existe Usuario con ese nombre</p>
            </article>
            `
        })
}
function repos(v) {
    fetch(APIURL + v + '/repos?sort=created')
        .then(res => res.json())
        .then(datos => {
            const proyectos = document.querySelector('.proyectos')
            proyectos.innerHTML = ''
            datos.slice(0,5).map(repo => {
                console.log(`<a href="${repo.html_url}" title="${repo.name}">${repo.name}</a>`)
                proyectos.innerHTML += `<a class="proyecto" href="${repo.html_url}" title="${repo.name}">${repo.name}</a>`
            });
            
        })
}