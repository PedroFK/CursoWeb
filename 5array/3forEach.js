// forEach é utilizado para percorrer um array

const aprovados = ['Pedro', 'João', 'Henrique', 'Arthur', 'Marina', 'Pietra']

// Vou criar uma function de call back que será chamada para cada elemento do array
aprovados.forEach(function(nome, indice) { // Sempre a primeira variavel, no caso "nome", será o nome e a segunda var será o indice
  console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
// Segunda forma de fazer o forEach
