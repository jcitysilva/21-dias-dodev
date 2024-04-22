// Algoritmo que recebe a nota e sexo do aluno, usuando while
// Pergunta ao utilizador se quer registar outra nota
// No final deve aparecer no console:
// - média geral dos alunos;
// - quantos homens enviaram as notas;
// - quantas mulheres tiveram nota acima de 7;
// - qual a maior nota entre os homens.

let media = 0;
let totalNotas = 0;
let h = 0;
// let m = 0;
let mN7 = 0;
let mNh = 0;
let contador = 1;

while (true) { //ciclo infinito
    nota = parseInt(prompt(`Digite a nota do ${contador}º aluno`))
    sexo = prompt("digite o sexo do aluno (M/F)").toLowerCase()

    if (sexo === "m") {
        if (nota > mNh) {
            mNh = nota
        }
        h++
    }

    if (sexo === "f" && nota > 7) {
        mN7++
    }

    if (sexo === "f" && nota >=7 ){
        console.log("Não entrou nas contagens")
    }

    if(sexo !== "m" && sexo !== "f"){
        console.log("Fim de ciclo")
        break //esta instrução quebra o ciclo (caso de feixo)
    }

    totalNotas += nota // += e não +- acho eu, += soma à variável media o valor da variável nota é igual a media = media + nota, +- penso que não existe
    contador++

}

    media = totalNotas / contador

    console.log(`A média geral dos dos alunos foi: ${media}`)
    console.log(`Homens que enviaram as notas: ${h}`)
    console.log(`Mulheres com nota acima de 7: ${mN7}`)
    console.log(`A maior nota entre os homens: ${mNh}`)

