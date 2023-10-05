// Parametros e retornos são opcionais nas funções de JavaScrip

function area(largura, altura) {
  const area = largura * altura
  if (area > 20) {
     console.log(`A área é muito grande ${area} M2`)
  } else {
    return console.log(area)
  }
}

area(23,4)