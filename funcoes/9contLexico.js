const valor = 'Global'

//Local de definição da minhaFuncao
function minhaFuncao() {
  console.log(valor)
}

//Local de execução da minhaFuncao
function exec() {
  const valor = 'Local'
  minhaFuncao()
}

exec()

// Explicação: Quando function exec executa a func minhaFuncao
// Dentro de minha funcao está assim: log(valor)
// A const valor utilizada será do local de definicao da func e nao do local de execucao