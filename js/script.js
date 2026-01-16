const toggle = document.getElementById("darkToggle");

toggle.onclick = () => {
  document.body.classList.toggle("dark");
};
<script>
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".hot-track");
    const cards = document.querySelectorAll(".story-card");

    const visible = 4;
    const cardWidth = cards[0].offsetWidth + 20;
    let index = 0;

    setInterval(() => {
        index++;
        if (index > cards.length - visible) {
            index = 0;
        }
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }, 3000);
});
</script>
