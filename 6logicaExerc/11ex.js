// Seu objetivo é criar uma função chamada fibonacci, que aceite um número inteiro positivo n como argumento
// Retorne o n-ésimo número na sequência de Fibonacci.

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Exemplo de uso da função para obter o 10º número de Fibonacci
var decimoFibonacci = fibonacci(10);
console.log("O 10º número de Fibonacci é: " + decimoFibonacci);