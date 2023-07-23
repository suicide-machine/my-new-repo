// Creating an element

// select parent element
const ul = document.querySelector('ul')

// create li item
const li = document.createElement('li')

ul.append(li)

// const firstListItem = document.querySelector('.listitems')
// console.log(firstListItem)
// console.log(firstListItem.innerText)
// console.log(firstListItem.textContent)
// console.log(firstListItem.innerHTML)

li.innerText = 'Dark Matter'

// Modifying Classes and Attributes

// li.setAttribute('id', 'dark-matter')
// li.removeAttribute('id')

// getAttribute()
// const title = document.querySelector('#book')
// console.log(title.getAttribute('id'))

li.classList.add('listitems')
li.classList.remove('listitems')

console.log(li.classList.contains('listitems'))

li.remove()
