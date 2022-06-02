'use strict'

// array destructuring
// unpack values from arrays
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
    }
};

let [a, b, , c] = restaurant.categories;

const [one = "default value", ,[three = "default value", four = "default value"]] = [1, 2, [3, 4]];

// console.log(four);
// console.log(restaurant.order(2, 0));

// destructuring objects
const greeting = ({ currency, age}) => console.log(currency, age);

const user = {
    currency: 22300,
    age: 34,
};

const user2 = new Object();
user2.currency = 11000;
user2.age = 19;

const {currency, age} = user;

console.log(currency, age)
// greeting(user);
// console.log(user2);
