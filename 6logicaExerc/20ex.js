// Criar uma função qeu determine o menor dos 3 numeros
const inputNumber = '325'

function select(input) {
  let arr = input.split('')
  let smallNumber = ''

  if(arr[0] < arr[1] && arr[0] < arr[2]) {
    smallNumber = arr[0]
  }
  else if(arr[1] < arr[0] && arr[1] < arr[2]) {
    smallNumber = arr[1]
  }
  else {
    smallNumber = arr[2]
  }  
  return smallNumber
}

console.log(select(inputNumber))