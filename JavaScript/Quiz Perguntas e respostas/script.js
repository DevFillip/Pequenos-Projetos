const resultado = document.querySelector('.resultado-do-quiz')
var respostaCerta1 = document.querySelector('#resposta2') 


function finalizar(){
    var inputs = document.querySelector('input[type="radio"]:checked')
    var labels = document.querySelectorAll('.hide')
    var labelCerta = document.querySelector('.hide2')

    if(inputs == null){
        alert('É preciso preenchcer todas as perguntas para poder finalizar!')
    }else{
        if(inputs.value ==  'errado'){
            for( var label of labels){
                label.classList.add('show')
            }

            labelCerta.classList.add('show2')
        }
        else
        {
            for( var label of labels){
                label.classList.add('show')
                }
            labelCerta.classList.add('show2')

            var teste = document.createElement('div')
            
            var teste2 = 

            teste.appendChild()

            
        }

    }
    
}

