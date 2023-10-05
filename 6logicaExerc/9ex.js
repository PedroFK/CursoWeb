// Arrays: Escreva um programa que declare um array de suas frutas favoritas e imprima cada fruta na lista usando um loop.

const frutas = ['banana', 'maçã', 'pera', 'tomate']

const list = function () {
  for (i = 0; i < frutas.length; i++) {
    console.log(i+1 +': ' + frutas[i])
  }
}
list()