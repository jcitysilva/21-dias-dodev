// Criar um sistema que peça ao utilizador: nome, idade, altura e peso
// Gravar em variáveis e a partir delas obter o ano de nascimento
// Considerar o ano atual e desconsiderar o mês
// Calcular o IMC

// IMC = peso / (altura * altura)

// Exibir no console a mensagem: "Olá 'nome', tu tens 'idade' anos, nasceste em 'ano', tens 'altura', pesas 'peso'Kg e o teu IMC é 'IMC'Kg/m^2"

// Inicializar variáveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0

// Solicitar informação ao utilizador para atribuir valores às variáveis
nome = prompt("Digita o teu nome: ")
idade = parseInt(prompt("Digita a tua idade: "))
altura = parseFloat(prompt("Digita a tua altura: "))
peso = parseFloat(prompt("Digita o teu peso: "))

// Cálculo da ano de nascimento e do IMC
let anoNasc = 0
anoNasc = 2024 - idade

let imc = 0
imc = peso / (altura **2)

// Exibir no console
console.log(`Olá ${nome}, tu tens ${idade} anos, nasceste em ${anoNasc}, tens ${altura}, pesas ${peso}Kg e o teu IMC é ${imc}Kg/m^2`)
