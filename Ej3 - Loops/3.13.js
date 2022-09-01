const numero = 1000;

let divisores = [];
for (let i = 1; i <= numero; i++) {
  let j = 1;
  let aux = true;
  let total = 0;
  while (j <= i - 1 && aux) {
    if (i % j === 0) {
      total += j;
    }

    if (total > i) {
      aux = false;
    }
    j++;
  }
  if (total === i) {
    console.log(i);
  }
}
