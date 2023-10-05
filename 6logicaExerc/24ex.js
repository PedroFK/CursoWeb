// Vou fazer novamente uma função que verifica se o numero é par ou impar

let number = '13'
// Quando vem de um input tenho que fazer um tratamento para transformar em número

function category(nbr) {
  let intNumber = parseInt(nbr)
  if(intNumber % 2 == 0) {
    return 'Par'
  }
  else {
    return 'Impar'
  }
}

let res = category(number)

console.log(`O seu número é: ${res}`)