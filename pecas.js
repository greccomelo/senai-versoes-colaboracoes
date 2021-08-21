const listapecas = ["Peça de teste", "Motor", "Amortecedor"]

console.log(listapecas)

if (listapecas.length < 10) {
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não há mais espaço na lista")
}

var peso = 50
if (peso > 100) {
    console.log("Peso da peça adequado")
} else {
    console.log("Peso insuficiente")
}

let nomePeca = "Disco de freio"

if (nomePeca.length > 3) {
    console.log("Nome adequado!!")
} else if (nomePeca.length == 0) {
    console.log("O nome não pode ser vazio")
} else {
    console.log("O nome deve possuir mais de 3 caracteres")
}

switch (nomePeca.length) {
    case 0:
        console.log("O nome não pode ser vazio")
        break;

    case 1:
    case 2:
    case 3:
        console.log("O nome deve possuir mais de 3 caracteres")
        break

    default:
        console.log("Nome adequado!!")
        break;
}