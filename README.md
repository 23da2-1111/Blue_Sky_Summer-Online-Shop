**🍦 Blue Sky Summer - Ice Cream Store Website**

A full-stack ice cream store web application built with HTML, CSS, JavaScript, PHP, and MySQL. It features a dynamic product catalog, customer reviews, contact form, and a complete order/payment flow.

https://banner.jpg/

📋 Table of Contents
Features

Tech Stack

Project Structure

Installation

Database Setup

Configuration

Usage

API Endpoints

Author

License

✨ Features
🏠 Home Page – Hero section with branding and call-to-action

🍧 Dynamic Product Catalog – Products fetched from MySQL database

⭐ Customer Reviews – Star ratings pulled dynamically from DB

📞 Contact Form – Saves user inquiries to the database

🛒 Order Flow – Order → Payment → Confirmation pages

📱 Responsive Design – Works on mobile, tablet, and desktop

💳 Payment Form Validation – Card number, expiry, and CVV validation

🎨 Modern UI – Custom CSS styling with clean layout

🛠 Tech Stack
Layer	Technology
Frontend	HTML5, CSS3, JavaScript (Vanilla)
Backend	PHP 8.x
Database	MySQL / MariaDB
Server	XAMPP / WAMP / MAMP (localhost)
Icons	Font Awesome 6.5
📁 Project Structure
text
icestore/
│
├── index.html                    # Main landing page
├── buy.html                      # Payment details page
├── order.html                    # Order form page
│
├── styles.css                    # Main stylesheet
├── script.js                     # Main JS logic
│
├── all_product_data.js           # Gallery products fetch script
├── buy_products.js               # Buy page products fetch script
├── our_product.js                # Speciality products fetch script
├── reviews_cards.js              # Reviews fetch script
├── contact_data.js               # Contact form handler
│
├── index.php                     # API: Fetch products
├── review.php                    # API: Fetch reviews
├── contact.php                   # API: Save contact submissions
│
├── store.sql                     # Database dump
│
└── images/                       # Product & review images
    ├── logo.png
    ├── banner.jpg
    ├── product1.jpg
    ├── product2-removebg-preview.png
    └── ...
⚙ Installation
1️⃣ Clone the Repository
bash
git clone https://github.com/your-username/icestore.git
cd icestore
2️⃣ Move to Local Server Directory
XAMPP: C:\xampp\htdocs\icestore\

WAMP: C:\wamp64\www\icestore\

MAMP: /Applications/MAMP/htdocs/icestore/

3️⃣ Start Local Server
Start Apache and MySQL from your XAMPP/WAMP/MAMP control panel.

🗄 Database Setup
Open phpMyAdmin → http://localhost/phpmyadmin

Create a database named store

Import the store.sql file:

Click Import → Choose store.sql → Click Go

Database Tables
Table	Description
products	Stores ice cream product info
review	Stores customer reviews
contact	Stores contact form submissions
🔧 Configuration
If your MySQL credentials differ from default, update them in these files:

index.php, review.php, contact.php

php
$servername = "localhost";
$username   = "root";     // Your MySQL username
$password   = "";         // Your MySQL password
$dbname     = "store";
🚀 Usage
Open your browser and go to:

text
http://localhost/icestore/index.html
Browse products, read reviews, and place orders.

Contact form submissions are saved to the contact table in the DB.

🔌 API Endpoints
Method	Endpoint	Description
GET	/index.php	Fetch all products
GET	/review.php	Fetch all reviews
POST	/contact.php	Submit contact form
Sample Response – index.php
json
[
  {
    "id": 1,
    "name": "Assorted Ice Cream Platter",
    "about": "Lorem ipsum dolor sit amet...",
    "price": 10,
    "quantity": 5,
    "image": "product1.jpg",
    "rate": 5
  }
]


**👨‍💻 Author
MIFLA MAKEEN**

**📞 +94 76 615 4455**

🌐 GitHub: @your-username

📄 License
This project is licensed under the MIT License – feel free to use and modify it.

🙏 Acknowledgements
Font Awesome for icons

XAMPP for local development environment

All contributors and testers
