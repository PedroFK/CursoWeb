function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2 // O sinal = ||, significa 'OU'
  const comprarTv50 = trabalho1 && trabalho2 // '&&' significa 'E'
  const comprarTv32 = trabalho1 != trabalho2 // Se apenas um trabalho tiver ocorrido
  const manterSaudavel = !comprarSorvete // Se nao comprar sorvete vou ficar saudavel - operardor unário
  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
