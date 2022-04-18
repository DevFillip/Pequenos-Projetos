setInterval(tempoAtual, 1000) // está dizendo que a cada segundo a função vai ser atualizada.

const relogio = document.querySelector('.relogio') // chamando o elemento onde vamos mudar pelo JS.

function tempoAtual(){
    const horario = new Date() // chamando o tempo atual.
    const horas = formatandoHorario(horario.getHours())  // pegando as horas
    const minutos = formatandoHorario(horario.getMinutes()) // pegando os minutos
    const segundos = formatandoHorario(horario.getSeconds()) // pegando os segundos.

    relogio.innerHTML = `${horas} : ${minutos} : ${segundos} `   // colocando dentro do HTML, usando template string, e chamando cada uma das funções, e utilizando o ":" para ficar igual um relógio digital.
}

function formatandoHorario(tempo){ // passei o parâmetro tempo para dizer o que tem dentro de cada um dos get hours, minutes e etc.
    if(tempo < 10){
        return '0' + tempo
    } // e se o parâmetro tempo for menor que 10, retorna o 0 + o tempo atual.

    return tempo // e de qualquer forma retorne o tempo. 
} // e aqui uma simples formatação para nunca ficar com apenas um número no horário, e sim pelo menos 00, ou 01, e não 9, 4 e etc.