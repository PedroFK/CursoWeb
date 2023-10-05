// Manipulação de Strings: Escreva uma função que receba uma string e retorne a mesma string.
// Mas com a primeira letra de cada palavra em maiúsculas.

const frase = 'minha namora se chama, gabriela'

let newArr = frase.split(/[ ,]+/)

let correct = []
//tenho que usar for, e eusa charAt e upperCase juntos
function upper(arr) {
  
  
  let newArr = frase.split(/[ ,]+/)

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i]
    let word2 = word.charAt(0).toUpperCase() + word.slice(1)
    correct.push(word2)
  } 
}

upper(newArr)
console.log(correct)
