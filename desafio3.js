/**
* 
Dado um vetor de números e um número n. Determine a soma com o menor número de elementos entre os números do vetor mais próxima de n e também mostre os elementos que compõem a soma. Para criar a soma, utilize qualquer elemento do vetor uma ou mais vezes.

Exemplo:

Entrada de dados:

N = 10
V = [2, 3, 4]

Saída de dados:

10
[2, 4, 4]
[3, 3, 4]

Explicação:

Se N = 10 e V = [2, 3, 4] você pode utilizar as seguintes soma: [2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 4, 4] ou [3, 3, 4]. Como a quantidade de elementos em [2, 4, 4] e [3, 3, 4] é igual, os dois conjuntos devem ser mostrados.
 */

let n = 10;
let v = [2, 3, 4];

function main() {
  var resultado = [];

  for (let i = 0; i < v.length; i++) {
      for (let j = 0; j < v.length; j++) {
          for (let k = 0; k < v.length; k++) {
              if (v[i] + v[j] + v[k] == n) {
                  resultado.push(n);
                  resultado.push([v[i], v[j], v[k]]);
              }
          }
      }
  }
  console.log(resultado);
}

main();