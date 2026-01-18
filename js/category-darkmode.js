/* =================================
   DARK MODE + FIX MENU MOBILE
   CHỈ DÙNG CHO TRANG DANH MỤC
================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ===== DARK MODE ===== */
  const darkToggle = document.getElementById("darkToggle");

  if (darkToggle) {
    darkToggle.addEventListener("click", function () {
      document.body.classList.toggle("darkmode");

      darkToggle.textContent = document.body.classList.contains("darkmode")
        ? "☀️"
        : "🌙";

      localStorage.setItem(
        "theme",
        document.body.classList.contains("darkmode") ? "dark" : "light"
      );
    });
  }

  /* ===== MOBILE MENU ===== */
  const menuBtn = document.getElementById("mobileMenuBtn");
  const closeBtn = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      mobileMenu.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener("click", function () {
      mobileMenu.classList.remove("show");
      document.body.style.overflow = "";
    });
  }

});
