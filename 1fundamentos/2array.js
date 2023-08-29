const valores = [7.7, 8.3, 6.3, 9.2] //o array é dinâmico, ele pode crescer e diminuir
console.log(valores[0], valores[4])

valores[4] = 10 // adiciona um elemento no indice informado
console.log(valores.length) // mostra numero de elementos no array

console.log(valores.pop()) // remove o último elemnto do array
console.log(valores)

valores.push(1, 1) // adicionar mais valores ao array

delete valores [0] // remove o elmento indicado

console.log(typeof valores)

console.log(valores)
