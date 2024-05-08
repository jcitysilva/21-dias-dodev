// 1 Criar uma classe carro com as seguintes propriedades:
// --> Nome - Qual a equipa do carro: Ferrari, Mercedes, McLaren, etc
// --> Potencia - número de cavalos de potência do carro
// --> VelocidadeMaxima - maior velocidade que pode alcançar
// --> Aceleracao - tempo em segundos dos 0 aos 100 km/h

// 2 Adiciona na classe carro um método que recebe como parâmetro um distância (em m) e calcula o tempo (em s) para percorrer essa distância
// resultado = distancia / (VelocidadeMaxima / Aceleracao)
// A função deve retornar esse resultado

class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }

    calcularTempoMedio(distancia) {
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

// 3 Criar classe corrida com as propriedades:
// --> Nome - nome do local da corrida;
// --> Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
// --> Distancia - o total em metros da corrida
// --> Participantes - um array de objetos da classe Carro
// --> Vencedor - qual a equipa que ganhou a corrida

// 4 Adicionar na classe Corrida um método que verifica o carro que completou com menor tempo
// Utilizar o método criado na classe carro
// Guardar o nome do carro que fez o menor tempo na propriedade Vencedor

// 5 Adicionar na classe Corrida um método que exibe o vencedor da corrida

class Corrida {
    Nome
    Tipo
    Distancia
    Vencedor
    Participantes

    constructor(nome, tipo, distancia) {
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Vencedor = ""
        this.Participantes = []
    }

    DefinirVencedor() {
        let menorTempo = this.Participantes[0].calcularTempoMedio(this.Distancia)
        let vencedor = this.Participantes[0]

        for (let index = 1; index < this.Participantes.length; index++) {
            let tempo = this.Participantes[index].calcularTempoMedio(this.Distancia)
            if (tempo < menorTempo) {
                menorTempo = tempo
                vencedor = this.Participantes[index]
            }
        }

        return this.Vencedor = vencedor
    }

    ExibirVencedor() {
        alert("O vencedor é: " + this.Vencedor.Nome)
    }
}

// 6 Criar um objeto da classe Corrida e preencher a propriedade Participantes com alguns objetos da classe Carro

// 7 Chamar o método para verificar quem fez o menor tempo e exibir o vencedor

let corrida = new Corrida ("Monza", "Fórmula 1", 60000)
corrida.Participantes[0] = new Carro("Kicks", 120, 160, 5)
corrida.Participantes[1] = new Carro("Marea", 210, 200, 9)
corrida.Participantes[2] = new Carro("Peugeot 206", 300, 220, 10)

corrida.DefinirVencedor()
corrida.ExibirVencedor()