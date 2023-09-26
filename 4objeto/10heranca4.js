//Function construtora
function Aula(nome, videoID) {
  this.nome = nome
  this.videoID = videoID
}

// Operador new cria uma nova funcao e atrela a um prototype de Aula
const aula1 = new Aula('Bem vindo', 1001)
const aula2 = new Aula('Até logo', 1002)

console.log(aula1, aula2)