// DARK MODE
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// SLIDER
const track = document.getElementById("sliderTrack");
let index = 0;

setInterval(() => {
  index++;
  if(index > 4) index = 0;
  track.style.transform = `translateX(${-index * 280}px)`;
}, 3000);
