// armazenanado uma funcao em uma variável
// essa function nao tem nome, ela é anonima
const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2,35)

// Armazenando uma function arrow em uma variável
// é uma function escrita de forma reduzida, o '=>' substitui o nome
const soma = (a, b) => {
  return a + b
}
console.log(soma(2,18))

// Um recurso do arrow function é retorno implícito (sem precisar escrever return e eliminando as chaves.
const subtracao = (a, b) => a - b
console.log(subtracao(4, 5))
