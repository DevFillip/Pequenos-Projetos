const addItens = document.querySelector('#itensNovos')
const addPreco = document.querySelector('#itensPreco')
const botaoSalvar = document.querySelector('#salvar')
const itensAdicionados = document.querySelector('.itens-adicionados')
const total = document.querySelector('.total')

botaoSalvar.addEventListener('click', adicionar)

var itens = []

function adicionar(){
   
    itens.push({
        nome: addItens.value,
        preco: addPreco.value
    })

    itensAdicionados.innerHTML = ""
    let soma = 0
    let itensTotal = 0

    itens.map(function(val){  
        soma += parseFloat(val.preco)
        itensTotal += 1
        itensAdicionados.innerHTML +=`
        <div class="adicionados">
            <h3>`+val.nome+`</h3>   
            <h3>`+val.preco+`</h3>
        </div>

  ` 

      total.innerHTML = `
      <h3> Total de Itens: ${itensTotal}</h3>
      <h3> Valor Total: R$ ${soma}</h3>`


        
        
    }) 
}

function excluirItem(){
    console.log(itens.length)
        
}

function limpar(){
    itensAdicionados.innerHTML = `
    <div class="adicionados">
        <h3></h3>   
        <h3>R$</h3>
    </div>`
    itens = []

    total.innerHTML = ""

}