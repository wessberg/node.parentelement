## Node.parentElement polyfill

A spec-compliant polyfill for [Node.parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement). It adds support for it in IE <8.

It also normalizes the behavior between different browsers. Some, like Internet Explorer >=9 and Opera <=12 have implemented the method only on `Elements` while others have implemented it on all `Nodes`. `Node` is undefined in IE8. This polyfill makes sure that it always works on all types that implements `Node` such as `Attr` and `Text`.

### Install
Install with
```javascript
npm install node.parentelement --save-dev
```

### Usage
Load it in your code with an import statement:
```javascript
import "node.parentelement";
```
Or from a script tag:
```html
<script src="../node_modules/node.parentelement/polyfill.min.js"></script>
```

The polyfill will be applied automatically if necessary.
