const pessoa = {
  nome: 'Rebeca',
  mae: 'Julia',
  idade: 23,
  peso: 71
}

// objeto é um conjunto de chaves e valores
// O code abaixo mostra em forma de array as chaves e valores do obj
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))

// Mostra os pares em formas de array
console.log(Object.entries(pessoa))

// Posso criar um objeto definindo mais propriedades para ele
Object.defineProperty(pessoa, 'dataDenascimento', {
  enumerable: true, // Ele vai aparecer nas listagens acima
  writable: false, // Nao posso definir outro valor em cima dele
  value: '01/01/2019'
})

console.log(Object.keys(pessoa))

// Posso juntar objetos em uma unica constante
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3 }
const obj = Object.assign(dest, o1, o2)

console.log(obj)