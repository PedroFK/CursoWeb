// A ideia do map é mapear um array e fazer uma transformação criando um novo array de tamanho igual
// MAP é um for com propósito

const num = [1, 2, 3, 4, 5, 6]

let numDobro = num.map(function(e) {
  return e * 2 // Defini que a transformacao será elemento inicial x 2
})

console.log(numDobro)

const soma10 = e => e + 10
const triplo = e => e * 3

// Utilizando duas maps 
numDobro = num.map(triplo).map(soma10)
console.log(numDobro)