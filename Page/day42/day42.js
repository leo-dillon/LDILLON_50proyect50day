const contenedorUser = document.querySelector('.users')
const input = document.querySelector('.filter')
const listaUsers = []
TraerUsers()

input.addEventListener('input', (e) => {
    contenedorUser.innerHTML =''
    busqueda(e.target.value)

})

function TraerUsers(){
    fetch('https://randomuser.me/api?results=50')
        .then(res => res.json())
        .then(datos => {
            datos.results.forEach(user => {
                const divUser = document.createElement('div')
                divUser.classList.add('user')
                divUser.innerHTML = `
                
                    <picture><img src="${user.picture.thumbnail}" alt="${user.login.username}"></picture>
                    <div>
                        <p><strong class="nombre">${user.name.first} ${user.name.last}</strong></p>
                        <p>${user.email}</p>
                    </div>
                
                `
                listaUsers.push(divUser)
                contenedorUser.appendChild(divUser)
                
            });
        })
}

function busqueda( nombre ){
    let newList = listaUsers.filter( (user) => {
        if(user.querySelector('.nombre').innerText.toLowerCase().includes(nombre.toLowerCase())){
            return user
        }
    })
    newList.forEach( (user) => {

        contenedorUser.appendChild(user)
    })
}