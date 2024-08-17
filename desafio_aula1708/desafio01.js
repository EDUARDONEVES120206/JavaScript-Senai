var numero = parseInt(prompt("Digite um número inteiro:"));

if ((numero)) {
    var sucessor = numero + 1;
    var antecessor = numero - 1;
    
    console.log("Número digitado:", numero);
    console.log("Sucessor:", sucessor);
    console.log("Antecessor:", antecessor);
} else {
    console.log("Por favor, insira um número válido.");
}

console.log('-----------------------')