// Banco: Algoritmo para prever o aumento de salário dos clientes
// Pedir ao cliente para informar nome, idade e salário atual (exibir informações no console)
// Pedir para confirmar todas as informações 
// Se informações estiverem erradas, digitar tudo de novo
// Repetir até que o utilizador confirme que está tudo OK
// Fazer a previsão do salário para os próximos 10 anos:
// - Recebe anualmente um aumento salarial
// - 1º ano aumenta 1,5% e a partir do 2º ano os aumentos correspondem ao dobro da percentagem do ano anterior
// - Apresentar os valores com o ano correspondente no formato "2024 - ****€"

let confirmar = "n";
let salarioAtual;

while (confirmar != "s") {
    let nome = prompt("Digita o teu nome");
    let idade = parseInt(prompt("Escreve a tua idade"));
    salarioAtual = parseFloat(prompt("Digita o teu salário atual"));
    console.log(`nome: ${nome}, idade: ${idade}, salário atual: ${salarioAtual}`);
    confirmar = prompt("As informações estão corretas? (s/n)");
}

console.log("________________________________________________________________________");

// Fazer a previsão salarial
let aumento = 0.015;
console.log("Previsão salarial para os próxims 10 anos:");

for (let ano = 1; ano <= 10; ano++) {
    salarioAtual += salarioAtual * aumento
    aumento *= 2

    console.log((2024 + ano) + " = €" + salarioAtual.toFixed(2));
}
