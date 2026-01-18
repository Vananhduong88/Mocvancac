/* =================================
   DARK MODE – CATEGORY & STORY PAGE
   Không ảnh hưởng trang chủ
================================= */

// CLICK DARK MODE (header load bằng fetch vẫn OK)
document.addEventListener("click", function (e) {
  const toggle = e.target.closest("#darkToggle");
  if (!toggle) return;

  document.body.classList.toggle("darkmode");

  // đổi icon
  toggle.textContent = document.body.classList.contains("darkmode")
    ? "☀️"
    : "🌙";

  // lưu trạng thái
  localStorage.setItem(
    "theme",
    document.body.classList.contains("darkmode") ? "dark" : "light"
  );
});

// KHÔI PHỤC DARK MODE KHI LOAD TRANG
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("darkmode");

    // header load sau → chờ rồi đổi icon
    const waitToggle = setInterval(() => {
      const toggle = document.getElementById("darkToggle");
      if (toggle) {
        toggle.textContent = "☀️";
        clearInterval(waitToggle);
      }
    }, 50);
  }
});
