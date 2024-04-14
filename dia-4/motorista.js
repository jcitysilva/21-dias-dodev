/*
1.1. Crie um sistema que pergunte ao utilizador:
- Nome?
- Idade?
- Tens carta de condução? (sim / nao)
- Tens carro? (sim / nao)

1.2. Se o utilizador não form maior de idade ou não tiver carta: console "[nome] não podes conduzir!"

1.3. Se for maior de idade, tiver carta, mas não tiver carro: console "[nome] podes conduzir, mas não tens carro!"

1.4. Se for maior de idade, tiver carta e tiver carro. Console: [nome], vais ser o meu motorista!"
*/

let nome = prompt("Como te chamas?");
let idade = parseInt(prompt("Quantos anos tens?"));
let carta = prompt("Tens carta de condução? (sim / nao)");
let carro = prompt("Tens carro? (sim / nao)");

if (idade < 18 || carta === "nao") {
    console.log(`${nome} não podes conduzir`);
} else if (idade >= 18 && carta === "sim" && carro === "nao") {
    console.log(`${nome} podes conduzir, mas não tens carro!`);
} else {
    console.log(`${nome}, vais ser o meu motorista!`);
}
