const lockscreen = document.getElementById("lockscreen");
const content = document.getElementById("content");
const music = document.getElementById("music");
const counter = document.getElementById("counter");

const startDate = new Date("2024-05-17T00:00:00");

lockscreen.addEventListener("click", () => {
  lockscreen.style.display = "none";
  content.classList.remove("hidden");
  music.play();
  updateCounter();
  setInterval(updateCounter, 1000);
});

function updateCounter() {
  const now = new Date();
  let diff = Math.floor((now - startDate) / 1000);

  const seconds = diff % 60;
  diff = Math.floor(diff / 60);
  const minutes = diff % 60;
  diff = Math.floor(diff / 60);
  const hours = diff % 24;
  diff = Math.floor(diff / 24);

  const days = diff % 30;
  const months = Math.floor(diff / 30) % 12;
  const years = Math.floor(diff / 365);

  counter.innerHTML = `
    Mi amor por ti comenzó hace…<br>
    <strong>${years}</strong> años,
    <strong>${months}</strong> meses,
    <strong>${days}</strong> días<br>
    <strong>${hours}</strong> horas,
    <strong>${minutes}</strong> minutos,
    <strong>${seconds}</strong> segundos 💕
  `;
}
