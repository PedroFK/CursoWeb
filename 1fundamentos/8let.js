var numero = 1 

{
  let numero = 2 // Let considera o escopo de  bloco, os valores de dentro e fora serão diferentes
  console.log('dentro =', numero)
}

console.log('fora =', numero)
