// src/public/js/index-hero.js
document.addEventListener("DOMContentLoaded", () => {
  const typedTarget = document.querySelector(".hero__typed");
  const typedBase = document.querySelector(".hero__typed-base");
  const stringsElement = document.querySelector("#hero-typed-strings");
  const toggleButton = document.querySelector(".hero__typed-toggle");

  // Guard: ensure everything exists and Typed.js is loaded
  if (!typedTarget || !stringsElement || typeof Typed === "undefined") {
    return;
  }

  // Hide the static base text once JS enhancement is active
  if (typedBase) {
    typedBase.style.visibility = "hidden";
  }

  // Initialize Typed.js and keep a reference to the instance
  const typed = new Typed(".hero__typed", {
    stringsElement: "#hero-typed-strings",
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    startDelay: 200,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: "|",
  });

  // Pause/play control
  if (toggleButton) {
    let isPaused = false;

    toggleButton.addEventListener("click", () => {
      isPaused = !isPaused;

      if (isPaused) {
        // Pause after current frame
        typed.stop();
        toggleButton.textContent = "Play animation";
        toggleButton.setAttribute("aria-pressed", "true");
        toggleButton.setAttribute("aria-label", "Play animated headline");
      } else {
        // Resume typing from where it left off
        typed.start();
        toggleButton.textContent = "Pause animation";
        toggleButton.setAttribute("aria-pressed", "false");
        toggleButton.setAttribute("aria-label", "Pause animated headline");
      }
    });
  }
});
