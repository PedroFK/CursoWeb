// Exercicio, tranformar o JSON em array

const carrinho = [
  '{"nome": "borracha", "preco": 3.75}',
  '{"nome": "caderno", "preco": 15.20}',
  '{"nome": "caneta", "preco": 2.35}'
]

const conv = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const preco = carrinho.map(conv).map(apenasPreco)
console.log(preco)