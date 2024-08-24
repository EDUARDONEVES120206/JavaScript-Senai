//1

document.getElementById('desafio1').addEventListener('submit', function (event) {

    const numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero)) {
        document.getElementById('resultado').innerHTML = '<p style="color:red;">Por favor, digite um número válido.</p>';
    } else {
        const antecessor = numero - 1;
        const sucessor = numero + 1;
        document.getElementById('resultado').innerHTML = `<p>O antecessor de ${numero} é ${antecessor} e o sucessor é ${sucessor}.</p>`;
    }
});

//2

document.getElementById('desafio2').addEventListener('submit', function (event) {
    event.preventDefault();

    const numero = parseInt(document.getElementById('numero2').value);
    if (isNaN(numero)) {
        document.getElementById('resultado2').innerHTML = '<p style="color:red;">Por favor, digite um número válido.</p>';
    } else {
        const dobro = numero * 2;
        const triplo = numero * 3;
        const raiz = Math.sqrt(numero)
        document.getElementById('resultado2').innerHTML = `<p>O dobro de ${numero} é ${dobro}, seu triplo é ${triplo}, sua raiz é ${raiz} </p>`;
    }
});


//3
document.getElementById('desafio3').addEventListener('submit', function (event) {
    event.preventDefault();
    const numero3 = parseInt(document.getElementById('numero3').value)
    const numero4 = parseInt(document.getElementById('numero4').value)
    if (isNaN(numero3)) {
        document.getElementById('resultado3').innerHTML = '<p style="color:red;">Por favor, digite um número válido.</p>';
    }
    else {
        const media = (numero3 + numero4) / 2;
        document.getElementById('resultado3').innerHTML = `<p>A sua media é ${media} </p> `;
    }
});

//4
document.getElementById('desafio4').addEventListener('submit', function (event) {

    const numero5 = parseInt(document.getElementById('numero5').value);
    if (isNaN(numero5)) {
        document.getElementById('resultado4').innerHTML = '<p style="color:red;">Por favor, digite um número válido.</p>';
    } else {
        const centimetros = numero5 * 100;
        const milimetros = numero5 * 1000;
        document.getElementById('resultado4').innerHTML = `<p>O valor em metros ${numero5} em centimentro e ${centimetros} em milimetros é ${milimetros}.</p>`;
    }
});
//5
document.getElementById('desafio5').addEventListener('submit', function (event) {

    const numero6 = parseInt(document.getElementById('numero6').value);
    let i = 0
    if (isNaN(numero6)) {
        document.getElementById('resultado5').innerHTML = '<p style="color:red;">Por favor, digite um número válido.</p>';
    } else {
        while (i <= 10) {
            document.getElementById('resultado5').innerHTML += `<p>(${numero6} x ${i} = ${numero6 * i})</p>`;
            i++;
        }
    }
});
// 6
document.getElementById('desafio6').addEventListener('submit', function (event) {

    const numero7 = parseFloat(document.getElementById('numero7').value);
    if (isNaN(numero7)) {
        document.getElementById('resultado6').innerHTML = '<p style="color:red;">Por favor, digite um número válido.</p>';
    } else {
        const dolar = 5
        const saldodolar = numero7 / dolar
        document.getElementById('resultado6').innerHTML = `<p>o seu saldo em dolar seria ${saldodolar} dolares <p>`;
    }
});


