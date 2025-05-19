let speed = [5.6, 6.8, 6, 7, 7.6, 6, 5, 6.6, 8, 5];
let rain = '';
let number = 5;

for (let i = 0; i < 10; i++) {
    let randomSec = Math.random();
    let duration = speed[i];
    let delay = (Math.floor(randomSec * 1) + 1) + (Math.floor(randomSec * 5));
    console.log(delay)

    rain += `
      <div class="raindrop" style="
        left: ${number}%;
        animation-duration: ${duration}s;
        animation-delay: 0.${delay}s;
      ">&#128151;</div>
    `;
    number += 10;
}

// Add rain effect to the container
document.querySelector('.rain-container').innerHTML = rain;

// Birthday Wish Logic
let info = document.querySelector('.Information');
let image = document.getElementById('cake-image');
let cake_image = [
    'Images/cake_row_4.jpg',
    'Images/cake_row_3.jpg',
    'Images/cake_row_2.jpg',
    'Images/cake_row_1.jpg'
];
let index = 0;
let cake = document.getElementsByClassName('Birthday_cake')[0];
let kavithai = document.querySelector('.kavithai-section');
let photo = document.querySelector('.photos-container');

// Show cake section
function magic() {
    cake.style.display = 'block';
}

// Handle candle light click
function light_off() {
    image.src = cake_image[index];
    index++;
    if (index === cake_image.length) {
        info.style.display = 'none';
        cake.style.display = 'none';
        kavithai.style.display = 'block';
    }
}

// Show photo section
function main_gift() {
    kavithai.style.display = 'none';
    photo.style.display = 'block';
}
