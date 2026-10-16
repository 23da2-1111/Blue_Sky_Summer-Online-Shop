const buy_products = document.getElementById('buy_products');
buy_products.innerHTML = '';


fetch('http://localhost/icestore/index.php')
    .then(response => response.json())
    .then(data => {
        filter_data = data;
        data.forEach((element, key) => {
            const itemsList = document.createElement('div');
            let rateing = '';
            if (element.rate === '5') {
                rateing = '⭐⭐⭐⭐⭐';
            } else if (element.rate === '4') {
                rateing = '⭐⭐⭐⭐';
            } else if (element.rate === '3') {
                rateing = '⭐⭐⭐';
            } else if (element.rate === '2') {
                rateing = '⭐⭐';
            } else {
                rateing = '⭐';
            }

            itemsList.innerHTML = `
                <div class="menu-item">
                    <img src="${element.image}" style="height: 200px">
                    <h3>${element.price}</h3>
                    <h4 class="div_name">${element.name}</h4>
                    <p>${rateing}</p>
                    <button onClick="orderProduct(${element.id}, '${element.name}')">Order Now</button>
                </div>
            `;
            buy_products.appendChild(itemsList);
        });
    })
    .catch(error => console.error('Error:', error));

function orderProduct(key, productName) {
    console.log('Order placed for product with key ' + key);
    const userConfirmed = confirm('Are you sure you want to buy ' + productName + '?');
    if (userConfirmed) {
        console.log('Success! The order for ' + productName + ' has been placed.');
    } else {
        console.log('Order was cancelled.');
    }
}


