// Fazer a validação de uma data. O return final deve ser valido ou invalido
// considerar se o ano é bissexto, pois o valor de fevereiro limite é 29
// Nao aceitar numeros negativos

// vou começar a analise por ano e ir descendo para dias, parece ser mais fácil

//Está funcionando: split,OK   

const dataBase = '28/02/2020'

function validation(date) {
  let idDate = dataBase.split('/')
  dataAtual = new Date()
  let ano = dataAtual.getFullYear()
  let result = ''

  let testYear = idDate[2] < ano && idDate[2] > 0
  let testMonth = idDate [1] > 0
  let testDay = idDate [0] > 0
  let testBissexto = (idDate[2] % 4 === 0 && idDate[2] % 100 !== 0) || (idDate[2] % 400 === 0)

  if(testYear && testMonth && testDay) {
    
    if(testBissexto) {
      if(idDate[1] == 2 && idDate[0] <= 29) {
        result = 'Valid'
      }
      else if(idDate[1] != 2) {
        result = 'Valid'
      }
      else {
        result = 'Invalid'
      }
    }
    else {
      if(idDate[1] == 2 && idDate[0] <= 28) {
        result = 'Valid'
      }
      else if(idDate[1] != 2) {
        result = 'Valid'
      }
      else {
        result = 'Invalid'
      }
    }
  }
  else {
    result = 'Invalid'
  }






  

  

  
  
  
  //if(idDate[1] == 4 || idDate[1] == 6 || idDate[1] == 9 || idDate[1] == 11) {
  //  dayLimit = 30
  

  //if(idDate[1] == 1 || idDate[1] == 3 || idDate[1] == 5 || idDate[1] == 7 || idDate[1] == 8 || idDate[1] == 10 || idDate[1] == 12) {
  //  dayLimit = 31
  
  
  //if(idDate[0] > dayLimit) {
  // statusResulte = 'Invalid' 
  
  
    



  // tenho que consertar esse retorno, ele nao está correto
  return result
}

console.log(validation(dataBase))



