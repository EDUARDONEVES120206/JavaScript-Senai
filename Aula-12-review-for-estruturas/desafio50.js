let soma = 0;
let n = 0;
for (let i = 1; i <= 6; i++) {
  n = parseInt(prompt("Digite um numero"));
  if (n % 2 == 0) {
    soma += n;
  }
}
alert(n + " a soma dos numeros pares e: " + soma);
