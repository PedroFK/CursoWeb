// receber idade da criança e falar a categoria dela

const inputAge = 8

function category(age) {
  if(age < 8) {
    console.log('A categoria é junior')
  }
  else if(age < 13) {
    console.log('A categoria é infantil')
  }
  else {
    console.log('A categoria é pré')
  }
}

category(inputAge)