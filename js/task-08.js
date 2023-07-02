const form = document.querySelector(".login-form");
const fields = form.elements.length - 1;

document
  .querySelector(".login-form [type=submit]")
  .addEventListener("click", (e) => main(e))
    

function main(e){
  e.preventDefault();
  const obj = {};
  const inputs = form.getElementsByTagName("input");
  let el = inputs.item(0);
  let i = 0;
  while (el != null) {
    let val = el.value;
    let name = el.getAttribute("name");
    if (val.length === 0) {
      alert(name + " cant be empty");
      return;
    }
    obj[name] = val;
    el = inputs.item(i++);
  }

  for (let j = 0; j < i - 1; j++) {
    inputs.item(j).value = "";
  }
  console.log(obj);
}
 
function alt(e) {
  e.preventDefault();

  const elements = form.elements;

  const email = elements["email"];
  const password = elements["password"];

  if(email.value.length === 0 ){
    alert("email mustn't be empty");
    return;
  }
  if(password.value.length === 0 ){
    alert("password mustn't be empty");
    return;
  }
  email.value = "";
  password.value = "";
  console.log({
    email:email,
    password: password
  })

}
//я написав два розв'язки, адже хоча перший(main) має в теорії підходити на довільну к-сть інпутів, він не використовує поле елементс, тож другий(alt) 
//реалізує завдання через імена полів та поле елементс, без використання їх цифрових айді, які, як ви зазначили, не варто використовувати