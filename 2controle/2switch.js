const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) { // caso o valor for x ele entra na seguinte condição
    case 10: // Não preciso colocar nd aqui, se for 9 ou maior ele vai executar console.log
    case 9:
      console.log('Quadro de honra')
      break // preciso colocart "Break", se n colocar, ele vai executar todos os outros casos a baixo
      // Break stopa a funcao
    case 8: case 7: // Posso escrer um case na frente do outro tbm
      console.log('Aprovado')
      break
    case 6: case 5: case 4: 
      console.log('Recuperação')
      break
    case 3: case 2: case 1: case 0:
      console.log('Reprovado')
      break
    default: // tem a mesma função no else, esse aqui aparece se nao executar nada acima
      console.log('Nota invalida')
  }
}

imprimirResultado(10)
imprimirResultado(6.9)
imprimirResultado(-1) // nota invalida
imprimirResultado(11) // nota invalida