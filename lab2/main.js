var timeout;
// Select all slides
const slides = document.querySelectorAll(".slide");
// current slide counter
let curSlide = -1;
// maximum number of slides
let maxSlide = slides.length - 1;
Next();

// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// add event listener and navigation functionality
nextSlide.addEventListener("click", Next);
function Next() {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

  timeout = setTimeout(Next, 2000);
}

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select dots
const dot1 = document.querySelector(".dot1").addEventListener("click", () => {
  curSlide = 0;
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
const dot2 = document.querySelector(".dot2").addEventListener("click", () => {
  curSlide = 1;
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
const dot3 = document.querySelector(".dot3").addEventListener("click", () => {
  curSlide = 2;
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
const dot4 = document.querySelector(".dot4").addEventListener("click", () => {
  curSlide = 3;
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

//pausing the timer
const pause = document.querySelector("#pause");

pause.addEventListener("click", function () {
  clearTimeout(timeout);
});

//playing it again
const play = document.querySelector("#play");

play.addEventListener("click", function () {
  timeout = setTimeout(Next, 2000);
});
