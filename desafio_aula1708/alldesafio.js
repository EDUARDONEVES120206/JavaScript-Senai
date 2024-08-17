function desafio1(n1) {
    var n1 = parseInt((prompt('digite um número')));
    alert('antecessor de ' + (n1) + ' é ' + (n1 - 1) + ' e seu sucessor é ' + (n1 + 1))
}

function desafio2(n1) {
    var n1 = parseFloat(prompt('digite um número'));
    alert('dobro ' + n1 * 2 + ' triplo = ' + n1 * 3 + ' raiz quadrada ' + Math.sqrt(n1))
}
function desafio3() {
    var nota1 = parseInt((prompt('digite nota 1')))
    var nota2 = parseInt((prompt('digite nota 2')))
    let media = parseFloat((nota1 + nota2) / 2)
    alert('primeira nota = ' + nota1 + ' segunda = ' + nota2 + ', média =  ' + media)
}
function desafio4() {
    var metros = parseFloat(prompt('digite metros'))
    alert('metros = ' + metros + ' centimetros =' + metros * 100 + ' milímetros = ' + metros * 1000)
}
function desafio5() {
    var tabuada = parseFloat(prompt('digite número da tabuada'))
    console.log('tabuada do número ' + tabuada)
    for (var i = 1; i <= 10; i++) {
        alert(i + ' * ' + tabuada + ' = ' + i * tabuada)
    }
}
function desafio6(real) {
    var real = (prompt('digite seu dinheiro'))
    alert('com esse dinheiro vc tem ' + real / 5, 47 + 'Dolares')
}