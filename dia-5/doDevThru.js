// 1.1 Algoritmo para escolher entre 3 opções num posto de gasolina: abastecer com gasolina, gasóleo ou calibrar os pneus

// 1.2 Se escolher abastecer com gasolina, solicitar o valor desejado e exibir na console a quantidade de litros abastecida (1,667 €/litro)

// 1.3 Se escolher abastecer com gasóleo, solicitar o valor desejado e exibir na console a quantidade de litros abastecida (1,557 €/litro)

// 1.4 Se escolher calibrar os pneus, exibir no console: "Pneus calibrados com sucesso"

let opcao;

do {
    opcao = Number(prompt(`Bem vind@ ao posto de abastecimento doDevThru!
    Por favor selecione a opção desejada:
    [ 1 ] ---> Abastecer com Gasolina
    [ 2 ] ---> Abastecer com Gasóleo
    [ 3 ] ---> Calibrar os Pneus
    [ 4 ] ---> Sair`));

    if (isNaN(opcao) || opcao < 1 || opcao > 4) {
        alert("Por favor escolha uma opção válida!");
    }
} while (isNaN(opcao) || opcao < 1 || opcao > 4);

function calcularLitrosAbastecidos(valor, preco) {
    return (valor / preco).toFixed(3); // Arredonda para duas casas decimais
}

switch (opcao) {
    case 1:
        let precoGasolina = 1.667;
        let valorGasolina = Number(prompt(`Escolha o valor monetário que deseja abastecer. Preço = ${precoGasolina} €/litro`));
        let litrosAbastecidosGasolina = calcularLitrosAbastecidos(valorGasolina, precoGasolina);
        console.log (`Foram abastecidos ${litrosAbastecidosGasolina} litros de gasolina.`);
        break;
    case 2:
        let precoGasoleo = 1.557;
        let valorGasoleo = Number(prompt(`Escolha o valor monetário que deseja abastecer. Preço = ${precoGasoleo} €/litro`));
        let litrosAbastecidosGasoleo = calcularLitrosAbastecidos(valorGasoleo, precoGasoleo);
        console.log (`Foram abastecidos ${litrosAbastecidosGasoleo} litros de gasóleo.`);
        break;
    case 3:
        console.log (`Pneus Calibrados com Sucesso!`);
        break;
    case 4:
        console.log (`A sair...`);
        break;
}

console.log(`Obrigado pela escolha, o doDevThru deseja-lhe uma boa viagem!`);
