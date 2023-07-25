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

### Event Propagation

Means how eventListener travels through DOM tree
3 Phases :
-Event Capturing
-Target
-Event Bubbling (hot water example)

index.html

```js
<body>
  <div class="div1">
    <div class="div2">
      <button>Click</button>
    </div>
  </div>
  <script src="app.js"></script>
</body>
```

index.css

```js
.div2 {
  padding: 4rem;
  border: 2px solid black;
  max-width: 8rem;
}

.div1 {
  padding: 2rem;
  border: 2px solid red;
  max-width: 4rem;
}

button {
  padding: 1rem;
  justify-content: center;
  align-items: center;
}
```

app.js

```js
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
    console.log('Document')
  },
  true
)

document.querySelector('.div1').addEventListener(
  'click',
  function () {
    console.log('DIV 1')
  },
  true
)

document.querySelector('.div2').addEventListener(
  'click',
  function () {
    console.log('DIV 2')
  },
  true
)

document.querySelector('button').addEventListener(
  'click',
  function (e) {
    console.log(e) // e-> gives info/properties about the event e.g., type, shiftKey, target
    console.log(e.target)
    console.log((e.target.innerText = 'clicked'))
  },
  true
)
```

Now change all third optons into false and see the changes in console

stopPropagation() method stops the propagation
-add stopPropagation() in div 2

```js
document.querySelector('.div2').addEventListener(
  'click',
  function (e) {
    e.stopPropagation()
    console.log('DIV 2')
  },
  false
)
```

another utility
-setting third option as { once: true }

```js
document.querySelector('.div2').addEventListener(
  'click',
  function () {
    // e.stopPropagation()
    console.log('DIV 2')
  },
  { once: true }
)
```

preventDefault()
-prevent any default behaviour that might occurs on an element

index.html

```html
<div class="div1">
  <div class="div2">
    <a href="" class="button"> Click </a>
  </div>
</div>
```

also correct error in app.js

```js
document.querySelector('.button').addEventListener
```

Now if you click the button, it will be refresh immediately because of the default behavior of anchor tag.
preventDefault() is used to prevent any default behaviour

```js
document.querySelector('.button').addEventListener(
  'click',
  function (e) {
    e.preventDefault()
    console.log((e.target.innerText = 'clicked'))
  },
  false
)
```

### Event Delegation

Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

take an example

index.html

```html
<body>
  <ul id="movies">
    <li id="inception">inception</li>
    <li id="avengers">avengers</li>
    <li id="intersteller">intersteller</li>
    <li id="oppenheimer">oppenheimer</li>
  </ul>

  <script src="app.js"></script>
</body>
```

app.js

```js
// Event Delegation

document.querySelector('#inception').addEventListener('click', function (e) {
  console.log('Inception')

  //   e.target.style.backgroundColor = 'red'
  const target = e.target

  if (target.matches('li')) {
    target.style.backgroundColor = 'blue'
  }
})

document.querySelector('#avengers').addEventListener('click', function (e) {
  console.log('Avengers')

  //   e.target.style.backgroundColor = 'red'
  const target = e.target

  if (target.matches('li')) {
    target.style.backgroundColor = 'blue'
  }
})

document.querySelector('#intersteller').addEventListener('click', function (e) {
  console.log('intersteller')

  //   e.target.style.backgroundColor = 'red'
  const target = e.target

  if (target.matches('li')) {
    target.style.backgroundColor = 'blue'
  }
})
```

So is there any technique to achive the same result by writing less code.
Yes, by event delegation.

```js
document.querySelector('#movies').addEventListener('click', function (e) {
  console.log(e.target.getAttribute('id') + ' is clicked')

  const target = e.target
  if (target.matches('li')) {
    target.style.backgroundColor = 'blue'
  }
})

//  future descendants that match a selector(from definition, e.g.,)

const sports = document.querySelector('#movies')
const newMovie = document.createElement('li')

newMovie.innerText = 'Mission Impossible'
newMovie.setAttribute('id', 'mi')

sports.appendChild(newMovie)
```

-event delegation improve the performance and also take less space
We can delegate the event from parent to dynamically created new items.
