// CLASS VS FACTORY

// Classe é uma forma de construir funcao em JS
// Classe é uma funcao escrita de forma diferente

class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('João')
p1.falar()


// Função Factory
const criarPessoa = nome => {
  return {
    falar: () => console.log(`meu nome é ${nome}`)
  }
}

const p2 = criarPessoa('Pedro')
p2.falar()