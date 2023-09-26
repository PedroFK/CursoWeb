//JS é muito dinamico, muito livre. tem hora que nao queremos essa propriedade.
// formas de limitar o JavaScript

// Limitar numero de atributos, nao posso adicionar novos atributos. Apenas posso alterar atributos existentes e excluir
const produto= Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

// 
const pessoa = { nome: 'Gabriela', idade: 26}
Object.seal(pessoa)
// Não é possível adicionar nem excluir atributos, apenas alterar.

//freeze: é um seal + valores que nao podem ser alterados
Object.freeze(pessoa)