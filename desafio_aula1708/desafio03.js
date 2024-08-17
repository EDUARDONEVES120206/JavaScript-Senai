
var nota1 = parseInt(prompt("Digite a primeira nota:"));
var nota2 = parseInt(prompt("Digite a segunda nota:"));
var nf= (nota1+nota2)/2;
if (nf>=6) {
    console.log("Aprovado com a media " +nf)
}else{
    console.log("Reprovado com a media "+ nf)
}
console.log('-----------------------')