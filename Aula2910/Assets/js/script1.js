let cart = [];

document.querySelectorAll('.pedir, .btn-custom').forEach(button => {
  button.addEventListener('click', function() {
    const isPizza = this.classList.contains('pedir');
    const item = isPizza ? this.getAttribute('data-sabor') : this.getAttribute('data-bebida');
    const preco = parseFloat(isPizza ? this.getAttribute('data-preco') : this.getAttribute('data-preco'));

    document.getElementById('pizzaSabor').value = item;
    document.getElementById('pizzaPreco').value = preco;

    if (isPizza) {
      document.getElementById('ingredientes').style.display = 'block';
    } else {
      document.getElementById('ingredientes').style.display = 'none';
    }

    $('#pedidoModal').modal('show');
  });
});

document.getElementById('adicionarCarrinho').addEventListener('click', function() {
  const sabor = document.getElementById('pizzaSabor').value;
  const preco = parseFloat(document.getElementById('pizzaPreco').value);
  const quantidade = parseInt(document.getElementById('quantidade').value);
  const ingredientes = Array.from(document.getElementById('ingredientes').selectedOptions)
                            .map(option => option.value);

  const item = {
    sabor,
    preco,
    quantidade,
    ingredientes: ingredientes.length ? ingredientes : "Sem ingredientes adicionais",
    total: preco * quantidade
  };

  cart.push(item);
  atualizarCarrinho();
  $('#pedidoModal').modal('hide');
});

function atualizarCarrinho() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  let totalCarrinho = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.total;
    totalCarrinho += itemTotal;

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = `${item.sabor} - Quantidade: ${item.quantidade} - Total: R$ ${itemTotal.toFixed(2)}`;
    cartItems.appendChild(li);
  });
  document.getElementById('finalizarPedido').style.display = cart.length > 0 ? 'block' : 'none';
  document.getElementById('finalizarPedido').onclick = () => {
    if (cart.length > 0) {
      alert(`Total do pedido: R$ ${totalCarrinho.toFixed(2)}\nEscolha a forma de pagamento.`);
      cart = []; 
      atualizarCarrinho(); 
    } else {
      alert("Seu carrinho está vazio!");
    }
  };
}