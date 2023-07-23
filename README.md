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
