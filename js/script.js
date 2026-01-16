// DARK MODE
const darkToggle = document.getElementById("darkToggle");
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// PAUSE SLIDE ON HOVER
const track = document.querySelector(".slide-track");
if (track) {
  track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });
  track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
}

// MOBILE MENU
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  if (toggle) {
    toggle.addEventListener("click", e => {
      e.preventDefault();
      mobileMenu.classList.add("show");
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
    });
  }
});
