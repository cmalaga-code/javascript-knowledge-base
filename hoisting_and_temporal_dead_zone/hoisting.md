<h1>Hoisting 🧐</h1>
<h3>What is hoisting ?<h3>
<ul>
    <li>The act of making some type of variable or function accessable/usable in code before they are declared.</li>
</ul>
<img src="https://www.tutorialsteacher.com/Content/images/js/hoisting.png">
<h3>Example</h3>

<h4>With "var" you get undefined</h4>

```js
console.log(example);
var example = 22;
```
<h4>With "let" you get RefrenceError (TDZ)</h4>

```js
console.log(example);
let example = 22;
```

<h4>With "const" you get RefrenceError (TDZ)</h4>

```js
console.log(example);
const example = 22;
```

<h4>With "function declaration" you get the function</h4>

```js
example(22);
function example (a) {
    console.log(a)
}
```

<h4>With "function expression & arrow functions" depends on what was used to declare the variable let, const, var</h4>

```js
example(22);
const example1 = function (a) {
    console.log(a)
}
// or
example(22);
const example2 = (a) => {
    console.log(a)
}
```