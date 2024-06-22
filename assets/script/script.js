const circle = document.getElementById('circle');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const hiddenButton = document.getElementById('hidden-button');

let startX, startY, endX, endY;
let isDragging = false;
let rotation = 0;
let prevRotation = 0;

circle.addEventListener('mousedown', (e) => {
  startX = e.clientX;
  startY = e.clientY;
  isDragging = true;
});

circle.addEventListener('mousemove', (e) => {
  if (isDragging) {
    endX = e.clientX;
    endY = e.clientY;
    const angle = Math.atan2(endY - startY, endX - startX);
    const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
    if (distance > 20) { // adjust the distance threshold to your needs
      isDragging = false;
    }
    rotation = (angle * 180) / Math.PI;
    circle.style.transform = `rotate(${rotation}deg)`;
    if (rotation > prevRotation) {
      // Clockwise rotation
      hiddenButton.value = 'button1';
    } else if (rotation < prevRotation) {
      // Anticlockwise rotation
      hiddenButton.value = 'button2';
    }
    prevRotation = rotation;
  }
});

circle.addEventListener('mouseup', () => {
  if (hiddenButton.value === 'button1') {
    button1.click(); // simulate a click on button 1
  } else if (hiddenButton.value === 'button2') {
    button2.click(); // simulate a click on button 2
  }
  isDragging = false;
});

// button1.addEventListener('click', () => {
//   alert('Button 1 pressed!');
// });

// button2.addEventListener('click', () => {
//   alert('Button 2 pressed!');
// });