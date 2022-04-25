const addItens = document.querySelector('#itensNovos')
const addPreco = document.querySelector('#itensNovosValor')
const botaoSalvar = document.querySelector('#salvar')
const itensAdicionados = document.querySelector('.adicionados')
const total = document.querySelector('.total')


botaoSalvar.addEventListener('click', adicionar)

function adicionar(){
    var itens = []

    itens.push({
        nome: addItens.value,
        preco: addPreco.value
    })

    itensAdicionados.innerHTML = ""

    itens.map(function(val){   
    itensAdicionados.innerHTML +=`
    <h3>`+val.nome+`</h3>   
    <h3>`+val.preco+`</h3>
    <div class="botoes"> 
    <img src="/JavaScript/Lista de compras/img/edit.png" alt="">
    <img src="/JavaScript/Lista de compras/img/delete.png" alt=""></div>
    </br>`
    })


}