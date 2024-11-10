function toggleContent(id) {
    var content = document.getElementById(id);
    var contents = document.getElementsByClassName('guia');
    for (var i = 0; i < contents.length; i++) {
        if (contents[i] !== content) {
            contents[i].style.display = 'none';
        }
    }
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}