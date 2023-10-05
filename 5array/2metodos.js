const alunos = ['Pedro', 'João', 'Henrique', 'Arthur']

alunos.pop() // remove o último item da lista

alunos.push('José') // Adiciona uma aluno na última posição

console.log(alunos)

alunos.shift() // remove o primeiro item da lista
console.log(alunos[0]) // resultado: João

alunos.unshift('Zacarias') // Adiciona elemento na primeira posição

// .SPLICE pode adicionar e remover elementos

const algunsAlunos1 = alunos.slice(1,3) // Cria um novo array a partir do indice indicado e termina no indice anterior ao indicado
console.log(algunsAlunos1)