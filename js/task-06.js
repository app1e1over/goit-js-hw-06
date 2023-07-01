const input = document.querySelector("#validation-input");
input.addEventListener("blur", (e) => {
    //input = e.target (якщо понад 1 інпут в теорії)
  const len = input.value.length;
  const reqlen = input.dataset.length;
  input.classList.remove(len != reqlen ? "valid" : "invalid")
  input.classList.add(len == reqlen ? "valid" : "invalid");
});
