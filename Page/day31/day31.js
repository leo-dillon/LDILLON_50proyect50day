const abecedarioMayus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numerico = ['0','1','2','3','4','5','6','7','8','9']
const caracterEspeciales = ['¬','|','!','@','#','$','%','&','=','?','~']


const copiar = document.querySelector('.copiar')
const contraseña = document.querySelector('.contraseña')



const tamaño = document.querySelector('.tamaño')
const minusculas = document.querySelector('.minu')
const mayusculas = document.querySelector('.mayus')
const num = document.querySelector('.num') 
const carEsp = document.querySelector('.carEsp')
const crear = document.querySelector('.crear')


copiar.addEventListener('click', () => {
    navigator.clipboard.writeText(contraseña.textContent)
})
minusculas.addEventListener('click', ()=>{
    disabled ()
})
mayusculas.addEventListener('click', ()=>{
    disabled ()
})
num.addEventListener('click', ()=>{
    disabled ()
})
carEsp.addEventListener('click', ()=>{
    disabled ()
})
crear.addEventListener('click', () => {
    CrearClave(tamaño)
})
function random (array) {
    return ( parseInt( Math.random()*array.length ))
}
function CrearClave(tamaño){
    let contra = ''
    for (let i = 0; i < tamaño.value; i++) {
        let tipo = parseInt( Math.random() * 4 )
        switch (tipo) {
            case 0:
                if(mayusculas.checked){
                    contra += abecedarioMayus[random(abecedarioMayus)]
                } else{
                    i--
                }
                break;
            case 1:
                if(minusculas.checked){
                    contra += abecedario[random(abecedario)]
                } else{
                    i--
                }
                break;
            case 2:
                if(num.checked){
                    contra += numerico[random(numerico)]
                }else{
                    i--
                }
                break;
            case 3:
                if(carEsp.checked){
                    contra += caracterEspeciales[random(caracterEspeciales)]
                }else{
                    i--
                }
                break;
            default:
                break;
        }
    }
    contraseña.innerText = contra
}

function disabled () {
    if(minusculas.checked || mayusculas.checked || num.checked || carEsp.checked){
        crear.disabled = false
        console.log('a')
    }else{
        crear.disabled = true
        console.log('b')
    }
}

