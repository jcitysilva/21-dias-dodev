// 1 - Criar 2 arrays: arrayA e arrayB
// Preencher com 10 números cada

let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14]
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21]

// 2 - Função que recebe 2 arrays como parâmetro
// Retorna um array que contem apenas os números em comum

// 3 - Se um número se repetir apenas no mesmo array, ele não deve ser adicionado em comum

// 4 - No array de saída não deve ter números repetidos

function NumerosEmComum(arrayUm, arrayDois) {
    let resultado = []
    let contadorResultado = 0

    for (let i = 0; i < arrayUm.length; i++) {
        for (let j = 0; j < arrayDois.length; j++) {
            if(arrayUm[i] == arrayDois[j]) {
                resultado[contadorResultado] = arrayUm[i]
                contadorResultado++
                j = arrayDois.length
            }
        }
    }

    return resultado
}

console.log(NumerosEmComum(arrayA, arrayB))