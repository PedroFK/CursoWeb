// Se os parametros nao forem informados, eles recebaram o valor 1
function soma(a = 1, b = 1, c = 1) {
  return a + b + c
}

console.log(soma()) // Nenhum parametro informado
console.log(soma(2)) // Paramentro A foi informado, os outros dois permanecem 1