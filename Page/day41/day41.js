const inputs = document.querySelectorAll('.code')
inputs[0].focus()

inputs.forEach((input, id) => {
    input.addEventListener('keypress', (e) => {
        e.target.value = ''
        if( e.key >= 0 && e.key <= 9){
            console.log(id)
            setTimeout(() => {
                if(id===4){

                }else{
                    inputs[id+1].focus()
                }
            }, 10);
        }
    })
})