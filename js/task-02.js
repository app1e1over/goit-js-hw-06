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
  return item;
}
function fillIngredients() {
  const container = document.querySelector("ul#ingredients");

  ingredients.forEach((ing) => {
    container.append(createIngridientItem(ing));
  });
}
fillIngredients();
