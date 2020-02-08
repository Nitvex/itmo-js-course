let costsMap = new Map();
let balance = 350;
let sum = 0;
const balanceElement = document.querySelector(".balance");
const sumElement = document.querySelector(".sum");

// initial load of costs
(async () => {
  balance = prompt("Сколько у вас денег?", 350);
  balance = Number.isNaN(Number(balance)) ? 350 : balance;
  balanceElement.innerText = balance;
  const goodsResponse = await fetch("https://kodaktor.ru/cart_data.json");
  const goods = await goodsResponse.json();
  costsMap = new Map(Object.entries(goods));
})();

function allowDrop(event) {
  if (!isDropOnItem(event.target)) {
    event.preventDefault();
  }
}

const isDropOnItem = element => element.classList.contains("item");

function getCost(element) {
  return costsMap.get(element.dataset.item);
}

function getType(element) {
  for (let key of costsMap.keys()) {
    if (element.classList.contains(key)) {
      return key;
    }
  }
  return null;
}

function drag(event) {
  const cost = getCost(event.target);
  const type = getType(event.target);
  event.dataTransfer.setData("cost", cost);
  event.dataTransfer.setData("type", type);
}

function drop(event) {
  event.preventDefault();
  const cost = event.dataTransfer.getData("cost");
  const type = event.dataTransfer.getData("type");
  updateCart(cost, type);
}

function updateCart(cost, type) {
  let newBalance = balance - cost;
  if (newBalance < 0) {
    alert("Недостаточно средств!");
  } else {
    balance -= cost;
    sum = parseInt(sum) + parseInt(cost);
    updateView(type);
  }
}

function updateView(type) {
  balanceElement.innerText = balance;
  sumElement.innerText = sum;
  const element = document.querySelector(`.item.${type}`).cloneNode();
  event.target.appendChild(element);
}
