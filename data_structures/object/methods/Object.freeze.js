// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// freezes an object so it can longer be changed in any way.
// Done inplace

const objectExample = {
    name: "John",
    age: 54
};

Object.freeze(objectExample);

