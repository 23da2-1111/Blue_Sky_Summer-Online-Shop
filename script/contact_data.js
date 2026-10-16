document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const formData = new FormData(this);
      fetch('http://localhost/icestore/contact.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json()) 
    .then(data => {
      if (data.success) {
        document.getElementById('success-message').style.display = 'block';
        setInterval(() => {
            document.getElementById('success-message').style.display = 'none';
        }, 5000);
        setInterval(() => {
            window.location.reload();
        }, 7000);
      } else {
        alert('Submission failed. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  });
  