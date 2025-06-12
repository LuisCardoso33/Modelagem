const lanches = {
  hamburguer: {
    nome: "Hambúrguer",
    ingredientes: [
      "Pão com gergelim",
      "Hambúrguer bovino",
      "Alface",
      "Tomate",
      "Queijo cheddar",
      "Molho especial"
    ],
    preco: 12.00
  },
  batata: {
    nome: "Batata Frita",
    ingredientes: [
      "Batata cortada em palito",
      "Sal",
      "Óleo para fritar"
    ],
    preco: 8.00
  },
  refrigerante: {
    nome: "Refrigerante",
    ingredientes: [
      "Água gaseificada",
      "Açúcar",
      "Aromas artificiais"
    ],
    preco: 5.00
  },
  suco: {
    nome: "Suco Natural",
    ingredientes: [
      "Frutas frescas",
      "Água",
      "Açúcar (opcional)"
    ],
    preco: 6.50
  }
};

const lancheSelect = document.getElementById('lancheSelect');
const ingredientesContainer = document.getElementById('ingredientesContainer');
const ingredientesList = document.getElementById('ingredientesList');
const precoLanche = document.getElementById('precoLanche');
const addPedidoBtn = document.getElementById('addPedidoBtn');
const pedidoList = document.getElementById('pedidoList');
const totalPedido = document.getElementById('totalPedido');

let pedido = [];
let total = 0;

lancheSelect.addEventListener('change', () => {
  const chave = lancheSelect.value;

  if (!chave) {
    ingredientesContainer.style.display = 'none';
    ingredientesList.innerHTML = '';
    precoLanche.textContent = '0.00';
    return;
  }

  const lanche = lanches[chave];

  ingredientesList.innerHTML = lanche.ingredientes
    .map(ingrediente => `<li>${ingrediente}</li>`)
    .join('');

  precoLanche.textContent = lanche.preco.toFixed(2);
  ingredientesContainer.style.display = 'block';
});

addPedidoBtn.addEventListener('click', () => {
  const chave = lancheSelect.value;
  if (!chave) return;

  const lanche = lanches[chave];
  pedido.push(lanche);
  total += lanche.preco;

  atualizarPedido();
});

function atualizarPedido() {
  pedidoList.innerHTML = pedido
    .map(item => `<li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>`)
    .join('');

  totalPedido.textContent = total.toFixed(2);
}
