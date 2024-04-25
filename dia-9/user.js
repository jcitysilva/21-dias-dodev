// Algoritmo onde deve informar nome, idade, peso, altura e profissão
// Exibir texto com todas essas informações
// Olá nome, tens x anos, és profissão, tens y metros de altura e pesas *kg

// Criar as variáveis
let nome = prompt("Escreve o teu nome");
let idade = parseInt(prompt("Introduz a tua idade"));
let peso = prompt("Digita o teu peso");
let altura = prompt("Escreve a tua altura");
let profissão = prompt("Indica a tua profissão");

console.log(`Olá ${nome}, tens ${idade} anos, és ${profissão}, tens ${altura}m de altura e pesas ${peso}Kg`);

// Verificar se é maior de idade, se for exibir "Podes consumir umas geladas"
// Se não "Só meia de leite ou água das pedras"

if ( idade >= 18) {
    console.log("Podes consumir umas geladas");
}else {
    console.log("Só meia de leite ou água das pedras");
}

// Mostrar a idade em meses, semanas e dias.
// Considerar o ano com 365 dias, mês com 30 dias e semana com 7 dias

let meses = idade * 12;
let semanas = idade * 52;
let dias = idade * 365;

console.log("A tua idade em meses é: " + meses);
console.log("A tua idade em semanas é: " + semanas);
console.log("A tua idade em dias é: " + dias);

// Com for
// Definir os fatores de conversão
let fatores = [12, 52, 365];
let unidades = ["meses", "semanas", "dias"];

// Calculando e exibindo a idade em cada unidade
for (let i = 0; i < fatores.length; i++) {
    let resultado = idade * fatores[i];
    console.log(`A tua idade em ${unidades[i]} é: ${resultado}`);
}