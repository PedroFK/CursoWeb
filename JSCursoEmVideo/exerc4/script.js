function count() {

  let txtstart = document.querySelector('input#start').value
  let txtend = document.querySelector('input#end').value
  let txtstep = document.querySelector('input#step').value

  let start = Number.parseInt(txtstart)
  let end = Number.parseInt(txtend)
  let step = Number.parseInt(txtstep)
  
  let contagem = document.querySelector('div#contagem')

  if(start >= 0 || end >= 0 || step >= 0) {
    while (start < end) {
      contagem.innerHTML += `${start} `
      start = start + step

    }
  }
  else {
    alert('Por fazer escreva um número válido')
    location.reload()




  }




  contagem.innerHTML 
}
