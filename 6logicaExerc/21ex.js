// Receber um vetor e separar em numeros pares e impares
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function splitt(numbers) {
  let pair = []
  let odd = []

  for (i = 0; i < numbers.length; i++) {
    if(numbers[i]%2 == 0) {
      pair.push(numbers[i])
    }
    else {odd.push(numbers[i])}
  }
  console.log(`Os valores pares são: ${pair} e os impares são: ${odd}`)
}

splitt(arr)