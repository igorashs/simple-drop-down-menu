# A Simple Drop Down Menu Module

## Installation

---

`npm install simple-ddm`

## Usage example

---

```javascript
import ddm from 'simple-ddm';

// trigger
const option = document.querySelector('.option');

// list
const listItems = document.querySelector('.list-items');

// add a class 'show' to the list when trigger is clicked
ddm.addToggle(option, listItems, 'show');
```

- ### Optional callback

```javascript
ddm.addToggle(option, listItems, 'show', () => {
  // do something
});
```
