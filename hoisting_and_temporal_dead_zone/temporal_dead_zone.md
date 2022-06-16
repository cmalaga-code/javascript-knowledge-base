<h1>Temporal Dead Zone 🧐</h1>
<h3>What is temporal dead zone ?<h3>
<ul>
    <li>Area or block where a variable is inaccessable.</li>
</ul>
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--IX3V7X76--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sqouc39kfyfzeu0ica7i.png">
<h3>Example</h3>

<h3>You cannot do the following in the code</h3>

```js
const example = function () {
    console.log(name)
    const name = "example";
}
```