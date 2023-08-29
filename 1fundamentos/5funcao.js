console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

// quase tudo é função

// A e B são as informações de entrada
// as chave representam o bloco da função
function imprimirSoma (a, b) {
  console.log(a + b)
} 

imprimirSoma(2, 3) // A e B foram definidos
imprimirSoma(2) // apenas A foi definido, o B será undefined - log será 'not a number' 
imprimirSoma(2, 10, 3, 7, 8) // 2 e 10 serão considerados e o resto será ignorado

//funcao com retorno
function soma(a, b = 1) {
  return a + b
}

console.log(soma(2))
