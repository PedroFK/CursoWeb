
//Objeto é um conjunto de pares, chave e valor.

const prod1 = {} //par de chaves define um objeto vazio

prod1.nome = 'Iphone 14' // atribuindo valores de forma dinâmica. Evitar atributos com espaço
prod1.preco = 5000
prod1['desconto'] = 0.3 // outra forma de adicionar

console.log(prod1)


// Podemos já atribuir valores na hora da criaçao o objeto
const prod2 = { 
  nome: 'Iphone 13',
  preco: 3000
}

console.log(prod2)
