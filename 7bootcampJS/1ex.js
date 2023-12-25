class Carro {
  constructor(brand, color, averageConsumption) {
    this.brand = brand
    this.color = color
    this.averageConsumption = averageConsumption
  }

  spent(routeDistance, fuelCost) {
    let fuelQuantity = routeDistance / this.averageConsumption 

    let finalSpent = fuelQuantity * fuelCost

    console.log(`${finalSpent} reais`)
  }
}

const saveiro = new Carro('vw', 'branco', 12);

saveiro.spent(120, 6)

console.log(saveiro)

