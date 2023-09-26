const pai = {nome: 'Pedro', corCabelo: 'Loiro'}

const filha1 = Object.create(pai) // cria uum novo objeto tendo como prototipo o objeto pai
filha1.nome = 'Ágata'
console.log(filha1.corCabelo) // Eu nao defini esse atributo para filha, mas o pai ja tem

const filha2 = Object.create(pai, {
  nome: {
  value: 'Joelma',
  writable: false,
  enumerable: true
  }
})

console.log(filha2.nome)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
  filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}
