const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
  const txt = document.querySelector('#txt').value
  const output = document.querySelector('#output')
  output.innerText = txt.toUpperCase()
})
