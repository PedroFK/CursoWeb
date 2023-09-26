// Diferentes formas de criar objetos com JavaScript

// Criaçào de objeto de forma literal
const obj1 = {}

// Criaçào de objeto com funções construtoras
function produto(nome, preco, desc) {
  this.nome = nome // Usando o this eu torno o nome publico
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new produto('Carro', 35000, 0.1)
const p2 = new produto('Bicicleta', 5000, 0.22)

console.log(p1)
// Esse log vai responder o nome do carro, e o resto fica anonimo pois nao foi usado this

console.log(p1.getPrecoComDesconto())


// Usando funcao factory
function criarFuncionario(nome, salario, faltas) {
  return {
    nome,
    salario,
    faltas,
    getSalario() {
      return (salario / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('Pedro', 2300, 5)
console.log(f1.getSalario())