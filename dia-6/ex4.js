// Algoritmo utilizando for que recebe 1 número e
// Exibe na tela o resultado da sua tabuada (até x 10) e dos próximos 2 números

let num;

do {
    num = prompt("Escolhe um número inteiro positivo para efetuar a respetiva tabuada (até x 10) e a dos próximos 2 números");
    // Verifica se é um número inteiro positivo
    if (isNaN(num) || num <= 0 || num % 1 !== 0) {
        alert("Por favor escolha um número inteiro positivo válido!");
    }
} while (isNaN(num) || num <= 0 || num % 1 !== 0);

// prompt() retorna uma string, não um número!
num = parseInt(num);

// Calcula a tabuada para o número dado (até x 10)
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// Calcula a tabuada para os próximos dois números após num
for (let j = num + 1; j <= num + 2; j++) {
    console.log("___________");
    for (let k = 1; k <= 10; k++) {
        console.log(`${j} x ${k} = ${j * k}`);
    }
}

// Simplificando
// for (let l = num; l <= num + 2; l++ ) {
//     console.log("Tabuada do número: " + l);
//     for (let m = 0; m <= 10; m++) {
//         console.log(`${l} x ${m} = ${l * m}`);
//     }
// }