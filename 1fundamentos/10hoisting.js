// Hoisting é uma propriedade de mover a declaração var para o topo, antes do log
// Para LET isso nao funciona.
console.log('a =', a) //a VAR nao tinha sido dada ainda mas ele reconheceu e falou que ela nao possui valor
// Em outras linguagens o log acima daria erro
var a = 2
console.log('a =', a) //aqui a var a foi recnhocida e possui valor pois foi declarada
