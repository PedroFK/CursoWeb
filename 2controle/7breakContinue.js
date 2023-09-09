const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in number) {
  if (x == 5) {
    break // Vai para esse bloco
  }
  console.log(`${x} = ${number[x]}`)
}

for (y in number) {
  if (y == 5) {
  continue // vai pular essa situação e continuar
  }
  console.log(`${y} = ${number[y]}`)
}