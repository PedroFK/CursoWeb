// Estou criando uma const e atribuindo um objeto a ela
const pessoa = { nome: 'Pedro' }
//altero o dado que estava salvo no local que era Pedro
pessoa.nome = 'Gabriela'
console.log(pessoa)
// Vai aparecer Gab

// Se tentar criar um novo local e trocar o ojjeto, nao vai funcionar
pessoa = { nome: 'Thiago' }

Object.freeze(pessoa)
// Dessa forma nada pode ser alterado

// Podemos criar const dessa forma já
const pessoaConstante = Object.freeze({ nome: 'Pedro' })