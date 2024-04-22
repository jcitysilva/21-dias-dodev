// Pedir o nome e o NIF
// Pedir valor
// Perguntar a operação: levantamento ou depósito
// Se levantamento remove o valor inserido do saldo total da conta
// Se depósito adiciona o valor no saldo total
// Perguntar se deseja continuar (1 Continuar e 2 Sair)
// Exibir o saldo total
// Exibir o maior valor inserido (independentemente de ser depósito ou levantamento)
// Exibir a média (independentemente)

// Regras:
// Iniciar a variável saldo com um valor fictício
// Não deve ser permitido levantar um valor não disponível
// Não deve ser permitido levantar nem depositar um valor negativo

var saldo = Math.floor(Math.random()*10000)

//Nome e Nif
function pedirInfo(){
    nome = prompt("Introduza o seu nome...")
    nif = prompt("Introduza o seu NIF")
    return {nome, nif}
}

//Pedir valores
function pedirValor(){
    return Number(prompt("Insira o valor."))
}

function levantamento(saldo,valor){
    if(valor>saldo){
        alert("Saldo insuficiente!")
        return saldo
    } else {
        return saldo - valor
    }
}

function deposito(saldo,valor){
    if(valor<0){
        alert("Valor inválido!")
        return saldo
    } else {
        return saldo + valor
    }
}

function showSaldo(saldo){
    console.log(`O saldo é: ${saldo}€`)
}

function calculaMedias(valores){
    var total = 0
    for(var v of valores){
        total += v
    }
    if (valores.length===0) return 0
    else return total/valores.length
}

function main(){
    var valores = []
    var continua = true
    var valor = 0

    while(continua){
        showSaldo(saldo)
        var {nome, nif} = pedirInfo()
        var operacao;
        do {
            operacao = Number(prompt(`Escolhe a operação:
            [ 1 ] ---> Levantamento
            [ 2 ] ---> Depósito
            [ 3 ] ---> Sair`));

            if (operacao < 1 || operacao > 3) {
                alert("Por favor escolhe uma operação válida!");
            }
        } while (operacao < 1 || operacao > 3);

        switch (operacao) {
            //levantamento
            case 1:
                valor = pedirValor()
                saldo = levantamento(saldo,valor)
                break;
            //depósito
            case 2:
                valor = pedirValor()
                saldo = deposito(saldo,valor);
                break;
            //sair
            case 3:
                console.log(`Fim de operação...`);
                continua = false
                break;
            default:
                console.log("Não escolheu nenhuma operação válida!");
                break;
            }
            if(operacao===3) break
            valores.push(valor)
            var maior = Math.max(...valores)
            console.log("Maior valor é " + maior)
            var media = calculaMedias(valores)
            console.log("Média é: " + media)

            var continuaraux = Number(prompt("Deseja continuar (1 Continuar e 2 Sair)?"))
            if (continuaraux === 2){
                continua = false
            }

    }
}

main()