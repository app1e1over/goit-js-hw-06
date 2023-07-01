function getHeaderOfCategory(elem) {
  return elem.querySelector("h2").textContent;
}
function getElementsOfCategory(elem) {
  return elem.querySelectorAll("ul li");
}
function list(separate) {
  const categories = document.querySelectorAll("li.item");
  let res = "";
  let catLenMes = "Number of categories: " + categories.length;
  if (separate) console.log(catLenMes);
  else res += catLenMes + "\n";

  categories.forEach((elem) => {
    let catmes =
      "Category: " +
      getHeaderOfCategory(elem) +
      "\n" +
      "Elements: " +
      getElementsOfCategory(elem).length;
    if (separate) console.log(catmes);
    else res += catmes + "\n";
  });
  if (!separate) console.log(res);
}
list(false);
list(true);
