const buttom = document.querySelector('.ripple')


buttom.addEventListener('click', (e) => {
    let XDentro = (e.clientX - e.target.offsetLeft) + 'px'
    let YDentro = (e.clientY - e.target.offsetTop) + 'px'
    const ripple = document.createElement('span')
    ripple.classList.add('circulo')
    ripple.style.top = YDentro
    ripple.style.left = XDentro
    buttom.appendChild(ripple)
    console.log(XDentro, YDentro, ripple)
    setTimeout(()=>{ripple.remove()}, 500)
})
