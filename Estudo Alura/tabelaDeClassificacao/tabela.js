var paulo = {
    nome: "Paulo",
    vitoria: "0",
    empate: "0",
    derrota: "0",
    pontos: "0",
    id: 0
}
var rafa = {
    nome: "Rafa",
    vitoria: "0",
    empate: "0",
    derrota: "0",
    pontos: "0",
    id: 1
}
var gui = {
    nome: "Gui",
    vitoria: "0",
    empate: "0",
    derrota: "0",
    pontos: "0",
    id: 2
}
var renato = {
    nome: "Renato",
    vitoria: "0",
    empate: "0",
    derrota: "0",
    pontos: "0",
    id: 3
}
var listaJogadores = [paulo, rafa, gui, renato]
var elementoTabela = document.getElementById('tabela')
function exibirNaTela(){ 
    elementoTabela.innerHTML = ''
    for(var n = 0; n < 4; n++){
        jogador = listaJogadores[n]
        elementoTabela.innerHTML = elementoTabela.innerHTML + `
            <tr>
                <td>${jogador.nome}</td>
                <td>${jogador.vitoria}</td>
                <td>${jogador.empate}</td>
                <td>${jogador.derrota}</td>
                <td>${jogador.pontos}</td>
                <td><button onclick="adicionarVitoria(jogador)">Vitória</button></td>
                <td><button onclick="adicionarEmpate(jogador)">Empate</button></td>
                <td><button onclick="adicionarDerrota(jogador)">Derrota</button></td>
            </tr>
        `
    }
}    

    
exibirNaTela()

function adicionarVitoria(jogador) {
    jogador.vitoria++
    jogador.pontos++
    jogador.pontos++
    jogador.pontos++
    exibirNaTela()
}

function adicionarEmpate(jogador) {
    jogador.empate++
    jogador.pontos++
    exibirNaTela()
}

function adicionarDerrota(jogador) {
    jogador.derrota++
    exibirNaTela()
}
