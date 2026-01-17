/* =================================================
   SCRIPT.JS – MỘC VĂN CÁC
   Tương thích header/footer dùng chung (fetch)
================================================= */

/* ================= DARK MODE ================= */
document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "darkToggle") {
    document.body.classList.toggle("dark");

    // đổi icon
    e.target.textContent =
      document.body.classList.contains("dark") ? "☀️" : "🌙";

    // lưu trạng thái
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  }
});

/* Khôi phục dark mode khi reload */
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");

    // header load sau → đợi DOM gắn xong
    setTimeout(function () {
      const toggle = document.getElementById("darkToggle");
      if (toggle) toggle.textContent = "☀️";
    }, 100);
  }
});

/* ================= MOBILE MENU ================= */
document.addEventListener("click", function (e) {
  const mobileMenu = document.getElementById("mobileMenu");
  if (!mobileMenu) return;

  // mở menu
  if (e.target.id === "mobileMenuBtn") {
    mobileMenu.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  // đóng menu
  if (e.target.id === "closeMenu") {
    mobileMenu.classList.remove("show");
    document.body.style.overflow = "";
  }
});

/* ================= SLIDER PAUSE ================= */
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".slide-track");
  if (!track) return;

  function pause() {
    track.style.animationPlayState = "paused";
  }

  function play() {
    track.style.animationPlayState = "running";
  }

  track.addEventListener("mouseenter", pause);
  track.addEventListener("mouseleave", play);

  // mobile touch
  track.addEventListener("touchstart", pause);
  track.addEventListener("touchend", play);
});
