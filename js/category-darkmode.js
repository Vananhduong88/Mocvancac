/* =================================
   CATEGORY PAGE – SAFE SCRIPT
   Không phá darkmode
   Không ảnh hưởng trang chủ
================================ */

function initCategoryHeader() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const closeBtn = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const darkToggle = document.getElementById("darkToggle");

  /* ===== MOBILE MENU ===== */
  if (menuBtn && mobileMenu) {
    menuBtn.onclick = function () {
      mobileMenu.classList.add("show");
      document.body.style.overflow = "hidden";
    };
  }

  if (closeBtn && mobileMenu) {
    closeBtn.onclick = function () {
      mobileMenu.classList.remove("show");
      document.body.style.overflow = "";
    };
  }

  /* ===== DARK MODE ===== */
  if (darkToggle) {
    darkToggle.onclick = function () {
      document.body.classList.toggle("darkmode");

      darkToggle.textContent = document.body.classList.contains("darkmode")
        ? "☀️"
        : "🌙";

      localStorage.setItem(
        "theme",
        document.body.classList.contains("darkmode") ? "dark" : "light"
      );
    };
  }
}

/* ⏳ ĐỢI HEADER LOAD XONG */
const waitHeader = setInterval(() => {
  if (document.getElementById("mobileMenuBtn")) {
    initCategoryHeader();
    clearInterval(waitHeader);
  }
}, 50);

/* ===== RESTORE DARK MODE ===== */
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("darkmode");
}
