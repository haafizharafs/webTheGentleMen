let currentIndex = 0;

function changeImageAutomaticallyHorizontal() {
    const imageContainer = document.querySelector('.top-right-about-images');
    const images = imageContainer.querySelectorAll('img');

    setInterval(() => {
       images[currentIndex].classList.add('hidden');
       currentIndex = (currentIndex + 1) % images.length;
       images[currentIndex].classList.remove('hidden'); 
    }, 3000);
}

changeImageAutomaticallyHorizontal();