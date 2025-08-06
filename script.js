const track = document.getElementById("sliderTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const elementCount = document.getElementById("count");

const slideWidth = 414;
const totalSlides = 6;
const visibleSlides = 3;

let position = 0;
let direction = 1;

// nextBtn.addEventListener("click", () => {
//   if (position > -(slideWidth * (totalSlides - visibleSlides))) {
//     position -= slideWidth;
//     track.style.transform = `translateX(${position}px)`;
//     elementCount.textContent = position / -slideWidth + visibleSlides;
//   }
// });

// prevBtn.addEventListener("click", () => {
//   if (position < 0) {
//     position += slideWidth;
//     track.style.transform = `translateX(${position}px)`;
//     elementCount.textContent = position / -slideWidth + visibleSlides;
//   }
// });

function updatePosition() {
  track.style.transform = `translateX(${position}px)`;
  elementCount.textContent = position / -slideWidth + visibleSlides;
}

nextBtn.addEventListener("click", () => {
  if (position > -(slideWidth * (totalSlides - visibleSlides))) {
    position -= slideWidth;
    updatePosition();
  }
});

prevBtn.addEventListener("click", () => {
  if (position < 0) {
    position += slideWidth;
    updatePosition();
  }
});

setInterval(() => {
  if (position <= -(slideWidth * (totalSlides - visibleSlides))) {
    direction = -1;
  } else if (position >= 0) {
    direction = 1;
  }

  if (direction === 1) {
    nextBtn.click();
  } else {
    prevBtn.click();
  }
}, 4000);

const prevBtnMobile = document.getElementById("prevBtnMobile");
const nextBtnMobile = document.getElementById("nextBtnMobile");
const element = document.getElementById("countMobile");

const slideWidthMobile = 367;
const totalSlidesMobile = 6;
const visibleSlidesMobile = 1;

let positionMobile = 0;

// nextBtnMobile.addEventListener("click", () => {
//   if (
//     positionMobile >
//     -(slideWidthMobile * (totalSlidesMobile - visibleSlidesMobile))
//   ) {
//     positionMobile -= slideWidthMobile;
//     track.style.transform = `translateX(${positionMobile}px)`;
//     element.textContent =
//       positionMobile / -slideWidthMobile + visibleSlidesMobile;
//   }
// });

// prevBtnMobile.addEventListener("click", () => {
//   if (positionMobile < 0) {
//     positionMobile += slideWidthMobile;
//     track.style.transform = `translateX(${positionMobile}px)`;
//     element.textContent =
//       positionMobile / -slideWidthMobile + visibleSlidesMobile;
//   }
// });

function updatePositionMobile() {
  track.style.transform = `translateX(${positionMobile}px)`;
  element.textContent =
    positionMobile / -slideWidthMobile + visibleSlidesMobile;
}

nextBtnMobile.addEventListener("click", () => {
  if (
    positionMobile >
    -(slideWidthMobile * (totalSlidesMobile - visibleSlidesMobile))
  ) {
    positionMobile -= slideWidthMobile;
    updatePositionMobile();
  }
});

prevBtnMobile.addEventListener("click", () => {
  if (positionMobile < 0) {
    positionMobile += slideWidthMobile;
    updatePositionMobile();
  }
});

setInterval(() => {
  if (
    positionMobile <= -(slideWidthMobile * (totalSlides - visibleSlidesMobile))
  ) {
    direction = -1;
  } else if (positionMobile >= 0) {
    direction = 1;
  }

  if (direction === 1) {
    nextBtnMobile.click();
  } else {
    prevBtnMobile.click();
  }
}, 4000);

const trackStages = document.getElementById("sliderTrackStages");
const prevBtnStages = document.getElementById("prevBtnMobileStages");
const nextBtnStages = document.getElementById("nextBtnMobileStages");

const slideWidthStages = 375;
const totalSlidesStages = 5;
const visibleSlidesStages = 1;

let positionStages = 0;

nextBtnStages.addEventListener("click", () => {
  if (
    positionStages >
    -(slideWidthStages * (totalSlidesStages - visibleSlidesStages))
  ) {
    positionStages -= slideWidthStages;
    trackStages.style.transform = `translateX(${positionStages}px)`;
  }
});

prevBtnStages.addEventListener("click", () => {
  if (positionStages < 0) {
    positionStages += slideWidthStages;
    trackStages.style.transform = `translateX(${positionStages}px)`;
  }
});
