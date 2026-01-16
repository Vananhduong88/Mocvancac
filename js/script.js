// DARK MODE
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// PAUSE SLIDE ON HOVER
const track = document.querySelector(".slide-track");

track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
});

track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
});
<script>
document.querySelector('.dropdown > a').addEventListener('click', function(e){
  e.preventDefault();
  this.parentElement.classList.toggle('open');
});
</script>
<script>
const toggle = document.querySelector('.menu-toggle');
const dropdown = document.querySelector('.dropdown');
const closeBtn = document.querySelector('.close-menu');

toggle.addEventListener('click', e => {
  e.preventDefault();
  dropdown.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  dropdown.classList.remove('open');
});
</script>
