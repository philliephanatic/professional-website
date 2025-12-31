// src/public/js/index.js
document.addEventListener("DOMContentLoaded", () => {
  // LOGO MARQUEE
  const marqueeEl = document.querySelector(".logo-marquee.swiper");
  if (marqueeEl && typeof Swiper !== "undefined") {
    new Swiper(marqueeEl, {
      slidesPerView: "auto",
      spaceBetween: 24,
      loop: true,
      speed: 3000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      allowTouchMove: true,
      grabCursor: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: { spaceBetween: 5, slidesPerView: "auto" },
        768: { spaceBetween: 14 },
        1024: { spaceBetween: 32 },
      },
    });
  }

  // AI CAROUSEL
  const carouselEl = document.querySelector(".ai-carousel.swiper");
  if (carouselEl && !carouselEl.swiper && typeof Swiper !== "undefined") {
    new Swiper(carouselEl, {
      loop: false,
      speed: 450,
      grabCursor: true,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      simulateTouch: true, // enables mouse dragging on desktop
      allowTouchMove: true, // ensures touch/drag is enabled
      touchStartPreventDefault: false, // reduces “nothing happens” issues on some layouts

      // makes trackpad feel more “native”
      freeMode: {
        enabled: true,
        sticky: false,
      },

      // enables horizontal scrolling via mouse wheel / trackpad gestures
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
      },

      breakpoints: {
        0: { slidesPerView: 1.15, spaceBetween: 12 },
        375: { slidesPerView: 1.25, spaceBetween: 12 },
        768: { slidesPerView: 2.25, spaceBetween: 16 },
        1024: { slidesPerView: 3.25, spaceBetween: 18 },
        1440: { slidesPerView: 4, spaceBetween: 18 },
        2000: { slidesPerView: 5, spaceBetween: 20 },
      },

      pagination: {
        el: carouselEl.querySelector(".ai-carousel__pagination"),
        type: "bullets",
        clickable: true,
      },
    });
  }

  // FAQ single open
  const items = document.querySelectorAll(".faq__item");
  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        items.forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });
});
