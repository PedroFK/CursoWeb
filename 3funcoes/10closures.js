// closure é o escopo criado quando uma função é declarada
// Esse escopo permite funcao acessar variáveis externas a funcao

// Contexto léxico em ação

const x = 'Global'

function fora() {
  const x = 'Local'
  function dentro() {
    return x
  }
  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())