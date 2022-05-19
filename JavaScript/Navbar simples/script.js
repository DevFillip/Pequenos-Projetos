
const menu = document.querySelector('.menu')
menu.addEventListener('click', abrirMenu)

function abrirMenu(){
    const itensMenu = document.querySelector('.menu-clicado')
    itensMenu.style.display = 'block'
    itensMenu.style.width = '1200px'
}
