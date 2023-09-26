// É uma forma de escrever uma function de forma reduzida

let dobro = function (a) {
  return 2 * a
}

// A função arrow sempre será anônima, para chamar depois precisarei de atribuila a uma variável ou constante
dobro = (a) => {
  return 2 * a
}

// Seu eu faço sem chaves, terei um retono implicito e de uma unica linha
dobro = a => 2 * a

console.log(dobro(Math.PI))
console.log(dobro(2))