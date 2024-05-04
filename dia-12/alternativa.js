// Criar arrays para armazenar nomes e senhas
let nomes = [];
let senhas = [];

// Função para registrar um novo usuário
function registrarUsuario() {
    let nome = prompt("Digite o nome de usuário:");
    let senha = prompt("Digite a senha:");

    // Verifica se o nome já está registrado
    if (nomes.includes(nome)) {
        alert("Nome de usuário já registrado. Escolha outro nome.");
        return;
    }

    // Adiciona o nome e senha aos arrays
    nomes.push(nome);
    senhas.push(senha);
    alert("Usuário registrado com sucesso!");
}

// Função para realizar login
function fazerLogin() {
    let nome = prompt("Digite o nome de usuário:");
    let senha = prompt("Digite a senha:");

    // Verifica se o nome e a senha correspondem a algum usuário
    let indice = nomes.findIndex((nomeUsuario, index) => nomeUsuario === nome && senhas[index] === senha);

    if (indice !== -1) {
        alert("Login efetuado com sucesso. Bem-vindo!");
    } else {
        alert("Nome de usuário ou senha incorretos.");
    }
}

// Função para excluir um usuário
function excluirUsuario() {
    let nome = prompt("Digite o nome de usuário que deseja excluir:");

    // Verifica se o nome está registrado
    let indice = nomes.findIndex(nomeUsuario => nomeUsuario === nome);

    if (indice !== -1) {
        // Remove o usuário dos arrays
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        alert("Usuário excluído com sucesso!");
    } else {
        alert("Nome de usuário não encontrado.");
    }
}

// Loop principal do programa
while (true) {
    let opcao = prompt("O que deseja fazer?\n1 - Registar\n2 - Login\n3 - Excluir\n4 - Encerrar");

    switch (opcao) {
        case "1":
            registrarUsuario();
            break;
        case "2":
            fazerLogin();
            break;
        case "3":
            excluirUsuario();
            break;
        case "4":
            alert("Encerrando o programa...");
            // Encerra o loop e finaliza o programa
            break;
        default:
            alert("Opção inválida. Por favor, escolha uma opção válida.");
            break;
    }

    // Se a opção selecionada for "4 - Encerrar", saia do loop
    if (opcao === "4") {
        break;
    }
}
