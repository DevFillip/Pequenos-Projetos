/*
const DIV = document.querySelector('#Pica')

DIV.dataset.testeMalucao = 'Olá'

DIV.dataset.setTimeTeste = 'Tempo é o caraio'

delete DIV.dataset.teste 

console.log(DIV.dataset) */

const buttons = document.querySelectorAll("[data-modal-id]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modalId
    const modal = document.getElementById(modalId)
    modal.classList.remove("remove")

  })
  
})

