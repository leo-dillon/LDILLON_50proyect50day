const home = document.querySelector('.home')
const works = document.querySelector('.works')
const books = document.querySelector('.books')
const about = document.querySelector('.about')

const picture = document.querySelector('.imagenes')
picture.innerHTML = '<img src="../../IMG/FotosGatitos/kitti-1.jpeg" alt="gatito">'
home.addEventListener('click', ()=>{
    picture.innerHTML = '<img src="../../IMG/FotosGatitos/kitti-1.jpeg" alt="gatito">'
})
works.addEventListener('click', () => {
    picture.innerHTML = '<img src="../../IMG/FotosGatitos/kitti-2.jpeg" alt="gatito">'
})
books.addEventListener('click', () => {
    picture.innerHTML = '<img src="../../IMG/FotosGatitos/kitti-3.jpeg" alt="gatito">'
})
about.addEventListener('click', () => {
    picture.innerHTML = '<img src="../../IMG/FotosGatitos/kitti-4.jpeg" alt="gatito">'
})

