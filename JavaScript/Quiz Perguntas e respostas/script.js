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

// Primeira pergunta 
var div = document.createElement('div') 
var div1 = document.createElement('div') 
var div2 = document.createElement('div') 
var div3 = document.createElement('div')
var div4 = document.createElement('div') 
// p´s
var p = document.createElement('p') 
var p1 = document.createElement('p')
var p2 = document.createElement('p')
var p3 = document.createElement('p')
var p4 = document.createElement('p')
// Classes pro CSS
div.classList.add('div-1') 
div1.classList.add('div-2')
div2.classList.add('div-3')
div3.classList.add('div-4')
div4.classList.add('div-5')


// Cópia para a pergunta 2, e assim seguiria se tivesse mais perguntas
var div5 = document.createElement('div') 
var div6 = document.createElement('div') 
var div7 = document.createElement('div') 
var div8 = document.createElement('div') 
var div9 = document.createElement('div') 
// p´s
var p5 = document.createElement('p')
var p6 = document.createElement('p')
var p7 = document.createElement('p')
var p8 = document.createElement('p')
var p9 = document.createElement('p')
// Classes
div5.classList.add('div-6')
div6.classList.add('div-7')
div7.classList.add('div-8')
div8.classList.add('div-9')
div9.classList.add('div-10')


            // Função de click no finalizar o quiz //
