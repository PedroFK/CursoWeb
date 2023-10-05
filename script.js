let numeros = []

let quest = prompt('Quantos numeros voce deseja inserir no array?')
let index = parseInt(quest)

for (i = 0; i < index; i++) {
  let msg = prompt('Digite um número')
  numeros.push(Number(msg))
}

numeros.reverse()

console.log(numeros)