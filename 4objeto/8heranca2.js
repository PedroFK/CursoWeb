// caso com carros, utilizando forma para definir proto diferente

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    }
    else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrari = {
  modelo: 'f40',
  velMax: 324
}

const volvo = {
  modelo: 'xc60',
  status() { // Tenho que usar super pois o status nao esta no escopo da const, é como se fosse um super só que mais forte
    return `${this.modelo}: ${super.status()}`
  }
}

// Carro é o prototypo/ pai de ferrari
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(100)
console.log(volvo.status())