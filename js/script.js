document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach(item => {
    const title = item.querySelector(".menu-title");

    if (!title) return;

    /* DESKTOP: hover */
    item.addEventListener("mouseenter", () => {
      item.classList.add("show");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("show");
    });

    /* MOBILE: click */
    title.addEventListener("click", (e) => {
      e.preventDefault();

      menuItems.forEach(i => {
        if (i !== item) i.classList.remove("show");
      });

      item.classList.toggle("show");
    });
  });

  /* CLICK RA NGOÀI -> ĐÓNG MENU */
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-item")) {
      menuItems.forEach(i => i.classList.remove("show"));
    }
  });
});
