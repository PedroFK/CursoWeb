// É uma função que será chamada novamente

const fabricantes = ['Audi', 'Porsche', 'Ferrari']

function print(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(print)

