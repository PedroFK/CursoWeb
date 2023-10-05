// Peça ao usuário uma quantidade de linhas e e outra de colunas, depois declare tal matriz, inicialize todos os elementos de 1 até 'linha x coluna'.

// var line = parseInt(prompt('Qual número de linhas você deseja'))
// var column = parseInt(prompt('Qual número de linhas você deseja'))

let linhas = 2
let colunas = 2

// Cria uma matriz vazia com as dimensões fornecidas
var matriz = new Array(linhas);

// Inicializa a matriz com números crescentes
var valor = 1;
for (var i = 0; i < linhas; i++) {
    matriz[i] = new Array(colunas);
    for (var j = 0; j < colunas; j++) {
        matriz[i][j] = valor;
        valor++;
    }
}

// Exibe a matriz no console
console.log("Matriz " + linhas + "x" + colunas + ":");
for (var i = 0; i < linhas; i++) {
    console.log(matriz[i].join("\t")); // Use "\t" para separar os elementos por tabulação
}