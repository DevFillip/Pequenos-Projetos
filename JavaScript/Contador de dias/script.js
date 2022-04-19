const contadorAno = document.querySelector('.contador-ano')


setInterval(dataAtual, 1000)

function dataAtual(){
    var data = new Date()
    var ano = data.getFullYear()
    var mes = formatandoData(data.getMonth() + 1)
    var dia = formatandoData(data.getDate())

    contadorAno.innerHTML = ` ${ano}/${mes}/${dia}`
}

function formatandoData(tempo){
    if(tempo < 10){
        return '0' + tempo
    }
    return tempo
}