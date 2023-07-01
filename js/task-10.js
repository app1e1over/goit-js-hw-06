function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("#boxes");
const number = document.querySelector("[type=number]");
function createBoxes(amount) {
  destroyBoxes();
  createBox(30, 30, 10, amount);
}
function createBox(width, height, step, amountleft) {
  if (amountleft <= 0) {
    return;
  }
  const box = document.createElement("div");
  box.style.width = width + "px";
  box.style.height = height + "px";
  box.style.backgroundColor = getRandomHexColor();
  boxes.append(box);
  createBox(width + step, height + step, step, amountleft - 1);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

document.querySelector("[data-create]").addEventListener("click", () => {
  createBoxes(number.value);
});
document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
