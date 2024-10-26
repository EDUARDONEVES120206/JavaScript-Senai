
function Calcular() {
    let valor_pizzaP = 0
    let valor_pizzaM = 0
    let fanta = 0
    
    let produtos = []
    if (document.getElementById("um").value != "") {
        valor_pizzaP = valor_pizzaP  + (50 * Number(document.getElementById("um").value ))
        produtos.push("Pizza Portuguesa")
    }
     if (document.getElementById("dois").value != "") {
        valor_pizzaM = valor_pizzaM  + (45 * Number(document.getElementById("dois").value ))
        produtos.push("Pizza Mussarela")
        
    }
    if (document.getElementById("tres").value != "") {
        fanta = fanta  + (5 * Number(document.getElementById("tres").value ))
        produtos.push("Fanta Laranja")
        
    }
    let total = valor_pizzaM + valor_pizzaP + fanta
    document.write("O valor do pedido é: ", total)
    document.write("<br>O total de pedidos é: ", produtos)


}
