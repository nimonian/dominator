const upBtn = document.querySelector('#increment')
const downBtn = document.querySelector('#decrement')
const count = document.querySelector('#count')

upBtn.addEventListener('click', () => {
  count.innerText = Number(count.innerText) + 1
})

downBtn.addEventListener('click', () => {
  count.innerText = Number(count.innerText) - 1
})
