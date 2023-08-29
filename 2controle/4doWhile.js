// DO WHILE é uma estrutura pouco usada

function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = -1


do { // primeira repeticao sera feita independente do while
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}`)
//console.log('Opção escolhida foi:', opcao) - pode ser outra forma de chamar
} while (opcao != -1)

console.log('Até a próxima!')