function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorText = document.querySelector(".color");

document.querySelector(".change-color").addEventListener("click", () => {
  const randhex = getRandomHexColor();
  document.body.style.backgroundColor = randhex;
  colorText.textContent = randhex;
});
