import leia from "readline-sync"

var valor = leia.questionFloat("Digite o valor total dos produtos: ");
var pagamento = leia.keyInSelect(['PIX','DEBITO','CREDITO','PARCELADO'], "Qual sua forma de pagamento? ");

var desconto0 = pagamento * 12
var desconto1 = pagamento * 7
var desconto2 = pagamento * 3
var desconto3 = pagamento
var parcelado = pagamento * 8

var total1 = pagamento - desconto0
var total2 = pagamento - desconto1
var total3 = pagamento - desconto2
var total4 = pagamento
var total5 = pagamento + parcelado

if(pagamento === 0){
    console.log("Voce recebeu 12% de desconto: " + total1)
} else if(pagamento === 1){
    console.log("Voce recebeu 7% de desconto: " + total2)
} else if(pagamento === 2){
    console.log("Voce recebeu 3% de desconto: " + total3)
} else if(pagamento === 3 && pagamento < 6){
    console.log("Voce nao recebeu desconto! " + total4)
} else {
    console.log("Voce vai pagar mais 8% do valor: " + total5)
}