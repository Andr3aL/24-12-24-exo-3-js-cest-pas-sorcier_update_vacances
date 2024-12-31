// Déclarer les éléments
const darkmodeSwtich = document.getElementById("flexSwitchCheckDefault");
const body = document.getElementsByTagName("body");
const nav = document.getElementsByTagName("nav");
const playCarousel = document.getElementById("playCarousel");
const stopCarousel = document.getElementById("stopCarousel");

const myCarouselPhoto = document.querySelector("#carouselPhoto");
const carouselRide = new bootstrap.Carousel(myCarouselPhoto, {
  interval: 1000,
  touch: false,
});

// Déclarer les fonctions

function autoPlay() {
  stopCarousel.classList.remove("hidden");
  playCarousel.classList.add("hidden");
  carouselRide.cycle();
}

function autoPlayStop() {
  playCarousel.classList.remove("hidden");
  stopCarousel.classList.add("hidden");
  carouselRide.pause();
}

stopCarousel.addEventListener("click", autoPlayStop);
playCarousel.addEventListener("click", autoPlay);

// const DARKMODE = () => {
//   //   body.classList.toggle("dark");
// };
