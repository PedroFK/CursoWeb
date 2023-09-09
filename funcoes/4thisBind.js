const pessoa = {
  saudacao: 'Bom dia',
  falar () {
  console.log(this.saudacao)
  }
}
pessoa.falar()

// Usando bind
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

