// Espera a página carregar completamente antes de executar o script
window.onload = function() {
    // Seleciona o link de download pelo ID
    const downloadLink = document.getElementById('downloadLink');

    // Adiciona um "ouvinte de evento" para o clique no link
    downloadLink.addEventListener('click', function(event) {
        // Exibe a caixa de diálogo de confirmação
        const confirmarDownload = confirm('Tem certeza que deseja baixar este arquivo?');

        // Verifica a resposta do usuário
        if (confirmarDownload === false) {
            // Se o usuário clicou em "Cancelar"
            // Impede que o link execute sua ação padrão (o download)
            event.preventDefault();
            console.log('Download cancelado pelo usuário.');
        } else {
            // Se o usuário clicou em "OK"
            // O download continuará normalmente
            console.log('Download iniciado.');
        }
    });
};