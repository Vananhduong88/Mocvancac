/* ================= DARK MODE ================= */
const toggle = document.getElementById("darkToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent =
      document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}

/* ================= SLIDER PAUSE ================= */
const track = document.querySelector(".slide-track");

if (track) {
  track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });

  track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });

  // Mobile touch
  track.addEventListener("touchstart", () => {
    track.style.animationPlayState = "paused";
  });

  track.addEventListener("touchend", () => {
    track.style.animationPlayState = "running";
  });
}

/* ================= MOBILE MENU ================= */
document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      mobileMenu.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
      document.body.style.overflow = "";
    });
  }

});
const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

if(mobileBtn){
  mobileBtn.onclick = function(){
    mobileMenu.classList.add("show");
  }
}

if(closeMenu){
  closeMenu.onclick = function(){
    mobileMenu.classList.remove("show");
  }
}
