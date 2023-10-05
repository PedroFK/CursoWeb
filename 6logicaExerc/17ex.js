// Código para inverter inputNumber

let inputNumber = '123'

function change(number) {
  let teste = number
  let newArr = []
  

  for (i = teste.length - 1; i >= 0; i--) {
    newArr.push(teste[i])
  }

  let newNumber = newArr.join('')
  console.log(newNumber)
}

change(inputNumber)