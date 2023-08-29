function teste () {
  var local = 123
  console.log(local)
}
teste()
// Se eu colocar o console.log da variável fora da funcao, nao vou conseguir dar print var

// Os VAR estão no mesmo "local", chaves nao separam eles - vao receber o mesmo valor
var numero = 1
{
  var numero = 2
console.log('dentro =', numero)
}
console.log('fora =', numero)

// Nesse caso os VAR estão em escopos diferentes - podem ter cada um o seu valor
var numero = 1
function nota () {
  var numero = 2
  console.log('dentro =', numero)
}
nota()
console.log('fora =', numero)
