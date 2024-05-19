// 1 Criar uma classe Livro com as propriedades:
// --> Título
// --> Autor
// --> Editora
// --> Ano de publicação
// --> Disponibilidade

// 2 Cria um método construtor para a classe Livro que recebe como parâmetro as propriedades em (1) exepto disponibilidade que deve ser true por padrão ao criar o objeto

class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade = true
    constructor(titulo, autor, editora, anoDePublicacao) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoDePublicacao = anoDePublicacao
    }
}

// 3 Cria alguns objetos da classe Livro e adiciona-os num array

let livros = []
livros.push(new Livro("livro1", "marcos", "editora A", 2001))
livros.push(new Livro("livro2", "marcos", "editora F", 1997))
livros.push(new Livro("livro3", "Carlos", "editora F", 2010))
livros.push(new Livro("livro4", "João", "editora A", 2005))
livros.push(new Livro("livro5", "Fábio", "editora C", 2020))

// 4 Criar classe Biblioteca
// --> Nome
// --> Endereco
// --> Telefone
// --> Acervo de livros

// 5 Criar método construtor para a classe Biblioteca que recebe como parâmetro informações que serão atribuídas às propriedades, a propriedade Acervo de Livros deve receber um array

// 6 Adiciona na classe Biblioteca um método para procurar um livro específico, deve passar como parâmetro o nome do livro e exibir na console todas as informações do mesmo

// 7 Adicionar na classe Biblioteca um método de empréstimo do livro, deve ser passado como parâmetro o nome do livro, verificar disponibilidade
// Se disponível retornar true e troca o valor da propriedade do livro para false, se não estiver disponível retornar false

// 8 Adicionar na classe Biblioteca um método de devolução de um livro, deve ser passado como parâmetro o nome do livro
// Então trocar o valor de disponibilidade para true

class Biblioteca {
    Nome
    Telefone
    Endereco
    AcervoLivros = []
    constructor(nome, telefone, endereco, acervo) {
        this.Nome = nome
        this.Telefone = telefone
        this.Endereco = endereco
        this.AcervoLivros = acervo || []
    }

    ProcurarLivroPeloTitulo(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                console.log(livro)
            }
        })
    }

    EmprestarLivro(titulo) {
        let emprestado = false
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                if (livro.Disponibilidade == true) {
                    livro.Disponibilidade = false
                    emprestado = true
                }
            }
        })
        if (emprestado) {
            return true
        } else {
            return false
        }
    }

    DevolverLivro(titulo) {
        livros.forEach(livro => {
            if (livro.Titulo == titulo) {
                livro.Disponibilidade = true
                console.log("Livro devolvido")
            }
        })
    }

}

// 9 Criar um objeto da classe Biblioteca e chamar os seus métodos

let biblioteca = new Biblioteca("Biblioteca DoDev", "123456", "Rua 2")

biblioteca.ProcurarLivroPeloTitulo("livro2")
biblioteca.EmprestarLivro("livro1")
biblioteca.DevolverLivro("livro1")
