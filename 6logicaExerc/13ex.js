// Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido.
// Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.

const inputt = '12345'

function treatment(x) {
  let number = x
  let newNumber = ''
  
  for (i = number.length; i > -1; i--) {
    let nowNumber = number.charAt(i)
    newNumber = newNumber.concat('', nowNumber)
  }
  console.log(newNumber)
}

// Minha ideia é usar replace e posicionamento at



treatment(inputt)