const rapido = document.querySelector('#check')
const bueno = document.querySelector('#check2')
const detallado = document.querySelector('#check3')

const inpunts = document.querySelectorAll('.cambio')


inpunts.forEach(element => {
    element.addEventListener('click', e => console.log(e.target)) 
    element.addEventListener('change', (e) => {
        check(e.target)
    })  
});

function check(input){
    if(bueno.checked && rapido.checked && detallado.checked){
        if ( bueno == input  ){
            rapido.checked = false
        } 
        if ( rapido == input  ){
            detallado.checked = false
        } 
        if ( detallado == input  ){
            rapido.checked = false
        } 
        
    }
    }