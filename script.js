const galleryItems = document.querySelectorAll('.gallery-item');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;
const images = Array.from(galleryItems).map(item => item.src);

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        overlay.style.display = 'flex';
        overlayImg.src = images[currentIndex];
    });
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    overlayImg.src = images[currentIndex];
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    overlayImg.src = images[currentIndex];
});

// Toggle images using arrow keys
document.addEventListener('keydown', (event) => {
    if (overlay.style.display === 'flex') {
        if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            overlayImg.src = images[currentIndex];
        } else if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            overlayImg.src = images[currentIndex];
        }
    }
});

// Close the overlay when clicking outside the image
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
});


// 
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
}
