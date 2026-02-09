const lockscreen = document.getElementById("lockscreen");
const content = document.getElementById("content");
const music = document.getElementById("music");
const counter = document.getElementById("counter");

// Fecha importante
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

  const days = Math.floor(diff / (3600 * 24));
  diff %= 3600 * 24;
  const hours = Math.floor(diff / 3600);
  diff %= 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  counter.innerHTML = `
    Mi amor por ti comenzó hace…<br>
    <strong>${days}</strong> días
    <strong>${hours}</strong> horas
    <strong>${minutes}</strong> minutos
    <strong>${seconds}</strong> segundos
  `;
}
