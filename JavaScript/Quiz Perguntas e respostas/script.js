        // Chamando todas as váriaveis que podem ficar pra fora //

// chamando a div que vai encapsular o resultado-quiz
const resultado = document.querySelector('.resultado-do-quiz') 
// Aqui as variáveis que fazem parte do resultado
var questoes = 0
var acertos = 0

// Chamando todas as labels do quiz, vamos acessar usando o [].
const labelsVDD = document.querySelectorAll('#label')

// 2 variáveis de contato, apenas para poder encaixar a div no lugar certo
var contato = document.querySelector('.contato')
var contato1 = document.querySelector('.contato1')


        // Elementos criados como feedback para cada questão //

var divErrada = []

    for(let i = 0; i < 8; i++)
    {
        divErrada[i] = document.createElement('div')
        divErrada[i].classList.add('div-errada')
    }

var divCerta = []

    for(let i = 0; i < 2; i++)
    {
        divCerta[i] = document.createElement('div')
        divCerta[i].classList.add('div-certa')
    }

var p = []

    for(let i = 0; i < 10; i++)
    {
        p[i] = document.createElement('p')
        p[i].classList.add('p-estilo')
    }

            // Função de click no finalizar o quiz //
function finalizar()
{ 
        // Loops pra mostrar as cores vermelhas das perguntas erradas //
        for(var label of labelsVDD){
            label.classList.add('show') 
            }
             // Deixando verde...
        labelsVDD[1].classList.add('show2')
        labelsVDD[7].classList.add('show2')  

        // Chamando os inputs e verificando se estão clicados // 
    var inputsPergunta = document.querySelector('.input-pergunta:checked')
    var inputsPergunta1 = document.querySelector('.input-pergunta1:checked')
    

                // PRIMEIRA QUESTÃO DO CÓD //  
                
        // Verificando se tem algum input que não está clicado //
    if(inputsPergunta == null || inputsPergunta1 == null)
    { 
        alert('É preciso preencher alguma pergunta para poder finalizar!')
    }

            // Se todos estiverem clicados, segue o cód //
    else
    { 
        // Verificando se o input tem o valor errado de cada input //
        if(inputsPergunta.value ==  'errado' || inputsPergunta.value ==  'errado1' || inputsPergunta.value ==  'errado2' || inputsPergunta.value ==  'errado3')
        { 
        // Veio pra cá, significa que foi errada, então adiciona apenas mais 1 questão. 
            questoes += 1

        // Aqui é a resposta certa, que como tem o mesmo padrão de escrita para todas as perguntas erradas, eu deixei ela aqui, e não uma em cada resposta errada //
            // Label 1, insere a div antes de label 2
            labelsVDD[0].parentNode.insertBefore(divErrada[0], labelsVDD[1]) 
            // põe o p dentro da div
            divErrada[0].append(p[0]) 
            // adiciona o texto do porque está errado
            p[0].innerText = `Essa resposta está errada porque a função parseToReal() não existe em JS.`

            labelsVDD[1].parentNode.insertBefore(divCerta[0], labelsVDD[2])
            divCerta[0].append(p[4])
            p[4].innerText = `Essa era a resposta certa porque é assim que é convertido números para qualquer moeda como o Real, ela localiza o idioma,depois diz que é do estilo moeda, e diz qual moeda é, no caso 'BRL'`

            labelsVDD[2].parentNode.insertBefore(divErrada[1], labelsVDD[3])
            divErrada[1].append(p[1])
            p[1].innerText = `Essa resposta está errada porque o toFixed() é para determinar as casas depois do ponto de um float, como toFixed(2)`
            
            labelsVDD[3].parentNode.insertBefore(divErrada[2], labelsVDD[4])
            divErrada[2].append(p[2])
            p[2].innerText = `Essa resposta está errada porque o toFixed() é para determinar as casas depois do ponto de um float, como toFixed(2)`

            labelsVDD[4].parentNode.insertBefore(divErrada[3], contato)
            divErrada[3].append(p[3])
            p[3].innerText = `Essa resposta está errada porque a função  parseToReal não existe no JS.`

                // Agora vai em cada uma das erradas e muda apenas o começo, para a pessoa saber qual ela clicou depois. //

            if(inputsPergunta.value == 'errado')
            { 
                p[0].innerText = `Você errou! Essa resposta está errada porque a função parseToReal() não existe em JS.`
            }

            else if(inputsPergunta.value == 'errado1')
            {
                p[1].innerText = `Você errou! essa resposta está errada porque o toFixed() é para determinar as casas depois do ponto de um float, como toFixed(2)`     
            }

            else if(inputsPergunta.value == 'errado2'){
                p[2].innerText = `Você errou! essa resposta está errada porque o toFixed() é para determinar as casas depois do ponto de um float, como toFixed(2)`       
            }

            else if(inputsPergunta.value == 'errado3')
            {
                p[3].innerText = `Você errou! essa resposta está errada porque a função  parseToReal não existe no JS.`
            }
            
        }

        // Se não tem o valor errado, o cód vem pra cá //

        else
        {  
                // aumentando em 1 o número de questões
                questoes += 1
                // e agora sim somando 1 o número de acertos.
                acertos += 1

                             // Mesma coisa... //
                labelsVDD[0].parentNode.insertBefore(divErrada[0], labelsVDD[1]) 
                divErrada[0].append(p[0]) 
                p[0].innerText = `Essa resposta está errada porque a função parseToReal() não existe em JS.`
          
                labelsVDD[2].parentNode.insertBefore(divErrada[1], labelsVDD[3])
                divErrada[1].append(p[1])
                p[1].innerText = `Essa resposta está errada porque o toFixed() é para determinar as casas depois do ponto de um float, como toFixed(2)`
          
                labelsVDD[3].parentNode.insertBefore(divErrada[2], labelsVDD[4])
                divErrada[2].append(p[2])
                p[2].innerText = `Essa resposta está errada porque o toFixed() é para determinar as casas depois do ponto de um float, como toFixed(2)`
          
                labelsVDD[4].parentNode.insertBefore(divErrada[3], contato)
                divErrada[3].append(p[3])
                p[3].innerText = `Essa resposta está errada porque a função parseToReal() não existe no JS.`
          
                labelsVDD[1].parentNode.insertBefore(divCerta[0], labelsVDD[2])
                divCerta[0].append(p[4])
                p[4].innerText = `Parabéns você acertou! Essa é a resposta certa porque é assim que é convertido números para qualquer moeda como o Real, ela localiza o idioma,depois diz que é do estilo moeda, e diz qual moeda é, no caso 'BRL'`
                }

                        // SEGUNDA QUESTÃO DO QUIZ ||

                            // Mesmo padrão //
        if(inputsPergunta1.value ==  'errado4' || inputsPergunta1.value ==  'errado5' || inputsPergunta1.value ==  'errado6' || inputsPergunta1.value ==  'errado7')
        {
            questoes += 1

            labelsVDD[5].parentNode.insertBefore(divErrada[4], labelsVDD[6]) 
            divErrada[4].append(p[5]) 
            p[5].innerText = `Essa resposta está errada porque o getElementByID() chama apenas o ID, e a div não possui um ID definido.`

            labelsVDD[6].parentNode.insertBefore(divErrada[5], labelsVDD[7]) 
            divErrada[5].append(p[6]) 
            p[6].innerText = `Essa resposta está errada porque o document.querySelector(div#texto) chama a div, e depois chama o ID da div com o # assim como no CSS, e essa Div não possui um ID e sim uma classe.`

            labelsVDD[7].parentNode.insertBefore(divCerta[1], labelsVDD[8])
            divCerta[1].append(p[7])
            p[7].innerText = `Essa era a resposta certa, porque...  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`

            labelsVDD[8].parentNode.insertBefore(divErrada[6], labelsVDD[9]) 
            divErrada[6].append(p[8]) 
            p[8].innerText = `Essa resposta está errada porque o getElementByID() chama apenas os Ids dos elementos, e essa div não possui nenhum Id.`

            labelsVDD[9].parentNode.insertBefore(divErrada[7], contato1) 
            divErrada[7].append(p[9]) 
            p[9].innerText = `Você errou! essa resposta está errada porque o document.getElementByName() puxa o nome do elemento, e a div não possui isso.`
    
                                
            if(inputsPergunta1.value == 'errado4')
            { 
                p[5].innerText = `Você errou! essa resposta está errada porque o getElementByID() chama apenas o ID, e a div não possui um ID definido.`
            }

            else if(inputsPergunta1.value == 'errado5')
            {
                p[6].innerText = `Você errou! essa resposta está errada porque o document.querySelector(div#texto) chama a div, e depois chama o ID da div com o # assim como no CSS, e essa Div não possui um ID e sim uma classe.`
            }

            else if(inputsPergunta1.value == 'errado6'){
                p[8].innerText = `Você errou! Essa resposta está errada porque o getElementByID() chama apenas os Ids dos elementos, e essa div não possui nenhum Id.`   
            }

            else if(inputsPergunta1.value == 'errado7'){
                p[9].innerText = `Você errou! essa resposta está errada porque o document.getElementByName() puxa o nome do elemento, e a div não possui isso.`   
            }
        }

        else
        {
            // Mesma coisa pra quando a segunda questão está certa //
            questoes += 1
            acertos += 1

            labelsVDD[5].parentNode.insertBefore(divErrada[4], labelsVDD[6]) 
            divErrada[4].append(p[5]) 
            p[5].innerText = `Essa resposta está errada porque o getElementByID() chama apenas o ID, e a div não possui um ID definido`
                    
            labelsVDD[6].parentNode.insertBefore(divErrada[5], labelsVDD[7]) 
            divErrada[5].append(p[6]) 
            p[6].innerText = `Essa resposta está errada porque o document.querySelector(div#texto) chama a div, e depois chama o ID da div com o # assim como no CSS, e essa Div não possui um ID e sim uma classe.`
                    
            labelsVDD[7].parentNode.insertBefore(divCerta[1], labelsVDD[8])
            divCerta[1].append(p[7])
            p[7].innerText = `Parabéns você acertou! essa era a resposta certa, porque...  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`
                    
            labelsVDD[8].parentNode.insertBefore(divErrada[6], labelsVDD[9]) 
            divErrada[6].append(p[8]) 
            p[8].innerText = `Essa resposta está errada porque o getElementByID() chama apenas os Ids dos elementos, e essa div não possui nenhum Id.`
                    
            labelsVDD[9].parentNode.insertBefore(divErrada[7], contato1) 
            divErrada[7].append(p[9]) 
            p[9].innerText = `Essa resposta está errada porque o document.getElementByName() puxa o nome do elemento, e a div não possui isso.` 
            
            } 
                // No fim criamos a parte de resultado do quiz//

            // Um novo elemento que entra na div resultado-do-quiz //
            let divResultado = document.createElement('div')
            divResultado.classList.add('resultado-quiz')
            let h4Resultado = document.createElement('h4')
            h4Resultado.innerText = `Você acertou ${acertos} de ${questoes} questões!`
            
            divResultado.append(h4Resultado)
            resultado.append(divResultado)
            }
        }
        
    
