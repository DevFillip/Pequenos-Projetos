const resultado = document.querySelector('.resultado-do-quiz')
var respostaCerta1 = document.querySelector('#resposta2') 


function finalizar(){
    var inputs = document.querySelector('input[type="radio"]:checked')
    var labels = document.querySelectorAll('.hide')
    var labelCerta = document.querySelector('.hide2')
    var contato = document.querySelector('.contato')

    if(inputs == null){
        alert('É preciso preencher alguma pergunta para poder finalizar!')
    }else{
        if(inputs.value ==  'errado' || inputs.value ==  'errado1' || inputs.value ==  'errado2' || inputs.value ==  'errado3' || inputs.value ==  'errado'){
            for( var label of labels){
                label.classList.add('show')
            }   

            labelCerta.classList.add('show2')

            var label1 = document.querySelector('#label1')
            var label2 = document.querySelector('#label2')
            var label3 = document.querySelector('#label3')
            var label4 = document.querySelector('#label4')
            var label5 = document.querySelector('#label5')

            var div = document.createElement('div')
            var div1 = document.createElement('div')
            var div2 = document.createElement('div')
            var div3 = document.createElement('div')
            
    
            div.classList.add('div-1')
            div1.classList.add('div-2')
            div2.classList.add('div-3')
            div3.classList.add('div-4')

            var p = document.createElement('p')
            var p1 = document.createElement('p')
            var p2 = document.createElement('p')
            var p3 = document.createElement('p')
       

            if(inputs.value == 'errado'){

            var div4 = document.createElement('div')  
            var p4 = document.createElement('p')

            label1.parentNode.insertBefore(div, label2)
            div.append(p)
            p.innerText = `Você errou!!!`

            label3.parentNode.insertBefore(div1, label4)
            div1.append(p1)
            p1.innerText = `Essa também não está certa por causa disso disso e disso...`

            label4.parentNode.insertBefore(div2, label5)
            div2.append(p2)
            p2.innerText = `Essa também não está certa por causa disso disso e disso...`

            label5.parentNode.insertBefore(div3, contato)
            div3.append(p3)
            p3.innerText = `Essa também não está certa por causa disso disso e disso...`

            label2.parentNode.insertBefore(div4, label3)
            div4.append(p4)
            div4.classList.add('feedback-resposta')
            p4.innerText = `Essa era a resposta certa, porque...  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`

            }

            else if(inputs.value == 'errado1'){
                var div4 = document.createElement('div')  
                var p4 = document.createElement('p')
    
                label1.parentNode.insertBefore(div, label2)
                div.append(p)
                p.innerText = `Essa também não está certa por causa disso disso e disso...`
    
                label3.parentNode.insertBefore(div1, label4)
                div1.append(p1)
                p1.innerText = `Você errou!`
    
                label4.parentNode.insertBefore(div2, label5)
                div2.append(p2)
                p2.innerText = `Essa também não está certa por causa disso disso e disso...`
    
                label5.parentNode.insertBefore(div3, contato)
                div3.append(p3)
                p3.innerText = `Essa também não está certa por causa disso disso e disso...`
    
                label2.parentNode.insertBefore(div4, label3)
                div4.append(p4)
                div4.classList.add('feedback-resposta')
                p4.innerText = `Essa era a resposta certa, porque...  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`
            }

            else if(inputs.value == 'errado2'){
                var div4 = document.createElement('div')  
                var p4 = document.createElement('p')
    
                label1.parentNode.insertBefore(div, label2)
                div.append(p)
                p.innerText = `Essa também não está certa por causa disso disso e disso...`
    
                label3.parentNode.insertBefore(div1, label4)
                div1.append(p1)
                p1.innerText = `Essa também não está certa por causa disso disso e disso...`
    
                label4.parentNode.insertBefore(div2, label5)
                div2.append(p2)
                p2.innerText = `Você errou!`
    
                label5.parentNode.insertBefore(div3, contato)
                div3.append(p3)
                p3.innerText = `Essa também não está certa por causa disso disso e disso...`
    
                label2.parentNode.insertBefore(div4, label3)
                div4.append(p4)
                div4.classList.add('feedback-resposta')
                p4.innerText = `Essa era a resposta certa, porque...  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`
            }

            else if(inputs.value == 'errado3')
            {
                var div4 = document.createElement('div')  
                var p4 = document.createElement('p')
    
                label1.parentNode.insertBefore(div, label2)
                div.append(p)
                p.innerText = `Essa também não está certa por causa disso disso e disso...`
    
                label3.parentNode.insertBefore(div1, label4)
                div1.append(p1)
                p1.innerText = `Essa também não está certa por causa disso disso e disso...`
    
                label4.parentNode.insertBefore(div2, label5)
                div2.append(p2)
                p2.innerText = `Essa também não está certa por causa disso disso e disso...`
    
                label5.parentNode.insertBefore(div3, contato)
                div3.append(p3)
                p3.innerText = `Você errou!`
    
                label2.parentNode.insertBefore(div4, label3)
                div4.append(p4)
                div4.classList.add('feedback-resposta')
                p4.innerText = `Essa era a resposta certa, porque...  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`


            }

        }
        else
        {
            for(var label of labels){
                label.classList.add('show')
                }
            labelCerta.classList.add('show2')

         
            let div4 = document.createElement('div')  
            let p4 = document.createElement('p')

            if(inputs.value == 'certo'){

            let label1 = document.querySelector('#label1')
            let label2 = document.querySelector('#label2')
            let label3 = document.querySelector('#label3')
            let label4 = document.querySelector('#label4')
            let label5 = document.querySelector('#label5')

            let div = document.createElement('div')
            let div1 = document.createElement('div')
            let div2 = document.createElement('div')
            let div3 = document.createElement('div')
            
    
            div.classList.add('div-1')
            div1.classList.add('div-2')
            div2.classList.add('div-3')
            div3.classList.add('div-4')

            let p = document.createElement('p')
            let p1 = document.createElement('p')
            let p2 = document.createElement('p')
            let p3 = document.createElement('p')
            
            labelCerta.parentNode.insertBefore(div4, label3)
            div4.append(p4)
            div4.classList.add('feedback-resposta')
            p4.innerText = `Parabéns você acertou!, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam ut illum. Reprehenderit ea vero, non delectus eius voluptatum ipsum, est natus ipsam eos laborum quia maiores vel dolores aspernatur.`

            label1.parentNode.insertBefore(div, label2)
                div.append(p)
                p.innerText = `Essa resposta é errada por causa disso disso e disso...`
    
                label3.parentNode.insertBefore(div1, label4)
                div1.append(p1)
                p1.innerText = `Essa resposta é errada por causa disso disso e disso...`
    
                label4.parentNode.insertBefore(div2, label5)
                div2.append(p2)
                p2.innerText = `Essa resposta é errada por causa disso disso e disso...`
    
                label5.parentNode.insertBefore(div3, contato)
                div3.append(p3)
                p3.innerText = `Essa resposta é errada por causa disso disso e disso...`
             }
        }

    }
    
}

