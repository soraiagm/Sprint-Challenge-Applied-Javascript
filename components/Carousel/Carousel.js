/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carousel = document.querySelector(".carousel-container");
console.log(carousel);

function carouselComponent() {
  const carouselDiv = document.createElement("div");
  const leftBtn = document.createElement("div");
  const mountainsImg = document.createElement("img");
  const computerImg = document.createElement("img");
  const treesImg = document.createElement("img");
  const turntableImg = document.createElement("img");
  const rightBtn = document.createElement("div");

  carouselDiv.appendChild(leftBtn);
  carouselDiv.appendChild(mountainsImg);
  carouselDiv.appendChild(computerImg);
  carouselDiv.appendChild(treesImg);
  carouselDiv.appendChild(turntableImg);
  carouselDiv.appendChild(rightBtn);
  
  carouselDiv.classList.add("carousel");
  leftBtn.classList.add("left-button")
  rightBtn.classList.add("right-button");

  mountainsImg.src = "./assets/carousel/mountains.jpeg";
  computerImg.src = "./assets/carousel/computer.jpeg";
  treesImg.src = "./assets/carousel/trees.jpeg";
  turntableImg.src = "./assets/carousel/turntable.jpeg"

  return carouselDiv
}

carousel.appendChild(carouselComponent());