// As 3 principais variáveis que iremos utilizar para fazer o programa rodar.
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const resultado = document.querySelector('.res')

// Função do Click
function calcular(){
    // Valor de cada input, já usando o Number para validar.
    let pesoValor = Number(peso.value)
    let alturaValor = parseFloat(altura.value)  

    // Validando se algum das caixas de input estão vazias, caso estejam, não será possivel contiuar o calculo.
    if(peso.value.length == 0 || altura.value.length == 0){
        alert('É preciso preencher os 2 campos para poder calcular.')
    }else if(pesoValor < 0 || alturaValor < 1 || pesoValor > 700 || alturaValor > 2.60){
        alert('Esses dados são inválidos, por favor digite novamente.')
    }else{
        let IMC = pesoValor / (alturaValor * alturaValor)

        if(IMC < 18.6){
            resultado.innerHTML = `
            <strong>Com ${pesoValor} Kilos e ${alturaValor} de altura, seu IMC é ${IMC.toFixed(2)}.</strong>
            </br>
            Você está abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico.`
            }

            else if(IMC < 25){
            resultado.innerHTML = `
            <strong>Com ${pesoValor} Kilos e ${alturaValor} de altura, seu IMC é ${IMC.toFixed(2)}.</strong>
            </br>
            Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais.
            `
            
        }else if(IMC < 30){
            resultado.innerHTML = `
            <strong>Com ${pesoValor} Kilos e ${alturaValor} de altura, seu IMC é ${IMC.toFixed(2)}.</strong>
            </br>
            Sinal de alerta! Você está com obesidade grau I, e o excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você.
            `
        }
        else{
            resultado.innerHTML = `
            <strong>Com ${pesoValor} Kilos e ${alturaValor} de altura, seu IMC é ${IMC.toFixed(2)}.</strong>
            </br>
            Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde; não perca tempo.
            `
        }
    }


}       
