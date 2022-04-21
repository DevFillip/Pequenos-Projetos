const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const iniciar = document.querySelector('#iniciar')
const teste = document.querySelector('.res')

iniciar.addEventListener('click', comecar)

function comecar(){
    var data = new Date()
    
   
    let horasValor = Number(horas.value)
    let minutosValor = Number(minutos.value)

    let horasValorData = data.getHours(horasValorz)

   teste.innerHTML = `<p>a asda ${horasValorData} ${minutosValor} asas</p>`

}