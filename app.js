// app.js

// JavaScript functionality for car listings

// Sample data for car listings
const cars = [
    { id: 1, name: 'BMW', image: 'images/car1.jpg', price: 5500}
];

// Function to display car listings
function displayCars(carArray) {
    const carContainer = document.getElementById('carListings');
    carContainer.innerHTML = '';
    carArray.forEach(car => {
        const carElement = document.createElement('div');
        carElement.classList.add('car-item');
        carElement.innerHTML = `<h3>${car.name}</h3>\n        <img src='${car.image}' alt='${car.name}' />\n        <p>Price: $${car.price}</p>`;
        carContainer.appendChild(carElement);
    });
}

displayCars(cars);

// Funcitonality for search filter
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    const filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    displayCars(filteredCars);
});

// Image gallery functionality
const galleryImages = document.querySelectorAll('.gallery img');
const mainImage = document.getElementById('main-image');

galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        mainImage.src = img.src;
    });
});

// Contact form functionality
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

