const reviews_cards = document.getElementById('reviews_cards');

fetch('http://localhost/icestore/review.php')
    .then(response => response.json())
    .then(data => {
        reviews_cards.innerHTML = '';                
        Object.entries(data).forEach(([key, value]) => {
            const itemsList = document.createElement('div');
            
            let rateing = '';
            if (value.rate === '5') {
                rateing = '⭐⭐⭐⭐⭐';
            } else if (value.rate === '4') {
                rateing = '⭐⭐⭐⭐';
            } else if (value.rate === '3') {
                rateing = '⭐⭐⭐';
            } else if (value.rate === '2') {
                rateing = '⭐⭐';
            } else {
                rateing = '⭐';
            }


            itemsList.innerHTML = `
            <div class="review-card">
                <img src="${value.image}" alt="Customer 1" class="review-img">
                <h3>${value.name}</h3>
                <div class="stars">${rateing}</div>
                <p>${value.info}</p>
            </div>
            `;
            reviews_cards.appendChild(itemsList);
        });
    })
    .catch(error => console.error('Error:', error));



