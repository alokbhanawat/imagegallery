let currentIndex = 0;

function showImage(index) {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery img');
    const imageWidth = images[0].clientWidth;
    gallery.style.transform = `translateX(${-index * imageWidth}px)`;
}

function prevImage() {
    const images = document.querySelectorAll('.gallery img');
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
}

function nextImage() {
    const images = document.querySelectorAll('.gallery img');
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}

// Initially show the first image
showImage(currentIndex);
