// TODO: get a reference to the .box element and log it to the console
const box = document.querySelector('.box')

// TODO: add an event listener to the .box element that toggles the .left class
box.addEventListener('click', () => {
  box.classList.toggle('left')
})

// TODO: get a reference to the #button, #txt and #output
const btn = document.querySelector('button')
const txt = document.querySelector('#txt')
const output = document.querySelector('#output')

// TODO: add an event listener to the #button that changes the text in #output to the lowercase value of #txt
btn.addEventListener('click', () => {
  output.innerText = txt.value.toLowerCase()
})
