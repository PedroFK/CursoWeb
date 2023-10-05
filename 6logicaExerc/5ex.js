// Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente. 
// Faça sua função na mão, não invoque nenhum método de sorting. Dica: pesquise sobre bubble sort.



function bubbleSort(num) {
  for (let l = num.length; l - 1; l--) {
    for (let i = 0; i < num.length - 1; i++) {
      if( num[i] > num[i+1] ) {
        let max = num[i]
        num[i] = num[i+1]
        num [i+1] = max
      }
    }
  }
  return num
}

let array = [2, 12, 9, 1, 7, 3, 15, 24, 14]
let resultado = bubbleSort(array)
console.log(resultado)