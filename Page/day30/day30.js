const input = document.querySelector('.valor')
const text = document.querySelector('.text')
text.style = `animation: step ${6/1}s steps(28);`
input.addEventListener('click', (e) => {
    if(text.style.animation){
        text.style.animation = '';
        setTimeout(() => {
            text.style = `animation: step ${6/parseInt(e.target.value)}s steps(28);`
        }, 1);
    }else{
        text.style = `animation: step ${6/parseInt(e.target.value)}s steps(28);`
    }
    text.addEventListener('animationend', () => {
        text.style.animation = 'none';
    });
})