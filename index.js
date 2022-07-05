//declare game state
//grab elements from dom
//add click event listener to both previous and next arrow button
//create a function that moves the visible class from one slide to another

let counter = 0;

const carousel = document.getElementById('carousel');
const prevSlide = document.getElementById('carousel-button-prev');
const nextSlide = document.getElementById('carousel-button-next');
const allSlides = document.getElementsByClassName('carousel-item');
const slideImg = document.querySelectorAll('.carouselImg');
const slideNav = document.querySelectorAll('.slide-nav');

//hides slide
const hideSlideAndActive = () => {
    allSlides[counter].classList.remove('carousel-item-visible');
    allSlides[counter].classList.add('carousel-item-hidden');
    slideNav[counter].classList.remove('active');
};

//show slides
const showSlideAndActive = () => {
    slideNav[counter].classList.add('active');
    allSlides[counter].classList.add('carousel-item-visible');
};

//changes the slide with next button
const goToNextSlide = () => {
    hideSlideAndActive();

    counter++;

    if (counter === allSlides.length) {
        counter = 0;
    }

    showSlideAndActive();
};

//changes the slide with prev button
const goToPrevSlide = () => {
    hideSlideAndActive();

    if (counter === 0) {
        counter = allSlides.length;
    }

    counter--;

    showSlideAndActive();
};

//shows overlay when hovered on
const showOrHideOverlay = () => {
    slideImg.forEach((e) => {
        carousel.addEventListener('mouseenter', () => {
            e.nextElementSibling.style.display = 'flex';
        });
        carousel.addEventListener('mouseleave', () => {
            e.nextElementSibling.style.display = 'none';
        });
    });
};

//makes slide indicators functional on auto slide
const changeSlideWithNav = () => {
    slideNav.forEach((e, index) => {
        e.addEventListener('click', () => {
            hideSlideAndActive();

            counter = index;

            showSlideAndActive();
        });
    });
};

//makes the slides change automatically
function changeSlidesAuto() {
    //makes slides auto
    let carouselTimer = setInterval(() => {
        goToNextSlide();
    }, 2000);

    //pauses scroll on slides on hover
    const pause = () => {
        clearInterval(carouselTimer);
    };

    //resumes scroll on slides
    const resume = () => {
        clearInterval(carouselTimer);
        carouselTimer = setInterval(() => {
            goToNextSlide();
        }, 2000);
    };

    carousel.addEventListener('mouseenter', pause);
    carousel.addEventListener('mouseleave', resume);

    showOrHideOverlay();
    changeSlideWithNav();
}

prevSlide.addEventListener('click', goToPrevSlide);
nextSlide.addEventListener('click', goToNextSlide);
changeSlidesAuto();
