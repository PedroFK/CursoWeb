// crie uma função em javascript que Conte a quantidade de palavras em uma string

const userInput = 'minha namora se chama, gabriela'

function meter(sentence) {
  let convert = userInput.split(/[ ,]+/)
  let quant = convert.length
  return quant
}

console.log(meter(userInput))