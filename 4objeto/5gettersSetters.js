// Métodos get e set, são funções para manipular o valor de uma var antes de usala
// GET para ler o valor de uma variável e SET para setar um valor.

// São utilizados para não acessar de forma direta variáveis, correndo menos riscos

const sequencia = {
  // Colocando o '_' mostramos para os devs que pretendemos acessar essa variável apenas de forma interna
  _valor: 1, // Convenção
  get valor() { return this._valor++ },
  set valor(valor) {
    if( valor > this._valor) {
      this._valor = valor 
    }
  }
}

console.log(sequencia.valor, sequencia.valor)