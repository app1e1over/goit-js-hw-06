const form = document.querySelector(".login-form");
const fields = form.elements.length - 1;

form.elements[2].addEventListener("click", (e) => {
  e.preventDefault();
  const obj = {};
  for (let i = 0; i < fields; i++) {
    let val = form.elements[i].value;
    let name = form.elements[i].getAttribute("name");
    if (val.length === 0) {
      alert(name + " cant be empty");
      return;
    }
    obj[name] = val;
  }
  console.log(obj);
});
