// 1 // Cria uma classe para representar o teu computador
// 2 // Implementa um método nessa classe para exibir as informações na console

class Computador {
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
        this.Tipo = tipo;
        this.Processador = processador;
        this.Video = video;
        this.Armazenamento = armazenamento;
        this.MemoriaRam = memoriaRam;
        this.Ssd = ssd;

    }

    ExibirInformacoes() {
        console.log("--> Informações do Computador <--");
        console.log(`Tipo: ${this.Tipo}`);
        console.log(`Processador: ${this.Processador}`);
        console.log(`Vídeo: ${this.Video}`);
        console.log(`Armazenamento: ${this.Armazenamento} GB`);
        console.log(`Memória Ram: ${this.MemoriaRam} GB`);
        console.log(`SSD: ${this.Ssd}`);
    }
}

// Exemplo de uso
const meuComputador = new Computador("Notebook", "Ryzen 7", "Dedicado", 1000, 16, true);
meuComputador.ExibirInformacoes();