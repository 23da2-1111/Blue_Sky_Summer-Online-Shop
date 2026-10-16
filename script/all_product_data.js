const all_product_data = document.getElementById('all_product_data');

fetch('http://localhost/icestore/index.php')
    .then(response => response.json())
    .then(data => {
        all_product_data.innerHTML = ''; 
        Object.entries(data).forEach(([key, value]) => {
            const itemsList = document.createElement('div');
             itemsList.innerHTML = `
             <div class="gallery-item">
              <img src="${value.image}">
              <div class="info">
                <h2></h2>
                <a class="button" onClick='orderProducts(${value.id}, "${value.name}")'>GO</a>
              </div>
            </div>
            `;
            all_product_data.appendChild(itemsList);
        });
        
        
       
    })
    .catch(error => console.error('Error:', error));



    function orderProducts(key, productName){
        alert('Are sure View ' + productName ); 
    }