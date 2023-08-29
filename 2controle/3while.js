//Apropriado para uma quantidade indeterminada de repetições
function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0

//enquanto a expressão for verdadeira, continue executando
while (opcao != -1) { 
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}`)
//console.log('Opção escolhida foi:', opcao) - pode ser outra forma de chamar
}

console.log('Até a próxima!')