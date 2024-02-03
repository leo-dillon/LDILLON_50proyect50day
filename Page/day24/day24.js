const cabecera = document.querySelector('.gato')
const titulo = document.querySelector('.titulo')
const subtitulo = document.querySelector('.subtitulo')
const imgAutor = document.querySelector('.fotter')
const bg = document.querySelectorAll('.animated-bg')
setTimeout(() => {

    cabecera.innerHTML = '<img src="../../IMG/FotosGatitos/kitti-1.jpeg" alt="Gato - 1">'
    titulo.innerText = 'Lorem ipsum dolor sit amet.'
    subtitulo.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio neque fugit.'
    imgAutor.innerHTML = `<img class="imgAutor" src="../../IMG/Lenguajes/js.png" alt="Una imagen de JavaScript">
    <div class="autor">
        <h3>Leonardo Dillon</h3>
        <p>14:50 - 8/1/2024</p>
    </div>
    `
    bg.forEach((e)=>{ e.classList.remove('animated-bg')})

}, 2000);