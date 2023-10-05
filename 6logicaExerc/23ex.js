// Procurar uma palavra em um array e se achar, devo mandar msg para o cliente
const arrFrase = ["banana", "abacaxi", "uva", "limão", "maçã", "cenoura"]
let word = "lima"

function find(word, arr) {
  for (i = 0; i < arr.length; i++) {
    if(word == arr[i]) {
      return console.log(`Encontrei a palavra ${word}`)
    }
    else { return console.log(`Não encontrei a palavra ${word}`)
    }
  }
  console.log()
}
find(word, arrFrase)