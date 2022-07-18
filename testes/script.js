const primeiroNumero = document.querySelector('#primeiro-numero')
const segundoNumero = document.querySelector('#segundo-numero')
const sinalDaConta = document.querySelector('#sinal')

const button = document.querySelector('#calcular')

const resultado = document.querySelector('#resultado')

button.addEventListener('click', calcular)

function calcular(){
    let valorPrimeiroNumero = Number(primeiroNumero.value)
    let valorSegundoNumero = Number(segundoNumero.value)
    let valorSinalDaConta = sinalDaConta.value

    if(valorSinalDaConta == '+'){
      var soma = valorPrimeiroNumero + valorSegundoNumero 

      resultado.innerHTML = `O resultado deu ${soma.toFixed(2)}`

    }else if(valorSinalDaConta == '-'){
      var subtracao = valorPrimeiroNumero - valorSegundoNumero 
      resultado.innerHTML = `O resultado deu ${subtracao.toFixed(2)}`

    }else if(valorSinalDaConta == '*'){
      var multiplicacao = valorPrimeiroNumero * valorSegundoNumero 
      resultado.innerHTML = `O resultado deu ${multiplicacao.toFixed(2)}`

    }else if(valorSinalDaConta == '/'){
      var divisao = valorPrimeiroNumero / valorSegundoNumero 
      resultado.innerHTML = `O resultado deu ${divisao.toFixed(2)}`

    }else{
      resultado.innerHTML = `O sinal não é válido`
    }

}