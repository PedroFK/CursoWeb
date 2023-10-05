// Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.

//const arr = [23, 17]
//const correto = arr.sort()

function ordenar(arr) {
  if(arr[0] > arr[1]) {
    let maior = arr[0]
    arr[0] = arr[1]
    arr [1] = maior
  }
  return arr
}

let numeros = [23, 17]
let numerosCorretos = ordenar(numeros)

console.log(numerosCorretos)