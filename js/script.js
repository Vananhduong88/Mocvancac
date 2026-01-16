// Dark mode
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Auto slider
const slider = document.getElementById("hotSlider");
let scrollX = 0;

setInterval(() => {
  scrollX += 210;
  if (scrollX >= slider.scrollWidth) scrollX = 0;
  slider.scrollTo({ left: scrollX, behavior: "smooth" });
}, 2500);
