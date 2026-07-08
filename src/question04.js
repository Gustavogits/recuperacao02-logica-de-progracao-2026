import leia from "readline-sync"

var salario = leia.questionFloat("Digite o valor do seu salario: ");
var horas = leia.questionFloat("Digite quantas horas extras voce fez esse mes: ");
var faltas = leia.questionInt("Informe quantos dias voce faltou esse mes: ");

var extras = horas * 35
var falta = 90

var bonus = 250

if(horas > 20){
    console.log("Voce recebeu 200 reais extras: " + (extras + bonus))
}

if(faltas === 1){
    console.log("Voce perdeu 90 reais" + salario - falta)
} else if(faltas === 2){
    console.log("Voce perdeu 180 reais" + salario - (2 * falta))
} else {
console.log("Voce perdeu 270 reais" + salario - (3 * falta))
console.log("ADVERTENCIA!!!")
}