function finalizar()
{ 

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
// Veio pra cá, significa que foi errada, então adiciona mais 1 questão. 
            questoes += 1


        // Loops pra mostrar as cores vermelhas das perguntas erradas //
            for(var label of labelsVDD)
            { 
                label.classList.add('show')
            }   
            // As duas labels certas, ou seja, verdes //
            labelsVDD[1].classList.add('show2')
            labelsVDD[7].classList.add('show2') 
       

            // Agora vai em cada uma das erradas e verifica //

            if(inputsPergunta.value == 'errado')
            { 

            // Aqui ocorre o mesmo padrão para todas as questões //

                // Label 1, insere a div antes de label 2
                labelsVDD[0].parentNode.insertBefore(div, labelsVDD[1]) 
                // põe o p dentro da div
                div.append(p) 
                // adiciona o texto do porque está errada
                p.innerText = `Você errou!`


                // Assim segue para todos as outras questões //

                labelsVDD[2].parentNode.insertBefore(div1, labelsVDD[3])
                div1.append(p1)
                p1.innerText = `Essa também não está certa por causa disso disso e disso...`

                labelsVDD[3].parentNode.insertBefore(div2, labelsVDD[4])
                div2.append(p2)
                p2.innerText = `Essa também não está certa por causa disso disso e disso...`

                labelsVDD[4].parentNode.insertBefore(div3, contato)
                div3.append(p3)
                p3.innerText = `Essa também não está certa por causa disso disso e disso...`

                labelsVDD[1].parentNode.insertBefore(div4, labelsVDD[2])
                div4.append(p4)
                
                p4.innerText = `Essa era a resposta certa, porque...  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`
            }

            else if(inputsPergunta.value == 'errado1')
            {
                labelsVDD[0].parentNode.insertBefore(div, labelsVDD[1])
                div.append(p)
                p.innerText = `Essa também não está certa por causa disso disso e disso...`

                labelsVDD[2].parentNode.insertBefore(div1, labelsVDD[3])
                div1.append(p1)
                p1.innerText = `Você errou!`

                labelsVDD[3].parentNode.insertBefore(div2, labelsVDD[4])
                div2.append(p2)
                p2.innerText = `Essa também não está certa por causa disso disso e disso...`

                labelsVDD[4].parentNode.insertBefore(div3, contato)
                div3.append(p3)
                p3.innerText = `Essa também não está certa por causa disso disso e disso...`
    
                labelsVDD[1].parentNode.insertBefore(div4, labelsVDD[2])
                div4.append(p4)
                p4.innerText = `Essa era a resposta certa, porque...  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`

                
            }

            else if(inputsPergunta.value == 'errado2'){
    
                labelsVDD[0].parentNode.insertBefore(div, labelsVDD[1])
                div.append(p)
                p.innerText = `Essa também não está certa por causa disso disso e disso...`

                labelsVDD[2].parentNode.insertBefore(div1, labelsVDD[3])
                div1.append(p1)
                p1.innerText = ` Essa também não está certa por causa disso disso e disso...`

                labelsVDD[3].parentNode.insertBefore(div2, labelsVDD[4])
                div2.append(p2)
                p2.innerText = `Você errou!`

                labelsVDD[4].parentNode.insertBefore(div3, contato)
                div3.append(p3)
                p3.innerText = `Essa também não está certa por causa disso disso e disso...`
    
                labelsVDD[1].parentNode.insertBefore(div4, labelsVDD[2])
                div4.append(p4)
                p4.innerText = `Essa era a resposta certa, porque...  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`

                
            }

            else if(inputsPergunta.value == 'errado3')
            {
                labelsVDD[0].parentNode.insertBefore(div, labelsVDD[1])
                div.append(p)
                p.innerText = `Essa resposta é errada por causa disso disso e disso...`

                labelsVDD[2].parentNode.insertBefore(div1, labelsVDD[3])
                div1.append(p1)
                p1.innerText = `Essa resposta é errada por causa disso disso e disso...`

                labelsVDD[3].parentNode.insertBefore(div2, labelsVDD[4])
                div2.append(p2)
                p2.innerText = `Essa resposta é errada por causa disso disso e disso...`

                labelsVDD[4].parentNode.insertBefore(div3, contato)
                div3.append(p3)
                p3.innerText = `Você errouuuuuu!.`
    
                labelsVDD[1].parentNode.insertBefore(div4, labelsVDD[2])
                div4.append(p4)
                p4.innerText = `Essa era a resposta certa, porque...  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`

   
            }
            
        }

        // Se não tem o valor errado, o cód vem pra cá //

        else
        {
            // refazendo o loop que deixa vermelho os errados //

            for(var label of labelsVDD){
                label.classList.add('show') 
                }
                // Deixando verde...
                labelsVDD[1].classList.add('show2')
                labelsVDD[7].classList.add('show2')    

                // aumentando em 1 o número de questões
                questoes += 1
                // e agora sim somando 1 o número de acertos.
                acertos += 1

                          // Mesma coisa... //

                labelsVDD[0].parentNode.insertBefore(div, labelsVDD[1])
                div.append(p)
                p.innerText = `Essa resposta é errada por causa disso disso e disso...`

                labelsVDD[2].parentNode.insertBefore(div1, labelsVDD[3])
                div1.append(p1)
                p1.innerText = `Essa resposta é errada por causa disso disso e disso...`

                labelsVDD[3].parentNode.insertBefore(div2, labelsVDD[4])
                div2.append(p2)
                p2.innerText = `Essa resposta é errada por causa disso disso e disso...`

                labelsVDD[4].parentNode.insertBefore(div3, contato)
                div3.append(p3)
                p3.innerText = `Essa resposta é errada por causa disso disso e disso...`

                labelsVDD[1].parentNode.insertBefore(div4, labelsVDD[2])
                div4.append(p4)
                p4.innerText = `Parabéns você acertou!, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`
                }

                // SEGUNDA QUESTÃO DO QUIZ ||

         // Verificando novamente se estão com os valores errados //

        if(inputsPergunta1.value ==  'errado4' || inputsPergunta1.value ==  'errado5' || inputsPergunta1.value ==  'errado6' || inputsPergunta1.value ==  'errado7')
        {
            // aumentando apenas 1 questão caso seja errado 
            questoes += 1
    
                            // Mesmo padrão //
            if(inputsPergunta1.value == 'errado4')
            { 
                            // Mesmo padrão //
                labelsVDD[5].parentNode.insertBefore(div5, labelsVDD[6]) 
                div5.append(p5) 
                p5.innerText = `a Você errou!!!`

                labelsVDD[6].parentNode.insertBefore(div6, labelsVDD[7])
                div6.append(p6)
                p6.innerText = `Essa também não está certa por causa disso disso e disso...`

                labelsVDD[7].parentNode.insertBefore(div7, labelsVDD[8])
                div7.append(p7)
                p7.innerText = `Essa era a resposta certa, porque...  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`

                labelsVDD[8].parentNode.insertBefore(div8, labelsVDD[9])
                div8.append(p8)
                p8.innerText = `Essa também não está certa por causa disso disso e disso...`

                labelsVDD[9].parentNode.insertBefore(div9, contato1)
                div9.append(p9)
                p9.innerText = `Essa também não está certa por causa disso disso e disso...`

                
            }

            else if(inputsPergunta1.value == 'errado5')
            { // Se for o errado 1, vai acontecer isso...
    
                labelsVDD[5].parentNode.insertBefore(div5, labelsVDD[6]) 
                div5.append(p5) // chamando a label 1, e inserindo a div antes da label 2
                p5.innerText = `Essa também não está certa por causa disso disso e disso...`// e esse texto, segue igual para todas as outras...

                labelsVDD[6].parentNode.insertBefore(div6, labelsVDD[7])
                div6.append(p6)
                p6.innerText = `a Você errou`

                labelsVDD[7].parentNode.insertBefore(div7, labelsVDD[8])
                div7.append(p7)
                p7.innerText = `Essa era a resposta certa, porque...  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`

                labelsVDD[8].parentNode.insertBefore(div8, labelsVDD[9])
                div8.append(p8)
                p8.innerText = `Essa também não está certa por causa disso disso e disso...`

                labelsVDD[9].parentNode.insertBefore(div9, contato1)
                div9.append(p9)
                p9.innerText = `Essa também não está certa por causa disso disso e disso...`

                
            }

            else if(inputsPergunta1.value == 'errado6'){
    
                labelsVDD[5].parentNode.insertBefore(div5, labelsVDD[6]) 
                div5.append(p5) // chamando a label 1, e inserindo a div antes da label 2
                p5.innerText = `Essa também não está certa por causa disso disso e disso...`// e esse texto, segue igual para todas as outras...

                labelsVDD[6].parentNode.insertBefore(div6, labelsVDD[7])
                div6.append(p6)
                p6.innerText = `Essa também não está certa por causa disso disso e disso...`

                labelsVDD[7].parentNode.insertBefore(div7, labelsVDD[8])
                div7.append(p7)
                p7.innerText = `Essa era a resposta certa, porque...  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`

                labelsVDD[8].parentNode.insertBefore(div8, labelsVDD[9])
                div8.append(p8)
                p8.innerText = `Você errou!`

                labelsVDD[9].parentNode.insertBefore(div9, contato1)
                div9.append(p9)
                p9.innerText = `Essa também não está certa por causa disso disso e disso...`

                
            }

            else if(inputsPergunta1.value == 'errado7')
            {
                labelsVDD[5].parentNode.insertBefore(div5, labelsVDD[6]) 
                div5.append(p5) // chamando a label 1, e inserindo a div antes da label 2
                p5.innerText = `Essa também não está certa por causa disso disso e disso...`// e esse texto, segue igual para todas as outras...

                labelsVDD[6].parentNode.insertBefore(div6, labelsVDD[7])
                div6.append(p6)
                p6.innerText = `Essa também não está certa por causa disso disso e disso...`

                labelsVDD[7].parentNode.insertBefore(div7, labelsVDD[8])
                div7.append(p7)
                p7.innerText = `Essa era a resposta certa, porque...  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`

                labelsVDD[8].parentNode.insertBefore(div8, labelsVDD[9])
                div8.append(p8)
                p8.innerText = `Essa também não está certa por causa disso disso e disso...`

                labelsVDD[9].parentNode.insertBefore(div9, contato1)
                div9.append(p9)
                p9.innerText = `Você errou!!`            
            }
        }

        else
        {
            // Mesma coisa pra quando a segunda questão está certa //
            questoes += 1
            acertos += 1

                        // Mesmo padrão //
            labelsVDD[5].parentNode.insertBefore(div5, labelsVDD[6]) 
            div5.append(p5) // chamando a label 1, e inserindo a div antes da label 2
            p5.innerText = `Essa resposta está errada por causa disso disso e disso..`// e esse texto, segue igual para todas as outras...

            labelsVDD[6].parentNode.insertBefore(div6, labelsVDD[7])
            div6.append(p6)
            p6.innerText = `Essa resposta está errada por causa disso disso e disso..`

            labelsVDD[7].parentNode.insertBefore(div7, labelsVDD[8])
            div7.append(p7)
            p7.innerText = `Parabéns você acertou! essa é a resposta certa porque...  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`

            labelsVDD[8].parentNode.insertBefore(div8, labelsVDD[9])
            div8.append(p8)
            p8.innerText = `Essa resposta está errada por causa disso disso e disso..`

            labelsVDD[9].parentNode.insertBefore(div9, contato1)
            div9.append(p9)
            p9.innerText = `Essa resposta está errada por causa disso disso e disso...`
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
    
