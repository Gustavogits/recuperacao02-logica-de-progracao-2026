import leia from "readline-sync"

var aluguel = leia.questionInt("Quantos dias voce alugou o carro? ");
var km = leia.questionFloat("Quantos km voce andou? ");
var tipodecarro = leia.keyInSelect(['POPULAR','INTERMEDIARIO','LUXO'], 'Qual seu tipo de carro? ');

if(tipodecarro === 0){
    var valord = tipodecarro * 90 
    var valork = km * 0.25
} else if(tipodecarro === 1){
    var valord = tipodecarro * 140
    var valork = km * 0.40  
} else {
    var valord = tipodecarro * 220
    var valork = km * 0.70 
}

if(aluguel > 7){
    console.log("Valor diaria: " + valord);
    console.log("Valor km: " + valork)
    var total = valord + valork
    console.log(total)
    var desconto = total * 0.10
    var final = total - desconto
    console.log("Voce rcebeu 10% de desconto: " + final)
} else {
    console.log("Valor diaria: " + valord);
    console.log("Valor km: " + valork)
    var total = valord + valork
    console.log(total)
}

