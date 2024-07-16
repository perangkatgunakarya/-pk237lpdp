
const proudlyPresentContainer = document.querySelector(
  ".proudly-present-container"
);
const logoName = document.querySelector(
  ".splashscreen-logo-name"
);
const splashscreen = document.querySelector(".splashscreen");
const bgSplashscreen = document.querySelector(".bg-splashscreen");

const proudlyPresentTitle = document.querySelector(".proudly-present-logo");

setTimeout(() => {
  proudlyPresentContainer.classList.remove("opacity-0");
  proudlyPresentContainer.classList.add("opacity-100");
	bgSplashscreen.classList.remove("active");
}, 50);

setTimeout(() => {
  splashscreen.classList.remove("active");
}, 700);

// proudly-present-appear
setTimeout(() => {
  proudlyPresentTitle.classList.remove("opacity-0");
  proudlyPresentTitle.classList.add("opacity-100");
}, 50);

setTimeout(() => {
  proudlyPresentTitle.classList.remove("active");
  // proudlyPresentTitle.classList.add("right-1/4");
}, 1000);

// // proudly-present-appear
// setTimeout(() => {
//   proudlyPresentTitle.classList.remove("opacity-0");
//   proudlyPresentTitle.classList.add("opacity-100");
// }, 50);

// proudly-present-disappear
// setTimeout(() => {
//   proudlyPresentTitle.classList.remove("opacity-100");
//   proudlyPresentTitle.classList.add("opacity-0");
// }, 2000);

setTimeout(() => {
  proudlyPresentContainer.classList.add("hidden");
}, 2500);

const startAnimationBg = document.querySelector(".start-animation-bg");
const lightBg = document.querySelector(".light-bg");
setTimeout(() => {
  startAnimationBg.classList.add("hidden");
  lightBg.classList.add("opacity-0");
}, 3000);

setTimeout(() => {
  lightBg.classList.add("hidden");
}, 3200);
