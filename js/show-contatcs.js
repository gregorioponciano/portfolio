function showContatcs() {
    var visualizar = document.getElementById('header-contatcs');

    // Verifica o estado atual e alterna a exibição
    if (visualizar.style.display === "block") {
        visualizar.style.display = "none";
    } else {
        visualizar.style.display = "block";
    }
}

// Função para garantir que o conteúdo seja mostrado ou escondido baseado no tamanho da tela
function checkScreenSizeForContacts() {
    var visualizar = document.getElementById('header-contatcs');

    if (window.innerWidth > 1249) {
        // Exibe o conteúdo se a tela for maior que 768px
        if (visualizar.style.display === "none" || visualizar.style.display === "") {
            visualizar.style.display = "block";
        }
    } else {
        // Esconde o conteúdo se a tela for menor ou igual a 768px
        visualizar.style.display = "none";
    }
}

// Adiciona o evento de redimensionamento para ajustar o conteúdo
window.addEventListener('resize', checkScreenSizeForContacts);

// Verifica o tamanho da tela quando a página for carregada
document.addEventListener("DOMContentLoaded", () => checkScreenSizeForContacts());
