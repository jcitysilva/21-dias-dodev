// 1. Algoritmo que recebe um inteiro positivo e um array
// Popular o array e no final exibir os indíces em que o número inserido aparece nesse array
// Usar até 10 elementos no array

const array = [];
const indices = [];
let contadorIndice = 0

const numeroProcurado = parseInt(prompt("Digite o número a ser procurado:"));

for (let i = 0; i < 10; i++) { // Array com 10 elementos
    const elemento = parseInt(prompt(`Digite o elemento ${i +1}:`));
    array [i] = elemento;
}

for (let i = 0; i < 10; i++) { // Supomos que o array tem até 10 elementos
    if (array[i] === numeroProcurado) {
        indices[contadorIndice] = i
        contadorIndice++
    }
}

console.log(`O número ${numeroProcurado} foi encontrado nos índices`);

// 2. Algoritmo que pede 5 números ao usuário, coloque num array e depois exiba o array
// Modifique os elementos do array de modo a ficarem na ordem inversa

// 3. Refazer o ex.2, mas perguntar ao utilizador quantos números deseja inserir no array
// Utilizador vai preenchendo elemento por elemento e no final exibir o array e o array invertido


