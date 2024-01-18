let bagItemObjects;
onLoad();

function onLoad() {
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}

function displayBagSummary() {
  let bagSummaryElement = document.querySelector('.cart-price-summery');
  let shippingCharge = 500;
  let totalItemPrice = 0;


  bagItemObjects.forEach(bagItem => {
    totalItemPrice += bagItem.price;
    grandTotal = totalItemPrice + shippingCharge;
  });

  

  bagSummaryElement.innerHTML = `
  <div class="cart-order-summery">
    <h1>ORDER SUMMERY</h1>
    <h3>Item total</h3>
    <h2>₹ ${totalItemPrice}</h2>
    <h3>Shipping</h3>
    <h2>₹ 500</h2>
  </div>
  <div class="line"></div>
  <div class="cart-order-grandTotal">
    <h1>Grand Total</h1>
    <h3>(Inclusive of Taxes)</h3>
    <h2>₹ ${grandTotal}</h2>
  </div>
  `;
}

function loadBagItemObjects() {
  console.log(bagItems);
  bagItemObjects = bagItems.map(itemId => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}

function displayBagItems() {
  let containerElement = document.querySelector('.cart-product-info');
  let innerHTML = '';
  bagItemObjects.forEach(bagItem => {
    innerHTML += generateItemHTML(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadBagItemObjects();
  bagItemCount();
  displayBagItems();
  displayBagSummary();
}

function generateItemHTML(item) {
  return `  
  <div class="cart-product">
    <img class="cart-product-image" src="${item.item_image}" alt="">
    <div class="cart-product-discription">${item.company_name}, ${item.item_name}</div>
    <div class="cart-product-price">${item.price}</div>
    <div class="remove-from-cart" onclick="removeFromBag(${item.id})"><i class="ri-delete-bin-line"></i></div>
  </div>`;
}
