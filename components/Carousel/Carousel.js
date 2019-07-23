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
    <div class="left-button"> 
      <i class="material-icons">keyboard_arrow_left</i>
    </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> 
      <i class="material-icons">keyboard_arrow_right</i> 
    </div>
  </div>
*/

const Carousel = () => {
  const mount = document.querySelector('.carousel-container');

  // Create div.carousel
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  // Create div.left-button, append to carousel. "<" or Icon.
  const leftButton = document.createElement('div');
  const leftButtonIcon = document.createElement('i');
  leftButton.classList.add('left-button');
  leftButtonIcon.classList.add('material-icons');
  leftButtonIcon.textContent = 'keyboard_arrow_left';
  leftButton.appendChild(leftButtonIcon);
  carousel.appendChild(leftButton);
  leftButton.addEventListener('click', (e) => advanceCarousel(-1))

  // Create img src="./assets/carousel/mountains.jpeg", append to carousel.
  const img1 = document.createElement('img');
  img1.src = './assets/carousel/mountains.jpeg';
  carousel.appendChild(img1);
  img1.style.display = 'flex';

  // Create img src="./assets/carousel/computer.jpeg", append to carousel.
  const img2 = document.createElement('img');
  img2.src = './assets/carousel/computer.jpeg';
  carousel.appendChild(img2);

  // Create img src="./assets/carousel/trees.jpeg", append to carousel.
  const img3 = document.createElement('img');
  img3.src = './assets/carousel/trees.jpeg';
  
  carousel.appendChild(img3);

  // Create img src="./assets/carousel/turntable.jpeg", append to carousel.
  const img4 = document.createElement('img');
  img4.src = './assets/carousel/turntable.jpeg';
  carousel.appendChild(img4);

  // Create div.right-button, append to carousel. ">" or Icon.
  const rightButton = document.createElement('div');
  const rightButtonIcon = document.createElement('i');
  rightButton.classList.add('right-button');
  rightButtonIcon.classList.add('material-icons');
  rightButtonIcon.textContent = 'keyboard_arrow_right';
  rightButton.appendChild(rightButtonIcon);
  carousel.appendChild(rightButton);
  rightButton.addEventListener('click', (e) => advanceCarousel(1))

  mount.appendChild(carousel);
}

Carousel();

const images = [...document.querySelectorAll('.carousel img')];
let index = 0

const advanceCarousel = (value) => {
  images.forEach((image) => {image.style.display = 'none'});
  index += value;
  if(index > images.length - 1) index = 0;
  else if(index < 0) index = images.length - 1;

  images[index].style.display = "flex";
}