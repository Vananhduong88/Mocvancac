const darkToggle = document.getElementById("darkToggle");

if (darkToggle) {
  // load trạng thái cũ
  if (localStorage.getItem("darkmode") === "on") {
    document.body.classList.add("darkmode");
  }

  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");

    if (document.body.classList.contains("darkmode")) {
      localStorage.setItem("darkmode", "on");
    } else {
      localStorage.setItem("darkmode", "off");
    }
  });
}
