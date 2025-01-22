// TODO: add an event listener to the .box element that toggles the .red class
const box = document.querySelector('.box')

box.addEventListener('click', () => {
    box.classList.toggle('red');
});
