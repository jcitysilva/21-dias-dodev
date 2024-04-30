// Algoritmo onde deve informar nome, idade, peso, altura e profissão
// Exibir texto com todas essas informações
// Olá nome, tens x anos, és profissão, tens y metros de altura e pesas *kg

// Criar as variáveis
let nome = prompt("Escreve o teu nome");
let idade = parseInt(prompt("Introduz a tua idade"));
let peso = prompt("Digita o teu peso (Formato __.__ Kg)");
let altura = prompt("Escreve a tua altura (Formato _.__ m)");
let profissão = prompt("Indica a tua profissão");

// A partir da idade descobrir o ano de nascimento (considerando o ano atual do sistema / efetuar o cálculo considerando apenas o ano)

// Descobrir o ano de nascimento
let anoAtual = new Date().getFullYear();
let anoNascimento = anoAtual - idade;


console.log(`Olá ${nome}, tens ${idade} anos, és ${profissão}, tens ${altura}m de altura e pesas ${peso}Kg`);

// Verificar se é maior de idade, se for exibir "Podes consumir umas geladas"
// Se não "Só podes pedir meia de leite ou água das pedras"

if ( idade >= 18) {
    console.log("Podes consumir umas geladas");
}else {
    console.log("Só podes pedir meia de leite ou água das pedras");
}

console.log("________________________________________________________________________");

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
console.log("::: COM O FOR LOOP :::");
let fatores = [12, 52, 365];
let unidades = ["meses", "semanas", "dias"];

// Calculando e exibindo a idade em cada unidade
for (let i = 0; i < fatores.length; i++) {
    let resultado = idade * fatores[i];
    console.log(`A tua idade em ${unidades[i]} é: ${resultado}`);
}

console.log("________________________________________________________________________");

// Perguntar ao utilizador se deseja calcular o IMC
let calcularIMC = confirm("Deseja calcular o IMC?");

if (calcularIMC) {
    // Código do desafio IMC

    // Calcular o IMC do utilizador e informar qual o resultado
    // IMC = peso / (altura * altura)
    // Peso em Kg e altura em m
    // Resultado em kg/m^2
    // Depois de obter o resultado, verificar a faixa onde o IMC se encontra

    // - Baixo Peso: menor que 18,5
    // - Peso Normal: entre 18,5 e 24,9
    // - Excesso de Peso: entre 25 e 28,9
    // - Obesidade: maior ou igual a 30
    // - Obesidade Classe I (Moderada): entre 30 a 34,9
    // - Obesidade Classe II (Severa): entre 35 a 39,9
    // - Obesidade Classe III (Mórbida): > 40

    // Calcular o IMC
    let imc = peso / (altura ** 2);

    // Variável para armazenar o texto/descrição do IMC
    let imcTxt;

    // Verificar a faixa do IMC
    if (imc < 18.5) {
        imcTxt = "Baixo Peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        imcTxt = "Peso Normal";
    } else if (imc >= 25 && imc <= 28.9) {
        imcTxt = "Excesso de Peso";
    } else if (imc >= 30 && imc <= 34.9) {
        imcTxt = "Obesidade Classe I (Moderada)";
    } else if (imc >= 35 && imc <= 39.9) {
        imcTxt = "Obesidade Classe II (Severa)";
    } else {
        imcTxt = "Obesidade Classe III (Mórbida)";
    }

    // Exibindo as informações
    console.log(`${nome}, nasceste em ${anoNascimento} e tens um IMC de ${imc.toFixed(2)}kg/m2: (${imcTxt})`);
    console.log("________________________________________________________________________");
}

let calcularAnos = confirm("Deseja exibir todos os anos que já viveu até ao ano atual e saber a sua idade em cada ano?")

if (calcularAnos) {
    for (let anos = 0; anos <= idade; anos++ && anoNascimento++) {
        console.log (`${anoNascimento} - ${anos} anos de idade`);
    }
    console.log("________________________________________________________________________");
} else {
    console.log("Ok, obrigado por usar o programa!");
}
