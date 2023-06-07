// First
//
// function moveBlock(position, direction) {
//     const smallBlock = document.getElementById('small-block');
//     const parentWidth = document.getElementById('big-block').offsetWidth;
//     const blockWidth = smallBlock.offsetWidth;
//
//     smallBlock.style.left = position + 'px';
//
//     if (position <= 0) {
//         direction = 1; // Изменяем направление движения на вправо
//     } else if (position >= parentWidth - blockWidth) {
//         direction = -1; // Изменяем направление движения на влево
//     }
//
//     requestAnimationFrame(() => moveBlock(position + direction, direction));
// }
//
// moveBlock(0, 1);
//


// Second

// let counter = 0;
// let intervalId = null;
//
// const counterElement = document.getElementById('counter');
//
// const startCounter = () => {
//     if (!intervalId) intervalId = setInterval(() => counterElement.innerText = ++counter, 1000);
// };
//
// const stopCounter = () => {
//     clearInterval(intervalId);
//     intervalId = null;
// };
//
// const resumeCounter = () => startCounter();
//
// const clearCounter = () => {
//     counter = 0;
//     stopCounter();
//     counterElement.innerText = counter;
// };