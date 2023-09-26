// Herança é um princípio da OO que permite o filho herdar algumas características do objeto pai
// Quando procuramos um objeto que o filho nao tem, vamos para o escopo do pai
// Herança permite reutilizarmos código

const ferrari = {
  modelo: 'f40',
  velMax: 324
}

const volvo = {
  modelo: 'xc60',
  velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
// True


// Na prática eu indico o pai com o atributo 'proto'
const avo = { atributo1: 'a'}
const pai = { __proto__: avo, atributo2: 'b'}
const filho = { __proto__: pai, atributo3: 'c'}

console.log(pai.atributo3)
// Atributo1 só existe em avo, e eu procurei em filho