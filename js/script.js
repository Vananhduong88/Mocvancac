/* ===== DARK MODE ===== */
const toggle = document.getElementById("darkToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
};

/* ===== SLIDER PAUSE ON HOVER ===== */
const track = document.querySelector(".slide-track");
track.addEventListener("mouseenter", () => {
  track.style.animationPlayState = "paused";
});
track.addEventListener("mouseleave", () => {
  track.style.animationPlayState = "running";
});

/* ===== MOBILE MENU ===== */
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

if(menuToggle){
  menuToggle.onclick = () => mobileMenu.classList.add("show");
}
if(closeMenu){
  closeMenu.onclick = () => mobileMenu.classList.remove("show");
}
