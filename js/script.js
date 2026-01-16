// DARK MODE
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// SLIDER
const slides = document.querySelector(".slides");
let index = 0;

setInterval(() => {
  index++;
  if (index > 4) index = 0;
  slides.style.transform = `translateX(-${index * 235}px)`;
}, 3000);
