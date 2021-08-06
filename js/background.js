const images = ["0.jpg", "1.jpg", "2.jpg",];

const todaysImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("#bg-image");

bgImage.src = `img/${todaysImage}`;

document.body.appendChild(bgImage);