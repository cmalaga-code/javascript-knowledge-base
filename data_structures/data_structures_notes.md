<h1>Data Structures</h1>
<h3>Summary</h3>
<ul>
    <li>Data structures are like compartment holders.</li>
    <li>Different data structures are good for different things.</li>
</ul>
<hr>
<h3>Array</h3>
<ul>
    <li>Can hold different data types.</li>
    <li>Ordered data structure. Always maintaines the same order of elements.</li>
    <li>Good practice to keep array's with the same data types for performance.</li>
    <li>JavaScript has pre-defined methods for arrays.</li>
    <li>You can have different data structures in an array.</li>
    <li>https://www.w3schools.com/jsref/jsref_obj_array.asp</li>
</ul>

``` JavaScript
// can hold different data types
const arrayExample = ["John", 22, true, null, 33.33];
console.log(arrayExample);
```

``` JavaScript
// Ordered data structure
const arrayExample = [1, 2, 3, 4, 5];
arrayExample.forEach((element, index) => console.log(index, element));
```

``` JavaScript
// Different data structures in array
const arrayExample = [{name: "John", age:54}, 2, 3, 4, [5,6,7]];
console.log(arrayExample[0].name);
console.log(arrayExample[0].age);
console.log(arrayExample[4][0]);
```
<hr>
<h3>Objects</h3>
<ul>
    <li>Allows for properties & values.</li>
    <li>Key value pairs.</li>
    <li>Property value can be a function.</li>
    <ul>
        <li>If a property is a function it is considered a method</li>
    </ul>
    <li>Can be compared to objects in real life.</li>
    <li>Properties define characteristics.</li>
    <li>Use dot-notation & bracket notation.</li>
    <li>You can use different data structures in a object.</li>
    <li>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects</li>
</ul>

``` JavaScript
// Declare object
const house = new Object();
house.floors = 2;
house.sizeSqft = 1120;
house.garageSize = 2;
```

``` JavaScript
// Declare object
const house = {
    floors: 2,
    sizeSqft: 1120,
    garageSize: 2,
};
```

``` JavaScript
// Different data structures in object
const house = {
    floors: {floorOne: 1, floorTwo: 2},
    sizeSqft: [1120, 1200],
    garageSize: 2,
};
```

