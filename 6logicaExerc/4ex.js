// Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Não use o método sort.

function organizar(arr) {
  if(arr[0] > arr[1]) {
    let maior = arr[0]
    arr[0] = arr[1]
    arr[1] = maior
  }

  if(arr[1] > arr[2]) {
    let maior = arr[1]
    arr[1] = arr[2]
    arr[2] = maior
  }

  if(arr[0] > arr[1]) {
    let maior = arr[0]
    arr[0] = arr[1]
    arr[1] = maior
  }

  return arr
}

let numeros = [33, 11, 22]
let resultado = organizar(numeros)

console.log(resultado)