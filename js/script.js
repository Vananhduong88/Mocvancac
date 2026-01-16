// Dark mode
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

const slider = document.getElementById("hotSlider");
let x = 0;

setInterval(() => {
    x += 260;
    if (x >= slider.scrollWidth - slider.clientWidth) x = 0;
    slider.scrollTo({ left: x, behavior: "smooth" });
}, 2500);
