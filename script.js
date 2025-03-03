let images = document.querySelectorAll('.image-container img');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let currentIndex = 0;

images[0].classList.add('active');

prevButton.addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('active');
});

nextButton.addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
});
