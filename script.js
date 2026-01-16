// 🌙 DARK MODE
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// 🔍 SEARCH
const search = document.getElementById("search");
const stories = document.querySelectorAll("#storyList li");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  stories.forEach(story => {
    story.style.display = story.textContent.toLowerCase().includes(value)
      ? "list-item"
      : "none";
  });
});

// 🔥 SLIDER HOT
let index = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);
