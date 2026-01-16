// DARK MODE
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// PAUSE SLIDE ON HOVER
const track = document.querySelector(".slide-track");

track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
});

track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
});
  if (toggle) {
    toggle.addEventListener("click", (e) => {
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
