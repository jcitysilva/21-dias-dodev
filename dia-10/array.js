// 1. Algoritmo que recebe um inteiro positivo e um array
// Popular o array e no final exibir os indíces em que o número inserido aparece nesse array
// Usar até 10 elementos no array

console.log("--> Ex1 ____________________________________________________________________");
const array = [];
const indices = [];
let contadorIndice = 0;

const numeroProcurado = parseInt(prompt("Digite o número a ser procurado:"));

for (let i = 0; i < 10; i++) { // Array com 10 elementos
    const elemento = parseInt(prompt(`Digite o elemento ${i +1}:`));
    array[i] = elemento;
}

for (let i = 0; i < 10; i++) { // Supomos que o array tem até 10 elementos
    if (array[i] === numeroProcurado) {
        indices[contadorIndice] = i
        contadorIndice++
    }
}

if (contadorIndice > 0) {
    console.log(`O número ${numeroProcurado} foi encontrado nos índices: ${indices}`);
} else {
    console.log(`O número ${numeroProcurado} não foi encontrado no array!`);
}

console.log("________________________________________________________________________");

console.log("Agora vamos procurar usando uma aproximação diferente: métodos push() e reduce()");

// Outro método de aproximação para encontrar os índices onde o número consta
const indicesAproximados = array.reduce((acumulador, valorAtual, indice) => {
    if (valorAtual === numeroProcurado) {
        acumulador.push(indice);
    }
    return acumulador;
}, []);

console.log(`Usando push() e reduce(), o número ${numeroProcurado} foi encontrado nos índices: ${indicesAproximados}`);

// 2. Algoritmo que pede 5 números ao usuário, coloque num array e depois exiba o array
// Modifique os elementos do array de modo a ficarem na ordem inversa

console.log("--> Ex2 ____________________________________________________________________");

// Criar variáveis
let array2 = [];
let array2Invertido = [];

// Popular o array
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º número"));
    array2[i] = numero
}

console.log("Array original: " + array2);

// Inverter o array
let contador = 4;
for (let i= 0; i < 5; i++) {
    array2Invertido[i] = array2[contador]
    contador--
}

console.log("Array invertido: " + array2Invertido);
console.log("________________________________________________________________________");

// Inverter o array usando o método reverse()
let array2InvertidoReverse = array2.slice().reverse();

console.log("Array invertido com os métodos slice() e reverse(): " + array2InvertidoReverse);

// 3. Refazer o ex.2, mas perguntar ao utilizador quantos números deseja inserir no array
// Utilizador vai preenchendo elemento por elemento e no final exibir o array e o array invertido

console.log("--> Ex3 ____________________________________________________________________");

// Criar variáveis
let array3 = [];
let array3Invertido = [];
let quantidade = parseInt(prompt("Digite a quantidade de números para inserir no array"));

// Popular o array
for (let i= 0; i < quantidade; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º número"));
    array3[i] = numero
}

console.log("Array original: " + array3)

// Inverter o array
let contador3 = quantidade - 1
for (let i = 0; i < quantidade; i++) {
    array3Invertido[i] = array3[contador3]
    contador3--
}

console.log("Array invertido: " + array3Invertido)

