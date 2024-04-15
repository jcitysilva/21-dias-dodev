// 1.1. Cria um algoritmo que pede 2 números ao usuário

// 1.2. Utiliza o switchCase para dar a opção de escolha da operação a realizar com esses 2 números

// 1.3. Exibe na console a operação feita e o resultado

let num1;
let num2;
let operacao;

do {
    do {
        num1 = Number(prompt("Escolhe o primeiro número"));
        num2 = Number(prompt("Escolhe o segundo número"));

        if (isNaN(num1) || isNaN(num2)) {
            alert("Por favor escolhe um número válido!");
        }
    } while (isNaN(num1) || isNaN(num2));

    operacao = Number(prompt(`Escolhe a operação:
    [ 1 ] ---> Somar
    [ 2 ] ---> Subtrair
    [ 3 ] ---> Multiplicar
    [ 4 ] ---> Dividir
    [ 5 ] ---> Sair`));

    if (operacao < 1 || operacao > 5) {
        alert("Por favor escolhe uma opção válida!");
    }
} while (operacao < 1 || operacao > 5);

let resultado;

switch (operacao) {
    case 1:
        resultado = num1 + num2;
        console.log(`A soma entre ${num1} e ${num2} é ${resultado}`);
        break;
    case 2:
        resultado = num1 - num2;
        console.log(`A subtração entre ${num1} e ${num2} é ${resultado}`);
        break;
    case 3:
        resultado = num1 * num2;
        console.log(`A multiplicação entre ${num1} e ${num2} é ${resultado}`);
        break;
    case 4:
        if (num2 !== 0) {
            resultado = num1 / num2;
            console.log(`A divisão entre ${num1} e ${num2} é ${resultado}`);
        } else {
            console.log("Não é possível dividir por zero.");
        }
        break;
    case 5:
        console.log(`A sair da calculadora...`);
        break;
    default:
        console.log("Não escolheu nenhuma operação válida!");
        break;
}
