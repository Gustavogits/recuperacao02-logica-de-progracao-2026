import leia from "readline-sync"

var nota1 = leia.questionFloat("Qual sua primeira nota? ");
var nota2 = leia.questionFloat("Qual sua segunda nota? ");
var aulas = 100
var faltas = leia.questionInt("Quantos dias voce faltou? ");

var media = (nota1 + nota2) /2
var freq = (aulas/faltas) * 100
var total = freq

if(media >= 7 && total >= 75){
    console.log("Voce passou de ano!")
} else if(media >= 5 && media <= 6.9 && total >= 75){
    console.log("Voce esta de recuperaçao!")
} else if(media < 5){
    console.log("Voce reprovou por nota!")
} else {
    console.log("Voce reprovou por falta!")
}