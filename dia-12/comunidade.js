// 1 // Criar 2 arrays: um para nomes e outro para senhas
// 2 // Perguntar ao usuário se deseja: registar-se; fazer login; excluir um registo ou encerrar o programa
// 3 // Fazer o fluxo de funcionamento do código, considerar que o utilizador pode escolher quando encerrar o programa conforme as opções
// 4 // Se a opção escolhida for registar-se, solicitar dois valores ao utilizador: um nome e uma senha
// 5 // Se a opção escolhida dor login, solicitar nome e senha. Procurar nome no array nomes e caso positivo, comparar senha no array de senhas
// Se ambas as comparações forem válidas, exibir mensagem de sucesso
// 6 // Se a opção escolhida for excluir, solicitar o nome, procurá-lo no array nomes e excluí-lo a ele e à senha correspondente (do array senhas)
// Organizar o array para eliminar espaços vazios

// 1 //
let nomes = [];
let senhas = [];
let contador = 0;

let continuar = true;

// 2 e 3 // Solicitar a operação que o utilizador deseja fazer e organizar a execução do código com um switchCase dentro de um While
while(continuar) {
    let opcao = prompt("O que deseja fazer? 1 - Registar / 2 - Login / 3 - Excluir / 4 - Encerrar");

    switch (opcao) {
        case "1":
            // 4: Criar Opção de registo
            nomes[contador] = prompt("Digite o nome:");
            senhas[contador] = prompt("Digite a senha:");
            contador++;

            break;
        
        case "2":
            // 5: Criar login
            let nome = prompt("Qual o nome?");
            let senha = prompt("Qual a senha");
            let loginValido = false;

            for (let i = 0; i < nomes.length; i++) {
                if (nome == nomes[i] && senha == senhas[i]) {
                    loginValido = true;
                }
            }

            if(loginValido) {
                alert("Login efetuado com sucesso. Bem-vindo!");
            } else {
                alert("Login ou senha incorretos!");
            }

            break;

        case "3":
            // 6: Criar excluir
            let nomeExcluir = prompt("Qual o nome que deseja excluir?");
            let nomesAux = [];
            let senhasAux = [];
            let contadorAux = 0;

            for (let i = 0; i < contador; i++) {
                if (nomeExcluir == nomes[i]) {
                    alert("Registo excluído com sucesso")
                } else {
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++;
                }
            }

            nomes = nomesAux;
            senhas = senhasAux;
            contador--;

            break;

        case "4":
            continuar = false;
            break;

        default:
            console.log("Opção inválida, escolha outra!");
            break;
    }
}


// // Resolução alternativa para login e exclusão
// // Função para encontrar o índice de um nome no array de nomes

// function encontrarIndice(nome) {
//     for (let i = 0; i < nomes.length; i++) {
//         if (nomes[i] === nome) {
//             return i;
//         }
//     }
//     return -1;
// }

// // Lógica do Login

// const nome = prompt("Digite o nome do utilizador:");
// const senha = prompt("Digite a senha:");

// const indice = encontrarIndice(nome);

// if (indice !== -1 && senhas[indice] === senha) {
//     console.log("Login bem-sucedido!");
// } else {
//     console.log("Nome de utilizador ou senha incorretos.");
// }

// // Lógica para exclusão

// const nomeExcluir = prompt("Digite o nome do utilizador a ser excluído:");

// const indiceExcluir = encontrarIndice(nome);

// if (indice !== -1) {
//     // Remove o elemento encontrado, movendo os elementos posteriores uma posição para trás
//     for (let i = indice; i < nomes.length -1; i++) {
//         nomes[i] = nomes[i + 1];
//         senhas[i] = senhas [i + 1];
//     }
//     //Reduz o comprimento dos arrays
//     nomes.length--;
//     senhas.length--;

//     console.log("Registo excluído com sucesso!");
// } else {
//     console.log("Nome de utilizador não encontrado.");
// }