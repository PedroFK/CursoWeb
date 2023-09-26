// Introdução a Orientação a Objeto
// Conceitos de Orientação a Objeto

// Os objetos tem atributos e comportamentos
//Em JavaScript, um objeto é uma entidade independente, com propriedades e tipos.

// Em otras linguagens temos funcoes que manipulam os dados
precessamento(valor1, valor2, valor3)

// Em OO temos os Objetos que sao estruturas que agrupam, atributos e comportamentos
objeto = {
  valor1,
  valor2,
  valor3,
  precessamento() {
    // ...
  }
}

objeto.precessamento


//__________________RESUMO DO CAPÍTULO_____________________________________________

//    1 - ABSTRAÇÃO
// Abstrair e simplificar o objeto complexo do mundo e trazer para o nosso sistema

// O carro na vida real quando for passado para o sistema do detran ou de uma oficina
// Terá atributos diferentes, tem informaçoes que sao necessarias para cada meio

//    2 - ENCAPSULAMENTO
// Esconder os detalhes internos da aplicação para nao dificultar para o exterior
// Interface de comunicação simples e comum, mesmo que a implementação interna seja alterada o exterior nao precisa aprender nada diferente para utilizar

//    3 - HERANÇA (prototype)
// Um objeto recebe atributos e comportamento do objeto pai
// Reutilizar informações e códigos as partir da herança, sem precisar reescrever nada

//    4 - POLIMORFISMO
// Multiplas formas, a partir de uma variável do tipo carro, podemos atribuir uma ferrari, um honda, etc...