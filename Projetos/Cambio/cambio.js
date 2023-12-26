function enviar(moeda){
    var valor = document.getElementById('iusu').value
    var res = document.getElementById('resultado')
    if(moeda == 1){
        var tipo = "dólar"
        var cambio = 4.89
    } else {
        var tipo = "euro"
        var cambio = 5.39
    }
    var numero = Number(valor.valueOf)
    var num2 =  Number(cambio.valueOf)
    var calc = numero * num2
    res.innerHTML = `A conversão de ${tipo} para real é: R$ ${calc}`
}