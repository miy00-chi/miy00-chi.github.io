const boxes = document.querySelectorAll('.box');
const buttons = document.querySelectorAll('button');
let currentBox = null;
let previousBox = null;

function slideBox(newBox) {
  if (currentBox && currentBox !== newBox) {
    previousBox = currentBox; 

    setTimeout(() => {
      previousBox.classList.remove('slide-down');
      previousBox.classList.add('slide-up');
      previousBox.classList.remove('border-only');
    }, 250); 

  }

  newBox.classList.remove('slide-up');
  newBox.classList.add('slide-down');

  setTimeout(() => {
    newBox.classList.add('border-only');
  }, 800);

  currentBox = newBox;
}

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const targetBox = document.getElementById(`box${index + 1}`);
    slideBox(targetBox);
  });
});