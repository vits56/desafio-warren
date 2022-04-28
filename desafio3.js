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
