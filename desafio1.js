/*

Alguns números inteiros positivos n possuem uma propriedade na qual a soma de n + reverso(n) resultam em números ímpares. Por exemplo, 36 + 63 = 99 e 409 + 904 = 1313. Considere que n ou reverso(n) não podem começar com 0.

Existem 120 números reversíveis abaixo de 1000.

Construa um algoritmo que mostre na tela todos os números n onde a soma de n + reverso(n) resultem em números ímpares que estão abaixo de 1 milhão.
*/

function main() {
  let resultado = [];

  for (let i = 1; i < 1000000; i++) {
    let numero = i.toString();
    let numeroReverso = numero.split('').reverse().join('');

    if ((i + numeroReverso) % 2 != 1) {
      resultado.push(i);
      resultado.push(i + numeroReverso);
    }
  }
  console.log(resultado);
}

main();