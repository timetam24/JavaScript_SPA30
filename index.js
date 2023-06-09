const root = document.getElementById('root')

async function getProductData() {
    const response = await fetch('http://test.api.weniv.co.kr/mall')
    const product = await response.json()
    return product
}

getProductData().then(product => {  
// main
const mainElement = document.createElement('main');
mainElement.setAttribute("class", "product");

// productPageHeader
 const prodctPageHeader = document.createElement("h1");
prodctPageHeader.setAttribute("class", "ir");
prodctPageHeader.innerText = "상품목록 페이지";
mainElement.appendChild(prodctPageHeader);

// productList
const productList = document.createElement("ul");
productList.setAttribute("class", "product-list");
mainElement.appendChild(productList);

product.forEach((item) => {
    const productDetailLink = document.createElement('a')
    productDetailLink.href = `/detail/${item.id}`

    const productItem = document.createElement('li')
    productItem.setAttribute("class", "product-item");

    const productImgContainer = document.createElement("div");
    productImgContainer.setAttribute("class", "product-img");

    const productImg = document.createElement('img');
    productImg.setAttribute('src', `http://test.api.weniv.co.kr/${item.thumbnailImg}`);
    productImg.setAttribute("alt", `상품이미지`);
    productImgContainer.appendChild(productImg);

    const productName = document.createElement("strong");
    productName.setAttribute("class", "product-name sl-ellipsis");
    productName.innerText = item.productName;

    const likeBtn = document.createElement('button');
    likeBtn.setAttribute("class", "like-btn");

    const productPriceContainer = document.createElement("div");
    productPriceContainer.setAttribute('class', 'product-price');

    const productPrice = document.createElement('strong');
    productPrice.setAttribute("class", "price m-price");
    productPrice.innerText = item.price;

    const priceType = document.createElement("span");
    priceType.innerText = "원";
    
    productPrice.appendChild(priceType);
    productPriceContainer.appendChild(productPrice);

    productItem.appendChild(productImgContainer);
    productItem.appendChild(productName);
    productItem.appendChild(likeBtn);
    productItem.appendChild(productPriceContainer);
    
    productDetailLink.appendChild(productItem);
    
    productList.appendChild(productDetailLink)
});

// cart
const cart = document.createElement('a')
cart.setAttribute('class', 'link-btn cart-link')
mainElement.append(cart)

// 
root.append(mainElement)
})