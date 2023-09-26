// Funcao factory retorna um objeto, ela fabrica uma instancia de um objeto

// Factory Simples
function criarPessoa() {
  return {
    nome: 'Gabriela',
    idade: 25
  }
}

console.log(criarPessoa())

//Factory com valores nao definidos
function criarProduto(tag, preco) {
  desconto = 0.1
  return {
    tag,
    preco,
    desconto: 0.1,
    valor: preco - preco * desconto
  }
}


console.log(criarProduto('celular', 2039.99))
console.log(criarProduto('notebook', 5300.99))