// Objeto é um conjunto de chave e valor, par e valor, nome e valor

const obj1 = {}
obj1.nome = 'Bola' //podemos definir nomes para a variável mesmo depois de fechar as chaves
// obj1['nome'] = 'Bola' - podemos escrever também dessa forma

console.log(obj1)
console.log(obj1.nome)

function Obj(nome) {
  this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
