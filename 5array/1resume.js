// O array em javascript na vdd é um objeto
// Ele organiza seus objetos a partir de um indice

aprovados = ['Bia', 'Carla', 'Ana']
console.log(typeof(aprovados)) // Objeto
console.log(aprovados[0])

aprovados.push('Abia')
console.log(aprovados.length)
aprovados[4] = 'Junior'

aprovados.sort() // Coloca em ordem, ele altera o array original
console.log(aprovados)

delete aprovados[2] // Exclui a informação do indice 2 e coloca undefined no lugar

console.log(aprovados)
aprovados.splice(2, 1, 'JotaJota') // Splice exclui totalmento o numero do indice, splice(a, b, c) => a: indice que começa a contar, b: quantos inces vai excluir a partir do a definido, c: elemento que será add no indice removido
console.log(aprovados)