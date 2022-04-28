function main() {
  let x = 3;
  let tempoChegada = [-2, -1, 0, 1, 2];

  for (let i = 0; i < tempoChegada.length; i++) {
      if (tempoChegada[i] > 0) {
          x--;
      }
  }

  if (x > 0) {
      console.log('Aula normal');
  } else {
      console.log('Aula cancelada');
  }
}
main();
