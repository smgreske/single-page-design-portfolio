const imageMargin = 30;

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
var imageWidth = slides[0].clientWidth + imageMargin;
const buttonLeft = document.querySelector('.carousel-button-left');
const buttonRight = document.querySelector('.carousel-button-right');

//gets index of the current slide

const updateCurrentSlide = (slideArray) => {
  let foundIndex = 0;
  slideArray.forEach((element, index) => {
    if (element.classList.contains('current-slide')) {
      foundIndex = index;
    }
  })
  return foundIndex;
}

//sets horizontal position of the track

const setTrackPosition = (imageWidth) => {
  track.style.left = (-imageWidth*currentSlide) - .5*(imageWidth - imageMargin) + 'px';
}

//positions images inside of track

const positionImages = (slideArray) => {
  slideArray.forEach((element, index) => {
    element.style.left = imageWidth*index + 'px';
  })
}

positionImages(slides);
let currentSlide = updateCurrentSlide(slides);
setTrackPosition(imageWidth, currentSlide);

//right button event listener

buttonRight.addEventListener('click', e => {
  slides[currentSlide].nextElementSibling.classList.add('current-slide');
  slides[currentSlide].classList.remove('current-slide');
  currentSlide = updateCurrentSlide(slides);
  setTrackPosition(imageWidth, currentSlide);
})

//left button event listener

buttonLeft.addEventListener('click', e => {
  slides[currentSlide].previousElementSibling.classList.add('current-slide');
  slides[currentSlide].classList.remove('current-slide');
  currentSlide = updateCurrentSlide(slides);
  setTrackPosition(imageWidth, currentSlide);
})

//window resize event listener

addEventListener('resize', () => {
  imageWidth = slides[0].clientWidth + imageMargin;
  positionImages(slides);
  setTrackPosition(imageWidth, currentSlide);
})