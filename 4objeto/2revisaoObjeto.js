// Objeto é uma coleção dinâmica de pares: chave/valor

// Objeto simples 
const produto = new Object
produto.nome = 'Teclado'
produto.preco = 351

console.log(produto)
delete produto.preco


// Objeto mais complexo
const carro = {
  modelo: 'Gol g15',
  valor: 65000,
  proprietario: {
    nome: 'Pedro',
    sangue: 'A+',
    idade: 20
  },

  calcularValorSeguro: function() {
      // ...
  }
}

// Adicionando um atributo
carro.proprietario.altura = 1.8
//remover algum objeto
delete carro.proprietario.sangue
console.log(carro)