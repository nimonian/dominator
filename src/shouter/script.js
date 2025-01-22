// TODO: get a reference to the #button and #txt and #output
// TODO: add an event listener to the #button that changes the text in #output to the uppercase value of #txt
const btn = document.querySelector('#btn');
const txt = document.querySelector('#txt');
const output = document.querySelector('#output');

btn.addEventListener('click', () => {
    output.textContent = txt.value.toUpperCase();
});
