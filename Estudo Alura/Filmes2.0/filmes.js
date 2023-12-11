function adicionarFilmes() {
    var filmeFavorito = document.getElementById("idfilme").value
    
    var imagem = document.getElementById("listaFilmes")
    
    imagem.innerHTML = imagem.innerHTML + `<img src="${filmeFavorito}">` 
    // ou document.write('<img src=' + filmeFavorito + '>')
    document.getElementById("idfilme").value = ''
}