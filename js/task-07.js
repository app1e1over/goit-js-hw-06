const text = document.querySelector("#text");
const range = document.querySelector("#font-size-control");

range.addEventListener("input", () => {
  text.style.fontSize = range.value + "px";
});
