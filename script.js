document.getElementById("showLove").addEventListener("click", () => {
  document.querySelector(".surprise").classList.remove("hidden");
  document.querySelector(".carousel").classList.remove("hidden");
  startConfetti();
});

const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let current = 0;
const img = document.getElementById("carousel-img");

function nextPhoto() {
  current = (current + 1) % photos.length;
  img.src = photos[current];
}

function prevPhoto() {
  current = (current - 1 + photos.length) % photos.length;
  img.src = photos[current];
}

function startConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDelay = Math.random() * 3 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}
