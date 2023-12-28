let bagItems = [];
onLoad();

function onLoad(){
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr): [];
    displayItemsOnHomePage();
    bagItemCount();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
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

gsap.from(".items-container", {
    y:50,
    duration:1.5,
    opacity:0,
})
