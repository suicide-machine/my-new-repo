// Event Propagation

window.addEventListener(
  'click',
  function () {
    console.log('Window')
  },
  true
)

document.addEventListener(
  'click',
  function () {
    console.log('document')
  },
  true
)

document.querySelector('.div1').addEventListener(
  'click',
  function (e) {
    e.stopPropagation()
    console.log('DIV 1')
  },
  { once: true }
)

document.querySelector('.div2').addEventListener(
  'click',
  function () {
    console.log('DIV 2')
  },
  true
)

document.querySelector('.button').addEventListener(
  'click',
  function (e) {
    e.preventDefault()
    console.log((e.target.innerText = 'Clicked'))
  },
  true
)
