# A Simple Drop Down Menu Module

## Installation

`npm install simple-ddm`

## Usage example

- addToggle

```javascript
import ddm from 'simple-ddm';

// trigger
const option = document.querySelector('.option');

// list
const listItems = document.querySelector('.links');

// add a class 'show' to the list when trigger is clicked
ddm.addToggle(option, listItems, 'show');
```

- Optional callback

```javascript
ddm.addToggle(option, listItems, 'show', () => {
  // do something
});
```

- addFor

```javascript
// this will find nodes for you
ddm.addFor('.option', '.links', 'show');
```

- addForEach

```javascript
// for multiple menus

// options class name
const optionClass = '.option';

// listItems class name
const listItemsClass = '.links';

// add a class 'show' to links list when it's trigger is clicked
ddm.addForEach(optionClass, listItemsClass, 'show');
```
