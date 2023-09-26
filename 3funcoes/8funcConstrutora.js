function carro (maxSpeed = 250, delta = 5) {

  //atributo privado
  let currentSpeed = 0

  //atributo público, this. é responsável por tornar algo visivel para fora da estrutura
    this.acelerar = function () {
    if (currentSpeed + delta <= maxSpeed) {
      currentSpeed += delta
    }
    else {
      currentSpeed = maxSpeed
    }
  }

  //método publico
  this.getCurretSpeed = function () {
    return currentSpeed
  }
}

const uno = new carro //velocidade do uno
uno.acelerar()
console.log(uno.getCurretSpeed()) 

const ferrari = new carro(350, 20) //atributos foram alterados por ser carro melhor
ferrari.acelerar()
console.log(ferrari.getCurretSpeed()) 