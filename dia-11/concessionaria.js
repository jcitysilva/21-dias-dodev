// Criar 3 arrays
// 1 guarda modelos, outro guarda anos e outro guarda valores (preço)
// Utilizar while para pedir ao utilizador para registar novos carros (modelo, ano e valor)
// Popular os 3 arrays nas mesmas posições
// Utilizador deve definir quando parar inserir informações

let modelos = [];
let anos = [];
let valores = [];
let continuar = true;
let contador = 0;

// Criar loop
while (continuar) {
    let modelo = prompt("Digite o modelo do carro");
    modelos[contador] = modelo;
    let ano = prompt("Digite o ano do carro");
    anos[contador] = ano;
    let valor = prompt("Digite o valor do carro");
    valores[contador] = valor;
    contador++;

    let resposta = prompt("Deseja inserir outro carro? (s/n)");
    if (resposta == "n") {
        continuar = false;
    }
}

// Exibir informações
console.log("Carros registados:");
for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i]);
}

// // Ordenar por preço usando a lógica original
// for (let i = 0; i < valores.length - 1; i++) {
//     for (let j = 0; j < valores.length - i - 1; j++) {
//         if (parseInt(valores[j]) > parseInt(valores[j + 1])) {
//             let modeloMaiorValor = modelos[j];
//             modelos[j] = modelos[j + 1];
//             modelos[j + 1] = modeloMaiorValor;

//             let anoMaiorValor = anos[j];
//             anos[j] = anos[j + 1];
//             anos[j + 1] = anoMaiorValor;

//             let maiorValor = valores[j];
//             valores[j] = valores[j + 1];
//             valores[j + 1] = maiorValor;
//         }
//     }
// }

// Ordenar por preço (menor para o maior): Após Refatoração
for (let i = 0; i < valores.length - 1; i++) {
    for (let j = 0; j < valores.length - i - 1; j++) {
        if (parseInt(valores[j]) > parseInt(valores[j + 1])) {
            // Troca os modelos
            [modelos[j], modelos[j + 1]] = [modelos[j + 1], modelos[j]];

            // Troca os anos
            [anos[j], anos[j + 1]] = [anos[j + 1], anos[j]];

            // Troca os valores
            [valores[j], valores[j + 1]] = [valores[j + 1], valores[j]];
        }
    }
}

console.log("Carros ordenados pelo preço --> com lógica original:");
for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i]);
}

console.log("________________________________________________________________________");

// Função para ordenar os carros pelo preço usando o método sort()
function ordenarCarrosPorPreco() {
    let carrosOrdenados = [];
    for (let i = 0; i < modelos.length; i++) {
        carrosOrdenados.push({
            modelo: modelos[i],
            ano: anos[i],
            valor: parseInt(valores[i])
        });
    }
    carrosOrdenados.sort((a, b) => a.valor - b.valor);
    return carrosOrdenados;
}

// Teste com o método sort()
console.log("Teste com o método sort()");

// Ordenar por preço usando o método sort()
let carrosOrdenados = ordenarCarrosPorPreco();
console.log("Carros ordenados pelo preço --> com sort():");
carrosOrdenados.forEach(carro => {
    console.log(carro.modelo + " - " + carro.ano + " - " + carro.valor);
});
