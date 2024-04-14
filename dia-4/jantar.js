/*
1.1. Crie um sistema que pergunte ao utilizador:
- Se tem fome?
- Se tem dinheiro?
- Se o restaurante está aberto?

1.2. Se estiver sem fome ou sem dinheiro: console "Hoje a janta será em casa"

1.3. Se estiver com fome e tiver dinheiro mas o restaurante estiver fechado: console "Peça um delivery!"

1.4. Se estiver com fome, tiver dinheiro e o restaurante estiver aberto. Console: "Hoje o jantar será no seu restaurante preferido!"
*/


// Solicitar informação ao utilizador para atribuir valores às variáveis
let fome = prompt("Tens fome? (sim / nao)")
let dinheiro = prompt("Tens dinheiro? (sim / nao)")
let restaurante = prompt("O restaurante está aberto? (sim / nao)")

if (fome === "nao" || dinheiro === "nao")
{
    console.log("Hoje a janta será em casa!")
}
else if (fome === "sim" && dinheiro === "sim" && restaurante === "nao")
{
    console.log("Peça um delivery!")
}
else if (fome === "sim" && dinheiro === "sim" && restaurante === "sim")
{
    console.log("Hoje o jantar será no seu restaurante preferido!")
}

// ou terminar com este
// else
// {
//     console.log("Hoje o jantar será no seu restaurante preferido!")
// }