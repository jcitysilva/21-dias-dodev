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

// 4 Função que recebe como parâmetro o id de reserva e exibe na console:
// --> Nome do hotel;
// --> Endereço
// --> Dia de entrada;
// --> Dia de saída.

// 5 Cria uma função recebe nome de pessoa e exibe todas as suas reservas

// 6 Cria uma função que recebe uma categoria e retorna um array com todos os hotéis nessa categoria

// 7 Cria função que recebe o id de um hotel e um telefone como parâmetro, a função deve atualizar o telefone com o número recebido

// 8 Cria um fluxo de funcionamento para o algoritmo, o utilizador escolhe quando encerrar o programa

// Regra:
// --> O id não pode ser igual a nenhum outro já existente;
// --> O dia de entrada não pode ser maior que o dia de saída;
// --> No registo de uma reserva o id do hotel deve ser válido, ou seja, não deve permitir o registo de um hotel que não esteja no sistema;

