const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
function createImageElement(image) {
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;

  li.append(img);
  return li;
}
function fillImages() {
  const container = document.querySelector("ul.gallery");
  if(!images.length)
    return;
  let snake = createImageElement(images[0]);
  container.append(snake);

  for (let i = images.length-1; i >=1 ; i-- ) {
    const img = images[i];
    snake.insertAdjacentElement("afterend", createImageElement(img))
    
  }
}
fillImages();