let valor //variável não foi iniciada
console.log(valor) //resultado é undefined. Valor foi declarado mas n foi incializado

// console.log(valor2) - resultado é 'is not defined'. Valor n foi  nem declarado = erro

valor = null 
console.log(valor)

// quando eu quiser zerar o valor de uma variável eu atribuo o 'null' a ela

const produto = {}
console.log(produto) // log vai ser conjunto vazio

produto.preco = 23.50
console.log(produto)

// delete produto.preco - exclui a categoria preço

produto.preco = null // esse produto tem preço nao definido
 console.log(!!produto.preco) // retorna a informação se o preco do produto está definido ou não
