// src/public/js/index.js
document.addEventListener("DOMContentLoaded", () => {
  const marqueeEl = document.querySelector(".logo-marquee.swiper");
  if (!marqueeEl || typeof Swiper === "undefined") return;

  new Swiper(marqueeEl, {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,

    // "Marquee" feel: delay 0 + higher speed = smoother continuous movement
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false, // UX: lets users inspect logos without motion
    },

    allowTouchMove: true,
    grabCursor: true,

    // Keeps Swiper happy when widths are dynamic (logos vary)
    watchSlidesProgress: true,

    breakpoints: {
      0: {
        spaceBetween: 5,
        slidesPerView: "auto",
      },
      768: {
        spaceBetween: 14,
      },
      1024: {
        spaceBetween: 32,
      },
    },
  });
});
