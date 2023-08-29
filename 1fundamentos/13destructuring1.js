const  pessoa = {
  nome: 'Ana',
  idade: 22,
  endereco:{
    logradouro: 'rua ABC',
    numero: 801
  } 
}

const { nome, idade } = pessoa // Está falando para extrair nome e idade da constante pessoa
console.log(nome, idade)

const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)

const { nome: n, idade: i } = pessoa //Eu troquei o nome dessas variáveis
console.log(n, i)

// As próximas duas informações n foram definidas
const {cidade, humor = 'feliz'} = pessoa // cidade aparece undefined, humor se ele n achar nada vai falar feliz
console.log(cidade, humor)
