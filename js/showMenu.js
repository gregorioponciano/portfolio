function showDiv(divId) {
    // Esconde todas as divs de conteúdo
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    // Mostra a div de conteúdo selecionada
    document.getElementById(divId).classList.add('active');

    // Atualiza o link ativo no menu
    const menuItems = document.querySelectorAll('.a-menu');
    menuItems.forEach(item => item.classList.remove('active'));
    document.querySelector(`a[onclick="showDiv('${divId}')"]`).classList.add('active');
}

// Mostra a primeira div ao carregar a página
document.addEventListener("DOMContentLoaded", () => showDiv('div1'));