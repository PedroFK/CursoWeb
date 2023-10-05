
function velCheck() {
  let txtv = document.getElementById('txtvel').value
  let velo = Number.parseInt(txtv)
  let result = document.querySelector('div#result')
  let limit = 80

  if(velo > limit) {
    result.innerHTML = `Você está acima do limite de velocidade`
  }
  else {
    result.innerHTML = `Você está dentro do limite de velocidade`
  }
}


