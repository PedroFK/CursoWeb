// algoritmo que lê 3 notas e retorna a média ponderada. peso das notas: 2, 3, 5

const inp1 = 5
const inp2 = 6
const inp3 = 4

function average(n1, n2, n3) {
  let finalGrade = (n1*0.2 + n2*0.3 + n3*0.5)
  return finalGrade
}

console.log(average(inp1, inp2, inp3))