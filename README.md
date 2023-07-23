Fundamental Knowelge of HTML, CSS and Javascript required

### What is the DOM

Document Object Model
Use it to manipulate Content, Style and Structure
Is one of the most unique and useful tools of javascript

DOM Tree

Setup

index.html

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <h1 id="book">Favorite Book</h1>
      <ul>
        <li class="list-items">5 AM Club</li>
        <li class="list-items">Believe in Yourself</li>
        <li class="list-items">Atomic Habit</li>
        <li class="list-items">The Alchemist</li>
      </ul>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

create a app.js (javascript file)

### DOM Manipulation

GetElementById()

```js
const favouriteBook = document.getElementById('book')
console.log(favouriteBook)
```

GetElementByClass()

```js
const listItems = document.getElementsByClassName('list-items')
console.log(listItems)
```

getElementsByTagName()

```js
const listItems = document.getElementsByTagName('li')
console.log(listItems)
```

querySelector()

-use to select 1 item among several same items
-we can give classname, id or tagname to select specific item

```js
const container = document.querySelector('div')
console.log(container)
```

querySelectorAll()

-use to select all items of same type

```js
const container = document.querySelectorAll('li')
console.log(container)
```

### Styling an element

Style "fovouriteBook" using querySelector()
-these are inline styling

```js
const title = document.querySelector('#book')

title.style.color = 'red'
console.log(title)
```

Style listItems using querySelectorAll()

We cannot do like this:

```js
const listItems = document.querySelectorAll('.list-items')
listItems.style.color = 'red'
```

so use this approach

```js
const listItems = document.querySelectorAll('.list-items')

for (i = 0; i < listItems.length; i++) {
  listItems[i].style.color = 'red'
}
```

### Creating Elements

Done using createElement() method
-add one more list item

```js
// select parent element
const ul = document.querySelector('ul')

// create element of wanted tag
const li = document.createElement('li')

// Adding elements

ul.append(li)
```

you can see element is created in element section

Add a span inside first list item

```js
<li class="list-items"><span>Most Favorite : </span>5 AM Club</li>
// then
<li class="list-items">
          <span>Most Favorite :</span>
          5 AM Club
        </li>
```

Modifying the text

```js
const firstListItem = document.querySelector('.list-items')

// if we use querySelector() method then it will always choose the first item if there are
// more than one items of same type (e.g., same class)

console.log(firstListItem)
console.log(firstListItem.innerText)
console.log(firstListItem.textContent)
console.log(firstListItem.innerHTML)
```

You can see the difference in console

```js
li.innerText = 'Dark Matter'

// Modifying Attributes and Classes
li.setAttribute('id', 'dark-matter')
li.removeAttribute('id')
```

for see setAttribute or any other methods is working or not create a css file

index.css

```css
#dark-matter {
  color: red;
}
```

again,

```js
li.setAttribute('id', 'dark-matter')
li.removeAttribute('id')

//  getAttribute()

const title = document.querySelector('#main-heading')
console.log(title.getAttribute('id'))
```

Modifying classes

```js
// Modifying Attributes and Classes
li.classList.add('list-items')
// li.classList.remove('list-items')

console.log(li.classList.contains('list-items')) // return true/false
```

Remove Elements

```js
// Remove Element
li.remove()
```

### Traversing the DOM tree

Parent Node Traversal

```js
// let ul = document.querySelector('ul')

// console.log(ul)
// console.log(ul.parentNode)
// console.log(ul.parentElement)
// console.log(ul.parentNode.parentNode)
// console.log(ul.parentNode.parentElement)

// What is the difference between parentElement and parentNode

const rootElement = document.querySelector('html')

console.log(rootElement)
console.log(rootElement.parentNode)
console.log(rootElement.parentElement)
```

Child Node Traversal

```js
let ul = document.querySelector('ul')

// console.log(ul)
// console.log(ul.childNodes) // javascript takes indentation between two list items as text.
// console.log(ul.firstChild) // text
// console.log(ul.lastChild) // text

// // ul.firstChild.style.color = 'red' // Will give error since firstChlild is not an element
// ul.childNodes[1].style.backgroundColor = 'blue'
console.log(ul.children)
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)
```

Sibling Node Traversal

```js
let ul = document.querySelector('ul')

console.log(ul.previousSibling)
console.log(ul.nextSibling)

// to see what is ul previous & next sibling
const div = document.querySelector('div')
console.log(div.childNodes)

console.log(ul.previousElementSibling)
console.log(ul.nextElementSibling)
```

### Event Listeners

Create a new index.html file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <h1 id="tile">Event Listeners</h1>
    <div class="container">
      <div class="example example-1">
        <h1 id="heading">Example 1</h1>
        <button class="btn-1">Enter</button>
      </div>
      <div class="example example-2">
        <h1 id="heading">Example 2</h1>
        <button class="btn-2">Enter</button>
      </div>
      <div class="example example-3">
        <h1 id="heading">Example 3</h1>
        <button class="btn-3">Enter</button>
      </div>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

Add event listeners

Method 1:
We can directly add event listeners in the html.
-add onClick event in the first button and alert a message

```html
<div class="boxes box-1">
  <h1 id="heading">Example 1</h1>
  <button class="btn-1" onclick="alert('Hello World')">Enter</button>
</div>
```

Method 2
We can directly add event listeners in the js file.

```js
// Event Listeners

// element.addEventListener("click", function);  There is a third option (optional) also which is a boolean

const button2 = document.querySelector('.btn-2')

function alertBtn() {
  alert('Hi There')
}

button2.addEventListener('click', alertBtn)

// Mouseover

const backgroundColor = document.querySelector('.box-3')

function changeBackgroundColor() {
  backgroundColor.style.backgroundColor = 'blue'
}

backgroundColor.addEventListener('mouseover', changeBackgroundColor)

function changeBgColor2() {
  newBackgroundColor.style.backgroundColor = ''
}

backgroundColor.addEventListener('mouseout', changeBgColor2)
```

There are many more eventListener. You should try it yourself.

Now change the index.html file to show some more functionality of eventListener

index.html

```html
<body>
  <h1 id="title">Event Listeners</h1>
  <div class="container">
    <button class="show-btn">Show More</button>
    <div class="hidden-content">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit optio a
      iure quam totam ipsam aliquid illo quae odit laborum minus, tenetur sit
      numquam deleniti voluptate nemo temporibus repudiandae nam eius molestias
      incidunt commodi! Molestiae atque consectetur praesentium. Cupiditate,
      totam?
    </div>
  </div>
  <script src="app.js"></script>
</body>
```

index.css

```js
.hidden-content {
  display: none;
}

.hidden-content.show-btn {
  display: block;
}
```

app.js

```js
// Show More

const showBtn = document.querySelector('.show-btn')

const hiddenContent = document.querySelector('.hidden-content')

function showContent() {
  if (hiddenContent.classList.contains('show-btn')) {
    hiddenContent.classList.remove('show-btn')
  } else {
    hiddenContent.classList.add('show-btn')
  }
}

revealBtn.addEventListener('click', showContent)
```

-this method is very useful for showing menu, display errorMessages etc.
