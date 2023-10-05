// Dado um texto, escreva uma função que encontre a palavra mais longa presente nele.

const text = 'Julio gosta de acampamentos'

function biggest(x) {
  let data = text.split(/[ ,]+/)
  let bigWord = ''

  for (i = 0; i < data.length; i++) {

    let actualWord = data[i]

    if( actualWord.length > bigWord.length) {
      bigWord = actualWord 
    }
  }
  return bigWord

}

console.log(biggest(text))