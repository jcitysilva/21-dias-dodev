// Algoritmo que recebe um valor inteiro positivo
// Usar a estrutura FOR para mostrar na console a contagem de 0 até ao número indicado

//Inicializar a variável
let num;

do {
    num = prompt("Escolhe um número inteiro positivo para efetuar o countdown de 0 até ao número escolhido");
    // Verifica se é um número inteiro positivo
    if (isNaN(num) || num <= 0 || num % 1 !== 0) {
        // num % 1 !== 0 // verifica se há algum resto na divisão de num por 1 //
        // Outra abordagem alternativa: verificar se o número é positivo usando Math.sign()
        // if (isNaN(num) || Math.sign(num) !== 1 || num % 1 !== 0) {
        // O método Math.sign() retorna 1 se o número é positivo, -1 se o número é negativo e 0 se o número é zero
        alert("Por favor escolha um número inteiro positivo válido!");
    }
} while (isNaN(num) || num <= 0 || num % 1 !== 0);

for (let contador = 0; contador <= num; contador++) {
    console.log(contador);
}