

var slider = document.querySelectorAll('.slide');
var currentIndex = 0;
var intervalTime = 3000; 

slider.forEach(
    (slide) => {
        slide.addEventListener('click', () => {
            removeActiveClasses();
            slide.classList.add('active');
            currentIndex = Array.from(slider).indexOf(slide); 
        });
    }
);

function removeActiveClasses() {
    slider.forEach(
        (slide) => {
            slide.classList.remove('active');
        }
    );
}

function showNextSlide() {
    removeActiveClasses();
    currentIndex = (currentIndex + 1) % slider.length; 
    slider[currentIndex].classList.add('active');
}

setInterval(showNextSlide, intervalTime);
