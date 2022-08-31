const numero = 7;

let divisores = [];

for (let i = 1; i < numero; i++) {
  if (numero % i === 0) {
    divisores.push(i);
  }
}

let suma = 0;
for (let i = 0; i < divisores.length; i++) {
  suma += divisores[i];
}
if (suma === numero) {
  console.log("es un numero perfecto");
} else console.log("no es un numero perfecto");
