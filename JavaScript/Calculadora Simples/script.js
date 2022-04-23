const primeiroNumero = document.querySelector('#primeiroNumero')
const segundoNumero = document.querySelector('#segundoNumero')
const botaoCalculo = document.querySelector('.botaoCalculo')
const resultadoDaConta = document.querySelector('.resultadoDaConta')

botaoCalculo.addEventListener('click', calcular)

function calcular(){
    let valorPrimeiroNumero = Number(primeiroNumero.value)
    let valorSegundoNumero = Number(segundoNumero.value)
    operador = document.querySelector('#lista').value
    
    switch(operador){
        case '+':
            var calculo = valorPrimeiroNumero + valorSegundoNumero
            resultadoDaConta.innerHTML = `A soma entre ${valorPrimeiroNumero} e ${valorSegundoNumero} é igual á ${calculo}`
        break
        case '-':
            var calculo = valorPrimeiroNumero - valorSegundoNumero

            resultadoDaConta.innerHTML = `A subtração entre ${valorPrimeiroNumero} e ${valorSegundoNumero} é igual á ${calculo} `
        break
        case '/' :
            var calculo = valorPrimeiroNumero / valorSegundoNumero
            if(Number.isNaN(calculo) || calculo == 'Infinity'){
                resultadoDaConta.innerHTML = `<strong>Não é possível dividir por zero</strong>`

            }else{
            resultadoDaConta.innerHTML = `A divisão entre ${valorPrimeiroNumero} e ${valorSegundoNumero} é igual á ${calculo.toFixed(2)} `
            }
           
        break
        case '*':
            var calculo = valorPrimeiroNumero * valorSegundoNumero
            resultadoDaConta.innerHTML = `A multiplicação entre ${valorPrimeiroNumero} e ${valorSegundoNumero} é igual á ${calculo} `

        break
        case '%':
            var calculo = valorPrimeiroNumero % valorSegundoNumero

            if(Number.isNaN(calculo)){
                resultadoDaConta.innerHTML = `<strong>Indique números diferentes de 0!</strong>`
            }else{
                resultadoDaConta.innerHTML = `O resto da divisão entre ${valorPrimeiroNumero} e ${valorSegundoNumero} é igual á ${calculo} `
            }
    }
}

