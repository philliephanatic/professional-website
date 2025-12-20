// src/public/js/index.js
document.addEventListener("DOMContentLoaded", () => {
  const sliderEl = document.querySelector(".logo-marquee__swiper");
  if (!sliderEl || typeof Swiper === "undefined") return;

  // Continuous-style marquee
  new Swiper(".logo-marquee__swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    speed: 3000, // higher = slower scroll because it's the duration
    allowTouchMove: true, // keep it usable on mobile
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: "auto",
      },
      768: {
        spaceBetween: 24,
      },
      1024: {
        spaceBetween: 32,
      },
    },
  });
});

// const swiper = new Swiper('.swiper', {
//   speed: 400,
//   spaceBetween: 100,
// });

// const swiper = document.querySelector('.swiper').swiper;
