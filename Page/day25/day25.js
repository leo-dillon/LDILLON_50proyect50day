const header = document.querySelector('.head')
window.addEventListener('scroll', scrollDown)

function scrollDown() {
    if(window.scrollY > header.offsetHeight + 150) {
        header.classList.add('reductor')
    } else {
        header.classList.remove('reductor')
    }
}