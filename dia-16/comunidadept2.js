// 1 Função que solicite se deseja:
// Registar-se, fazer login, excluir um registo ou encerrar o programa
// Função deve retornar a opção escolhida pelo utilizador

// 2 Criar uma função de registo que solicita 2 valores ao utilizador:
// Um nome e uma senha e guarda no respetivo array

// 3 Criar função login que recebe 2 valores como parâmetro, nome e senha e depois procure o nome recebido no array de nomes
// Se positivo comparar a senha no array de senhas
// Se as as duas comparações forem válidas retornar true, se uma não for, retornar false

// 4 Criar função exclusão de registo que recebe um nome e procura por ele no araay nomes e exclua a senha correspondente do outro array

// 5 Utilizando as funções criadas, fazer o fluxo de funcionamento do código
// Utilizador pode escolher quando encerra o programa conforme as opções
// Se o login for bem sucedido retornar uma mensagem "Login feito com sucesso!"
// Caso negativo "Nome ou senha incorretos!"


// Arrays para armazenar os nomes e senhas
let nomes = [];
let senhas = [];

// Função para solicitar a opção ao utilizador
function solicitarOpcao() {
    return prompt("Escolha uma opção:\n1. Registar-se\n2. Fazer login\n3. Excluir registo\n4. Encerrar programa");
}

// Função para registar um novo utilizador
function registarUtilizador() {
    let nome = prompt("Digite o nome:");
    let senha = prompt("Digite a senha:");
    nomes.push(nome);
    senhas.push(senha);
    console.log("Utilizador registado com sucesso!");
}

// Função para fazer login
function fazerLogin() {
    let nome = prompt("Digite o nome:");
    let senha = prompt("Digite a senha:");
    let indice = nomes.indexOf(nome);
    if (indice !== -1 && senhas[indice] === senha) {
        console.log("Login efetuado com sucesso!");
    } else {
        console.log("Nome ou senha incorretos!");
    }
}

// Função para excluir um utilizador
function excluirUtilizador() {
    let nome = prompt("Digite o nome do utilizador que deseja excluir:");
    let indice = nomes.indexOf(nome);
    if (indice !== -1) {
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log("Utilizador excluído com sucesso!");
    } else {
        console.log("Utilizador não encontrado.");
    }
}

// Fluxo de funcionamento do programa
let continuar = true;
while (continuar) {
    let opcao = solicitarOpcao();

    switch (opcao) {
        case "1":
            registarUtilizador();
            break;
        case "2":
            fazerLogin();
            break;
        case "3":
            excluirUtilizador();
            break;
        case "4":
            continuar = false;
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}
