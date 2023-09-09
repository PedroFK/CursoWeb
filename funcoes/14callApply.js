// Mais duas formas de chamar função

function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
  nome: 'Iphone 13',
  preco: 4199.99,
  desconto: 0.1,
  getPreco
}

console.log(getPreco())
//Deu que n é um numero pois preco e desconto nao estão definidos dentro da funcao
console.log(produto.getPreco())

const carro = { preco: 35000, desconto: 0.05}

// Chama a função e identifica o contexto, no caso é objeto
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Utilizando Call
// Posso alterar os parametros da funcao getPreco na hora da chamada
console.log(getPreco.call(carro, 0.15, '$'))
// Imposto e tipo da moeda foram alterados na chamada da funcao

//Utilizando Apply
// Devo passar os parametros dentro de um array
console.log(getPreco.apply(carro, [0.2, 'EUR']))