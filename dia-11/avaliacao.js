// Cria um array para receber os nomes dos alunos e outro para receber as notas
// Para cada aluno inserido perguntar o nome e a nota
// Utilizador deve ter opção de parar de inserir informações quando desejar
// No final exibir a nota de cada aluno, a soma das notas e a média geral da turma
// Para calcular a média: dividir a soma das notas pelo total de alunos

// Criar variáveis
let alunos = [];
let notas = [];
let continuar = true;
let contador = 0;

// Loop
while (continuar) {
    let nome = prompt("Digite o nome do " + (contador + 1) + "º aluno");
    let nota = parseInt(prompt("Digite a nota do aluno"));
    alunos[contador] = nome;
    notas[contador] = nota;
    contador++;
    let resposta = prompt("Deseja inserir informações sobre outro aluno? (s/n)");
    if (resposta == "n") {
        continuar = false;
    }
}

// Exibir informações
console.log("Notas dos alunos: ");
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i] + " - " + notas[i]);
}

let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

let media = somaNotas / alunos.length;
console.log("A soma das notas foi: " + somaNotas);
console.log("A média geral da turma foi : " + media);