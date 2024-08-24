function verificaridade() {
    let idade = parseInt(document.getElementById("idade").value)
    if (idade > 17) {
        document.getElementById('resultado').innerHTML= `você é maior de idade`
    }else{
        document.getElementById('resultado').innerHTML= `você é menor de idade`
    }
}
