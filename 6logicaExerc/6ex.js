// Crie uma função que recebe um vetor e um número.
// Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou  último índice em que o número aparece (como nos métodos indexOf e lastIndexOf).

// Valores recebidos:
let meuVetor = "1, 2, 3, 4, 3, 5, 3" ;
let numeroProcurado = 3;

let newVetor = meuVetor.split(", ")
let contador = []

for(let n = 0; n < newVetor.length; n++) {
  if(numeroProcurado == newVetor[n]) {
    contador.push(n+1)
  }
}

console.log(`O resultado contador deu ${contador}`)