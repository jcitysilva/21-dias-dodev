// 1 Criar 2 arrays, um para guardar hotéis, outro para reservas

// CRIAR CLASSE HOTEL
class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id, nome, categoria, endereco, telefone) {
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

// CRIAR CLASSE RESERVA
class Reserva {
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida
    constructor(id , idHotel, responsavel, diaEntrada, diaSaida) {
        this.Id = id
        this.IdHotel = idHotel
        this.Responsavel = responsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

// CRIAR ARRAYS
let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

// 2 Criar funções para registar um hotel e uma reserva

// FUNÇÃO PARA REGISTAR HOTEL

function RegistaHotel() {
    let nome = prompt("Digite o nome do hotel")
    let categoria = parseInt(prompt("Digite a categoria do hotel"))
    let endereco = prompt("Digite o endereço do hotel")
    let telefone = prompt("Digite o telefone do hotel")
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
}

// FUNÇÃO PARA REGISTAR RESERVA

function RegistaReserva() {
    let idHotel
    let existe = false
    do {
        idHotel = parseInt(prompt("Digite o id do hotel"))
        for (let i = 0; i < hoteis.length; i++) {
            if (idHotel == hoteis[i].Id) {
                i = hoteis.length
                existe = true
            } else if (i == hoteis.length - 1) {
                console.log("id de hotel não registado")
            }
        } 
    } while (!existe)

    let nome = prompt("Digite o nome do responsável")
    let diaEntrada = parseInt(prompt("Digite o dia de entrada"))
    let diaSaida
    do {
        diaSaida = parseInt(prompt("Digite o dia de saída"))
        if (diaSaida < diaEntrada) [
            console.log("O dia de saída deve ser maior do que o dia de entrada")
        ]
    } while (diaSaida <diaEntrada)

    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}

// 3 Criar uma função que recebe como parâmetro o id do hotel e exibe na tela todas as reservas nele com as seguintes infos:
// --> Nome do hotel;
// --> Nome do responsável da reserva;
// --> Dia de entrada;
// --> Dia de saída.

// FUNÇÃO PARA PROCURAR RESERVAS PELO HOTEL
function ProcurarReservasPeloHotel(idHotel) {
    reservas.forEach(reserva => {
        if (idHotel == reserva.IdHotel) {
            let i = idHotel -1
            console.log("hotel:", hoteis[i].Nome)
            console.log("responsável:", reserva.Responsavel)
            console.log("Dia de entrada:", reserva.DiaEntrada)
            console.log("Dia de saída:", reserva.DiaSaida)
        }
    })
}

// 4 Função que recebe como parâmetro o id de reserva e exibe na console:
// --> Nome do hotel;
// --> Endereço
// --> Dia de entrada;
// --> Dia de saída.

// FUNÇÃO PARA PROCURAR HOTEL PELA RESERVA
function ProcurarHotelPelaReserva(idReserva) {
    let idHotel = reservas[idReserva - 1].IdHotel
    console.log("hotel:", hoteis[idHotel -1 ].Nome)
    console.log("endereço:", hoteis[idHotel - 1].Endereco)
    console.log("dia de entrada:", reservas[idReserva - 1].DiaEntrada)
    console.log("dia de saída:", reservas[idReserva - 1].DiaSaida)
}

// 5 Cria uma função recebe nome de pessoa e exibe todas as suas reservas
function ProcurarReservaPeloNome(nome) {
    for (let i = 0; i < reservas.length; i++) {
        if (nome == reservas[i].Responsavel) {
            console.log("id da Reserva: " + reservas[i].Id)
            console.log("hotel: " + hoteis[(reservas[i].IdHotel) - 1].Nome)
        }
    }
}

// 6 Cria uma função que recebe uma categoria e retorna um array com todos os hotéis nessa categoria

// FUNÇÃO PARA PROCURAR HOTÉIS PELA CATEGORIA
function ProcurarHotelPelaCategoria(categoria) {
    let hoteisProcurados = []
    for (let i = 0; i < hoteis.length; i++) {
        if (categoria == hoteis[i].Categoria) {
            hoteisProcurados.push(hoteis[i].Nome)
        }
    }
    return hoteisProcurados
}

// 7 Cria função que recebe o id de um hotel e um telefone como parâmetro, a função deve atualizar o telefone com o número recebido

// FUNÇÃO PARA ATUALIZAR TELEFONE DO HOTEL
function AtualizarTelefone(idHotel, telefone) {
    hoteis[idHotel - 1].Telefone = telefone
    console.log("Número de telefone actualizado!")
}

// 8 Cria um fluxo de funcionamento para o algoritmo, o utilizador escolhe quando encerrar o programa

// Regra:
// --> O id não pode ser igual a nenhum outro já existente;
// --> O dia de entrada não pode ser maior que o dia de saída;
// --> No registo de uma reserva o id do hotel deve ser válido, ou seja, não deve permitir o registo de um hotel que não esteja no sistema;

// FLUXO DE FUNCIONAMENTO
let continuar = true
do {
    let opcao = prompt("escolhe uma opção: \n1 - Registar hotel \n2 - Registar reserva \n3 - Procurar reserva pelo hotel" +
        "\n4 - Procurar hotel pela reserva \n5 - Procurar reserva pelo responsável \n6 - Procurar hotéis por categoria" +
        "\n7 - Atualizar telefone de um hotel \n8 - encerrar o programa")

    switch (opcao) {
        case "1":
            RegistaHotel()
            break;
        case "2":
            RegistaReserva()
            break;
        case "3":
            ProcurarReservasPeloHotel(prompt("Digite o id do hotel"))
            break;
        case "4":
            ProcurarHotelPelaReserva(prompt("Digite o id da reserva"))
            break;
        case "5":
            ProcurarReservaPeloNome(prompt("Digite o nome do responsável pela reserva"))
            break;
        case "6":
            let hoteisProcurados = ProcurarHotelPelaCategoria(parseInt(prompt("Digite a categoria que deseja procurar")))
            console.log(hoteisProcurados)
            break;
        case "7":
            let idHotel = parseInt(prompt("Digite o id do hotel que deseja atualizar"))
            let telefone = prompt("digite o novo telefone")
            AtualizarTelefone(idHotel, telefone)
            break
        case "8":
            console.log("Programa encerrado")
            continuar = false
            break;
        default:
            console.log("opção inválida")
            break;
    }
} while (continuar)
