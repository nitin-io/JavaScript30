document.addEventListener("keypress", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  if (!audio) return;
  const key = document.querySelector(`div[data-key="${e.key}"]`);
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
  setTimeout(() => {
    key.classList.remove("playing");
  }, 300);
});
