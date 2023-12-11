var numeroSecreto = parseInt(Math.random() * 1001);

function mentalista() {
    var chute = prompt('Digite um número entre 0 e 1000');
    var numeroDeChutes = 1;
    while (chute != numeroSecreto) {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor do que ' + chute + '!');
        } else {
            alert('O número secreto é maior do que ' + chute + '!');
        }
        chute = prompt('Digite um número entre 0 e 1000');
        numeroDeChutes++;
    }
    alert('Acertou! Você deu: ' + numeroDeChutes + ' chutes!');
}
