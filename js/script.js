// DARK MODE
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// SLIDER HOT AUTO
const slider = document.getElementById("hotSlider");
let scrollAmount = 0;

setInterval(() => {
  scrollAmount += 240;
  if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0;
  }
  slider.scrollTo({
    left: scrollAmount,
    behavior: "smooth"
  });
}, 3000);
