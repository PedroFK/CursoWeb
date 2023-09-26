// JSON é um formato de dados, ele não carrega funções.
// JSON serve para interoperabilidade entresistemas (leitura universal/genérica)

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))
// Ele gera o objeto em forma de texto e a funcao não é lida por JSON, pois nao é um formato de dados

console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
// criei um objeto com JSON