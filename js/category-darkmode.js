/* =================================
   DARK MODE – CATEGORY & STORY PAGE
   Không ảnh hưởng trang chủ
================================= */

/* CLICK DARK MODE – CHỈ GẮN VÀO NÚT */
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkToggle");
  if (!toggle) return;

  toggle.addEventListener("click", function (e) {
    e.stopPropagation(); // ⛔️ KHÔNG cho ảnh hưởng menu

    document.body.classList.toggle("darkmode");

    toggle.textContent = document.body.classList.contains("darkmode")
      ? "☀️"
      : "🌙";

    localStorage.setItem(
      "theme",
      document.body.classList.contains("darkmode") ? "dark" : "light"
    );
  });
});

/* KHÔI PHỤC DARK MODE KHI LOAD TRANG */
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("darkmode");

    const waitToggle = setInterval(() => {
      const toggle = document.getElementById("darkToggle");
      if (toggle) {
        toggle.textContent = "☀️";
        clearInterval(waitToggle);
      }
    }, 50);
  }
});
