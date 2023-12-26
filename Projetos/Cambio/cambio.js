var cambio = 0
var calc = 0
var valor = 0

function enviar(moeda){
    valor = document.getElementById("iusu").value
    if(moeda == 1){
        cambio = 4.89
    } else {
        cambio = 5.39
    }
    calc = valor * cambio
}
var val = calc
alert(valor)
document.write(val.toFixed(2))