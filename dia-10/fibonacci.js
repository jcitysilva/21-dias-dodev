// Algoritmo que pede um número positivo
// Depois popular um array com os números de Fibonacci (próximo número da sequência é a soma dos 2 anteriores)
// Ao somar com os termos anteriores, soma com elementos anteriores do array
// Array tem no máximo 10 elementos
// Para iniciar sequência usar (número inserido-1)
// Ex: Inseriu o nº8, a sequência deve começar em 7 8 15 23 ...

// Criar variáveis
let numero = parseInt(prompt("Digite um número inteiro positivo"))
let fibonacci = []

fibonacci[0] = numero - 1
fibonacci[1] = numero

// Criando loop
for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log("Fibonacci: " + fibonacci)