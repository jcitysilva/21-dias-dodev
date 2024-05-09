// 1 Função que pergunta nome e salário do colaborador

// 2 Função para ser chamada dentro da função que solicita informações e vai calcular aumento salarial:
// --> até 1.500,00 aumento de 20%
// --> 1.501,00 até 2.000,00 aumento de 15%
// --> 2.001,00 até 3.000,00 aumento de 10%
// --> > 3.001,00 aumento de 5%

// Deve receber os parâmetros: salário e nome

// 3 Depois deve exibir: nome, salário, % de aumento e salário reajustado

// 4 Criar função chamada no final que pergunta se deseja calcular novamente com as novas informações

// 5 Para testar basta chamar a 1ª função criada, as outras serão chamadas na sequência conforme execução

// Função para perguntar nome e salário do colaborador
var nome
var salario

function perguntarColaborador() {
    nome = prompt("Digite o nome do colaborador:");
    salario = parseFloat(prompt("Digite o salário do colaborador:"));
    calcularAumentoSalario(nome, salario);
}

// Função para calcular o aumento de salário
function calcularAumentoSalario(nome, salario) {
    var aumento = 0;

    if(salario <= 1500) {
        aumento = 0.2; // 20%
    } else if (salario <= 2000) {
        aumento = 0.15; // 15% 
    } else if (salario <= 3000) {
        aumento = 0.1; // 10%
    } else {
        aumento = 0.05; // 5%
    }

    var novoSalario = salario + (salario * aumento);

    // Exibir os resultados

    console.log("Nome do colaborador : " + nome);
    console.log("Salário: €" + salario);
    console.log("Aumento: " + (aumento *100) + "%");
    console.log("Salário reajustado: €" + novoSalario);

    perguntarNovamente(); // Perguntar se deseja calcular novamente
}

// Função para perguntar se deseja calcular novamente
function perguntarNovamente() {
    var resposta = prompt("Deseja calcular novamente? (s/n)");

    if (resposta == "s") {
        perguntarColaborador(); // Reiniciar o processo
    } else {
        console.log("Programa encerrado.");
    }
}

// Iniciar o processo: perguntar o nome e salário do colaborador
perguntarColaborador();