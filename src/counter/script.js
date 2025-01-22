// TODO: increment and decrement the c/ount when the buttons are clicked

document.addEventListener('DOMContentLoaded', () => {
    const countElement = document.getElementById('count');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    let count = 0;

    incrementButton.addEventListener('click', () => {
        count++;
        countElement.textContent = count;
    });

    decrementButton.addEventListener('click', () => {
        count--;
        countElement.textContent = count;
    });
});
