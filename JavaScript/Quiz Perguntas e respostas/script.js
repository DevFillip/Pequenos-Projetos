const resultado = document.querySelector('.resultado-do-quiz') 
const labelsVDD = document.querySelectorAll('#label') // Chamando todas as labels do quiz.

function finalizar(){ // Quando clicar em finalizar, acontece toda essa função.
    var inputs = document.querySelector('input[type="radio"]:checked') // Chamando todos os inputs, e verificando se algum deles está clicado, com o :checked
    var contato = document.querySelector('.contato') // Apenas para colocar a div no lugar certo

    if(inputs == null)
    { // Verificando se algum input está clicado, se não, não continua o cod.
        alert('É preciso preencher alguma pergunta para poder finalizar!')
    }
    else
    { // Caso esteja clicado, roda todo esse cód:

        var div = document.createElement('div') // Criando divs de feedback para a pessoa
        var div1 = document.createElement('div') // ou seja, porque está certo, porque está
        var div2 = document.createElement('div') // errado.
        var div3 = document.createElement('div')
        var div4 = document.createElement('div') 
            
        div.classList.add('div-1') // add uma class para cada, para poder estilizar no CSS
        div1.classList.add('div-2')
        div2.classList.add('div-3')
        div3.classList.add('div-4')
        div4.classList.add('div-5')

        var p = document.createElement('p') // Criando os P´s que vão dar o feedback
        var p1 = document.createElement('p')
        var p2 = document.createElement('p')
        var p3 = document.createElement('p')
        var p4 = document.createElement('p')

        if(inputs.value ==  'errado' || inputs.value ==  'errado1' || inputs.value ==  'errado2' || inputs.value ==  'errado3')
        { // Verificando se o input é errado, coloquei cada um dos valores errado...
            for(var label of labelsVDD)
            { // Aqui eu criei um loop que mostras as classes, e dai mostra as cores, se é 
                label.classList.add('show') // certo ou não... no caso vermelho errado.
            }   
            labelsVDD[1].classList.add('show2') // e nesse aqui solitário que é apenas o verde.
       
            if(inputs.value == 'errado')
            { // Se for "errado" ou seja, clicou no primeiro, vai acontecer isso:

                labelsVDD[0].parentNode.insertBefore(div, labelsVDD[1]) 
                div.append(p) // chamando a label 1, e inserindo a div antes da label 2
                p.innerText = `a Você errou!!!`// e esse texto, segue igual para todas as outras...

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

                resultado.innerHTML = `<h3>Você errou 1 de 1 questão.</h3>`
            }

            else if(inputs.value == 'errado1')
            { // Se for o errado 1, vai acontecer isso...
    
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

                resultado.innerHTML = `<h3>Você errou 1 de 1 questão.</h3>`
            }

            else if(inputs.value == 'errado2'){
    
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

                resultado.innerHTML = `<h3>Você errou 1 de 1 questão.</h3>`
            }

            else if(inputs.value == 'errado3')
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

                resultado.innerHTML = `<h3>Você errou 1 de 1 questão.</h3>`
            }
        }

        else
        { // Aqui é apenas a opção quando a opção for verdadeira, ou seja, não for errada.
            for(var label of labelsVDD){
                label.classList.add('show') // refazendo aqui, porque essa é quando a pessoa acerta.
                }

                labelsVDD[1].classList.add('show2') // copia..

                labelsVDD[1].parentNode.insertBefore(div4, labelsVDD[2])// mesma lógica dos anteriores
                div4.append(p4)
                p4.innerText = `Parabéns você acertou!, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`

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

                resultado.innerHTML = `<h3>Você acertou 1 de 1 questão.</h3>`
             }
        }
    }

