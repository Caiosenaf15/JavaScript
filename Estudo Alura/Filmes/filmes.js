var listaFilmes = ['https://br.web.img2.acsta.net/r_1920_1080/medias/nmedia/18/35/17/90/18869558.jpg', 'https://img.elo7.com.br/product/main/268A80A/big-poster-filme-jogador-numero-1-lo001-tamanho-90x60-cm-geek.jpg','https://img.elo7.com.br/product/original/3E882CA/big-poster-filme-homem-aranha-sem-volta-para-casa-90x60-cm-1-poster-geek.jpg','https://img.elo7.com.br/product/main/259A7AA/big-poster-filme-vingadores-ultimato-lo001-tamanho-90x60-cm-poster-marvel.jpg', 'https://img.elo7.com.br/product/zoom/2368C5D/big-poster-filme-marvel-venom-tamanho-90x60-cm-loot-op-010-geek.jpg'];

for(var n = 0; n < 5; n++){
    document.write('<img src=' + listaFilmes[n] + '>'); 
}