const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
function createIngridientItem(text, classname = "item") {
  let item = document.createElement("li");
  item.textContent = text;
  item.classList.add(classname);
  return item.outerHTML;
}
function fillIngredients() {
  const container = document.querySelector("ul#ingredients");
  container.innerHTML=ingredients.map(ing=>createIngridientItem(ing)).join("");
}
fillIngredients();
