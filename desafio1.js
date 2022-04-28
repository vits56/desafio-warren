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
