let bagItems = [];
displayItemsOnHomePage();
bagItemCount();

function addToBag(itemId) {
    bagItems.push(itemId);
    bagItemCount();
}

function bagItemCount(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0){
        bagItemCountElement.innerHTML = bagItems.length;
        bagItemCountElement.style.visibility = 'visible';
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage() {
    let itemContainerElement = document.querySelector('.items-container');

    let innerHtml = '';
    items.forEach(item => {
        innerHtml += `
        <div class="item-container">
            <img class="item-image" src="${item.item_image}" alt="">
            <div class="company-name">${item.company_name}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">${item.price}</div>
            <button class="addToCart" onclick="addToBag(${item.id})">Add to cart</button>
        </div>
        `
    });
    itemContainerElement.innerHTML = innerHtml;
}
