const our_product = document.getElementById('our_product');

fetch('http://localhost/icestore/index.php')
    .then(response => response.json())
    .then(data => {
        our_product.innerHTML = '';
        Object.entries(data).forEach(([key, value]) => {
            const itemsList = document.createElement('div');
            itemsList.innerHTML = `
             <div class="speciality-card">
                <div class="div_image" style="background-image: url('${value.image}');"></div>
                  <h4 class='div_name'>${value.name}</h4>
                  <p>${value.about}</p>
              </div>
            `;
            our_product.appendChild(itemsList);
        });
    })
    .catch(error => console.error('Error:', error));



