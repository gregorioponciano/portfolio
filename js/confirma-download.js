// Espera a página carregar
window.onload = function() {
    // Seleciona todos os links com a classe 'btn-download'
    const downloadLinks = document.querySelectorAll('.btn-download');

    // Percorre cada link da lista
    downloadLinks.forEach(link => {
        // Adiciona o ouvinte de evento de clique para cada link
        link.addEventListener('click', function(event) {
            const confirmarDownload = confirm('Tem certeza que deseja baixar este arquivo?');

            if (confirmarDownload === false) {
                // Se o usuário clicar em "Cancelar", impede o download
                event.preventDefault();
                console.log('Download cancelado pelo usuário.');
            } else {
                // Se o usuário clicar em "OK", o download continua
                console.log('Download iniciado.');
            }
        });
    });
};