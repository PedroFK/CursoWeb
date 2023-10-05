// Procurar uma palavra em um array e se achar, devo mandar msg para o cliente
const arrFrase = ["banana", "abacaxi", "uva", "limão", "maçã", "cenoura"]
let word = "abacaaxi"

function find(word, arr) {
  let check = 'nao'
  for (i = 0; i < arr.length; i++) {
    if(word === arr[i]) {
      check = 'achou'
      break
    }
  }
  
  if(check === 'achou') {
    console.log(`Encontrei a palavra ${word}`)
  }
  else {
    console.log(`Não encontrei a palavra ${word}`)
  }
}
find(word, arrFrase)