let counterValue = 0;
const val = document.querySelector("#value");
function handleClick(act) {
  act();
  val.textContent = counterValue;
};

document.querySelectorAll("#counter button").forEach((but) => {
  console.log(but);
  if ((but.dataset.action === "increment")) {
    but.addEventListener(
      "click",
      ()=>handleClick(() => {
        counterValue++;
      })
    );
  } else {
    but.addEventListener(
      "click",
      ()=>handleClick(() => counterValue-- )
    );
  }
});


