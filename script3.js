// Vamos ter uma frase e cliente infor por meio de prompt qual palava ele quer substituir por qual palavra.

const sentense = 'O investimento em startup está diminuindo'

function replacement(string) {
  let imputWhere = prompt('Escreva uma palavra da seguinte frase: O investimento em startup está diminuindo')
  let imputNewWord = prompt('Escolha uma palavra para substituir a escolhida anteriormente')
  let newSentense = string.split(/[ ,]+/)
  
  for (i = 0; i < newSentense.length; i++) {
    if(imputWhere.toLowerCase() == newSentense[i]) {
      newSentense[i] = imputNewWord
    }
  }

  let finalSentense = newSentense.join(' ')
  console.log(finalSentense)
}

replacement(sentense,)