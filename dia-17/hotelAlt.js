// CRIAR CLASSE HOTEL
class Hotel {
    constructor(id, nome, categoria, endereco, telefone) {
        this.Id = id;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}

// CRIAR CLASSE RESERVA
class Reserva {
    constructor(id, idHotel, responsavel, diaEntrada, diaSaida) {
        this.Id = id;
        this.IdHotel = idHotel;
        this.Responsavel = responsavel;
        this.DiaEntrada = diaEntrada;
        this.DiaSaida = diaSaida;
    }
}

// ARRAYS GLOBAIS
let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;

// FUNÇÃO PARA REGISTAR HOTEL
function RegistaHotel() {
    let nome = prompt("Digite o nome do hotel");
    let categoria = parseInt(prompt("Digite a categoria do hotel"));
    let endereco = prompt("Digite o endereço do hotel");
    let telefone = prompt("Digite o telefone do hotel");

    if (isNaN(categoria)) {
        console.log("Categoria inválida, deve ser um número.");
        return;
    }

    // Cria uma nova instância de Hotel
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone);
    idHotel++;
    // Adiciona o hotel ao array de hotéis
    hoteis.push(hotel);
}

// Função para Registrar Reserva
function RegistaReserva() {
    let idHotel;
    let existe = false;

    // Verifica se o ID do hotel existe
    do {
        idHotel = parseInt(prompt("Digite o id do hotel"));
        for (let i = 0; i < hoteis.length; i++) {
            if (idHotel === hoteis[i].Id) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            console.log("ID de hotel não registrado");
        }
    } while (!existe);

    let nome = prompt("Digite o nome do responsável");
    let diaEntrada = parseInt(prompt("Digite o dia de entrada"));
    let diaSaida;

    // Verifica se o dia de saída é maior que o dia de entrada
    do {
        diaSaida = parseInt(prompt("Digite o dia de saída"));
        if (diaSaida < diaEntrada) {
            console.log("O dia de saída deve ser maior do que o dia de entrada");
        }
    } while (diaSaida < diaEntrada);

    // Cria uma nova instância de Reserva
    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida);
    idReserva++;

    // Adiciona a reserva ao array de reservas
    reservas.push(reserva);
}

// Procurar Reservas pelo Hotel
function ProcurarReservasPeloHotel(idHotel) {
    reservas.forEach(reserva => {
        if (idHotel == reserva.IdHotel) {
            let hotel = hoteis.find(h => h.Id === idHotel);
            if (hotel) {
                console.log("Hotel:", hotel.Nome);
                console.log("Responsável:", reserva.Responsavel);
                console.log("Dia de entrada:", reserva.DiaEntrada);
                console.log("Dia de saída:", reserva.DiaSaida);
            }
        }
    });
}

// Procurar Hotel pela Reserva
function ProcurarHotelPelaReserva(idReserva) {
    let reserva = reservas.find(r => r.Id === idReserva);
    if (reserva) {
        let hotel = hoteis.find(h => h.Id === reserva.IdHotel);
        if (hotel) {
            console.log("Hotel:", hotel.Nome);
            console.log("Endereço:", hotel.Endereco);
            console.log("Dia de entrada:", reserva.DiaEntrada);
            console.log("Dia de saída:", reserva.DiaSaida);
        }
    }
}

// Procurar Reserva pelo Nome
function ProcurarReservaPeloNome(nome) {
    reservas.forEach(reserva => {
        if (nome === reserva.Responsavel) {
            let hotel = hoteis.find(h => h.Id === reserva.IdHotel);
            if (hotel) {
                console.log("ID da Reserva:", reserva.Id);
                console.log("Hotel:", hotel.Nome);
            }
        }
    });
}

// Funções de Atualização
// --> Procurar Hotel pela Categoria
function ProcurarHotelPelaCategoria(categoria) {
    categoria = parseInt(categoria);
    if (isNaN(categoria)) {
        console.log("Categoria inválida, deve ser um número.");
        return [];
    }
    return hoteis.filter(hotel => hotel.Categoria === categoria).map(hotel => hotel.Nome);
}

// --> Atualizar Telefone do Hotel
function AtualizarTelefone(idHotel, telefone) {
    let hotel = hoteis.find(h => h.Id === idHotel);
    if (hotel) {
        hotel.Telefone = telefone;
        console.log("Número de telefone atualizado!");
    }
}

// Fluxo de Funcionamento do Programa
let continuar = true;
do {
    let opcao = prompt("Escolha uma opção: \n1 - Registar hotel \n2 - Registar reserva \n3 - Procurar reserva pelo hotel" +
        "\n4 - Procurar hotel pela reserva \n5 - Procurar reserva pelo responsável \n6 - Procurar hotéis por categoria" +
        "\n7 - Atualizar telefone de um hotel \n8 - Encerrar o programa \n9 - Testagem de código");

    switch (opcao) {
        case "1":
            RegistaHotel();
            break;
        case "2":
            RegistaReserva();
            break;
        case "3":
            ProcurarReservasPeloHotel(parseInt(prompt("Digite o id do hotel")));
            break;
        case "4":
            ProcurarHotelPelaReserva(parseInt(prompt("Digite o id da reserva")));
            break;
        case "5":
            ProcurarReservaPeloNome(prompt("Digite o nome do responsável pela reserva"));
            break;
        case "6":
            let hoteisProcurados = ProcurarHotelPelaCategoria(parseInt(prompt("Digite a categoria que deseja procurar")));
            console.log(hoteisProcurados);
            break;
        case "7":
            let idHotel = parseInt(prompt("Digite o id do hotel que deseja atualizar"));
            let telefone = prompt("Digite o novo telefone");
            AtualizarTelefone(idHotel, telefone);
            break;
        case "8":
            console.log("Programa encerrado");
            continuar = false;
            break;
        case "9":
            // TESTE
            RegistaHotel();
            let categoria = prompt("Digite a categoria para procurar hotéis");
            let hoteisTeste = ProcurarHotelPelaCategoria(categoria);
            console.log(hoteisTeste);
            break;
        default:
            console.log("Opção inválida");
            break;
    }
} while (continuar);