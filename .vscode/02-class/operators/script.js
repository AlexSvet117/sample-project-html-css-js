/** Operators in JS */
console.log('Operators in JS');

console.log();
console.log();
console.log();
console.log();
console.log();
console.log();

// const name = prompt('enter your name: ')
// console.log('Hello ' + name);

// const age = prompt('Enter your age: ')
// console.log(age, typeof age)

let someNumber = '20' // works even with '20abc'
console.log(someNumber);
// String to number conversion
someNumber = parseInt(someNumber);

someNumber = Number(someNumber) // but doesn't work with '20abc' - use this one

someNumber = +someNumber;// or use this one
console.log(someNumber, typeof someNumber);


let realNumber = 1000;
realNumber = realNumber.toString; // JS it converts prim into non-prim, wrapps to execute the functions
realNumber = String(realNumber);

/** Boolean convesion */
let someValue = 1000;
let boolResult = Boolean(someValue)
console.log(boolResult, typeof boolResult); // will be a boolean


const name1 = prompt('Enter name: ');
const age = promt('Enter age: ');
console.log(name, age);

let message = `Hello ${name}`;

// String functions 
let myStr = 'Yoll Academy';
// console.log(myStr.__proto__);
console.log(myStr, typeof myStr);
myStr.substring(0, 1)



/**
 * Next lesson - OBJECT BASICS
 */
console.log('Yo');

// declare an object

// with constructor
// const person = new Object({
//     name: 'Bart Simpson',
//     age: 30,
//     isNewUser: true
// })
// console.log(person);

const person = {
    name: 'Bart', 
    age: 30, 
    isNewUser: true,

    address: {
        street: "123 Main Str"
    },

    // arrays
hobbies: ['music', 'study'],

// functions
sayHI: function(){
    console.log(`Hello, my name is ${name}`)
}

}

person.address.street
person.hobbies


prop1 = person.name
prop2 = person["name"]

person.style = 'stupid'

delete person.isNewUser


/////////////////////////////
const person ={
    name: 'John',
    age: 50,
    isNewUser: true,
    address: {
        street: '123 main',
        city: 'Miami',
        state: 'Fl',
        coordinates: {
            lat:31,
            hi:50
        }
    },
}
console.log(person.address.coordinates.lat);


// sometimes you will need to merge two objects
const userInfo = {
    name: 'Bart',
    DOB: new Date('1900-01-01').getTime(),
    isActive: false

}

const userCreds = {
    userName: '',
    password: 'secret'
}

// combine two objects
const user = Object.assign({}, userInfo, userCreds)

// user spread operator
const user2 = {...userInfo, ...userCreds}

// arrays with objects
const products = [
    {
        id: 1,
        title: 'iPhone 16',
        price: '299'
    },
    {
        id: 2,
        title: 'Samsung Galaxy',
        price: '199'
    },
    {
        id: 3,
        title: 'Google Px',
        price: '295'
    }
]

console.log(products[0].price);


// Keys
let result = Object.keys(person) // similar to getting length of object - returns number

result = Object.values(person) // all of the values are returned

result = Object.entries(person) // returns Map of key:value

// identify if the object has property
result = person.hasOwnProperty('name') // returns boolean
result = 'name' in person // same as above - boolean


////////// object destructuring. ////////
// declared variables added to existing object

const firstName = 'Bart'
const lastName = 'Doe'

const userR = {
    firstName,
    lastName
}
console.log(userR.firstName);


///////////////////////
const product = {
    id: 1,
    name: 'laptop',
    price: 1000,
    stock: 5
}

const { id, name} = product;

const { id: productID, name: productName} = product

const arr = [10, 20, 30]
const [first, second] = arr


// JSON file, etc.
const product1 = {
    id: 1,
    name: 'product 1',
    description: 'description of product 1',
    price: 1000.99
}

const jsonProduct = JSON.stringify(product1); // JS object into JSON
const parseProduct = JSON.parse(jsonProduct); // JSON into JS object

// commonly arrays
const productsSS = [
    {
    id: 1,
    name: 'product 1',
    description: 'description of product 1',
    price: 1000.99
},
{
    id: 2,
    name: 'product 2',
    description: 'description of product 1',
    price: 1000.88
}
]

const jsonProductArray = JSON.stringify(productsSS)
const parsedArray = JSON.parse(jsonProductArray)


/** FUNCTIONS */

function sayHi(...nums) {
    let total = 0
    for (let num of nums) {
        total += num;
    }
    return total
}

const numbers =[11,2,3,5,7]
function getRandom (arr) {
    const randIndex = Math.floor(Math.randon() * arr.length)
    return arr[randIndex]

}

// Function expression
const multiply = function(x, y) { // not hoisted
    return x * y
}

console.log(multiply());

// Array Function
const substract = (x, y) => { // benefit - a
    return x - y
}
const substractShort = (x, y) => x - y

// if you have only one parameter
const multiplyByTwo = x => x * 2

// array - iterate over it
const nums = [10, 20, 30, 40, 50]
nums.forEach(function(num){
    console.log(num);

})

num.forEach(num => console.log(num))

// IIFE - cundtions used once. The scope executed independently, the function doesn't collide with other functions
(function name() {
    const user = 'Dima'
    console.log(user)
})('Dima')

// practice
function getKilometers (miles) {
    return (miles / 0.62).toFixed(2)
}
console.log(getKilometers(4));

// problem 2 - convert above to arrow function
const getKilo = miles => (miles/0.062).toFixed(2)

// problem 3 
function getCelsius (digree) {
    const farenhite = (digree - 32) * 5/9
    return farenhite
}


// forloop basics
console.log('for loop')

for (let i = 0; i <= 10; i++) {
    console.log(`Number: ${i}`)
}

for (let i = 1; i <=10; i ++) {
    console.log(`Current number is: ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j}`)
    }
}


// while loop
let i = 3;
while (i <= 10) {
    console.log(`Number ${i}`)
    i++
}

// do while loop
do { console.log(i)
    i++
}
while (i <= 10);


// for Of and for In Loops
const products1 = ['laptop', 'phone', 'tablet']

for (let index = 0; index < products1.length; index ++) {
    console.log(products1[index])
}

// for of
for (const product of products1) {
    console.log(product)
}

const users = [{name: 'John', age: 35}, {name: 'Jane', age: 30},]
for (const user of users) {
    console.log(user.age)
    console.log(user.name)
}

const str = 'Hello World'
for (const letter of str) {
    console.log(letter)
}

// for in - iterates over objects
const car = {
    make: 'bmw',
    model: 'M5',
    doors: 5,
    hp: 350
}
for(const key in car) {
    console.log(car[key])
}


// for each Loop
const tech = ['HTML', 'CSS', 'JS']
// 1st option - regular anonymous function
tech.forEach(function(item){
    console.log(item)
})
// 2nd option
tech.forEach((item) => console.log('yo'))


const cars = [
    {make: 'BMW', year: '2020', model: 'M5'},
    {make: 'Merc', year: '2024', model: '600'},
    {make: 'Tesla', year: '2024', model: 'Y'},
    {make: 'Porche', year: '2020', model: 'Cayene'}
]
cars.forEach(car => console.log(car.model))


const numbers22 = [1,2,3,4,5,6]
numbers22.forEach((number) => {console.log(number)})

// numbers22.filter() - will return new array
numbers22.filter((number) => number % 2 === 0)


const songs = [
    {
      name: "Lose Control",
      singer: "Teddy Swims",
      genre: "Soul/Pop",
      yearOfRelease: 2022,
      duration: 201,
      copiesSold: 500000,
      status: {
        favorite: true,
        skipped: false,
        markedForDeletion: false
      }
    },
    {
      name: "Paint the Town Red",
      singer: "Doja Cat",
      genre: "Hip-Hop/Rap",
      yearOfRelease: 2023,
      duration: 217,
      copiesSold: 800000,
      status: {
        favorite: true,
        skipped: false,
        markedForDeletion: false
      }
    }]

    songs.forEach((song) => console.log(`${index + 1} - ${song.name} by ${song.singer}`))
    const rockChick = songs.filter((song) => song.genre.includes('Rock'))
    


    // Mapping (map function) will return a new function with modified number
    const numbersS = [10, 20, 30, 40, 50, 60]
    const newNumbers = numbers.map((num) => {num * 2})

    // reduce() will allow you to accumulate all the data in single value
    const arrRR = [1,2,3,4,5,6]
    // accumulator (previous value), current value
    const sum = arrRR.reduce((acc, curr) => acc + curr, 0)


    // Transformation (with map function)
    songs.map((song) => {
        return{
            name: song.name, 
            singer: song.singer,
            isNew: song.yearOfRelease >= 2023 // will assign true or false
        }}).filter((song) => song.isNew === true) // will return only songs that meets the criteria



const cart = [
    {id: 101, name: 'Laptop', price: 1299.99},
    {id: 102, name: 'Phone', price: 1099.99},
    {id: 103, name: 'Keyboard', price: 99.99}
]

const total = cart.reduce((acc,curr) => acc + curr.price, 0)
console.log('Total: ', total)



//////////////////////////////////////////// DOM ///////////////////
document.getElementById('main')
const mainElement = document.getElementById('main')
console.log(mainElement) // will return element..

mainElement.innerHTML = '<p>Yo</p>'

const mainTitle = document.getElementById('my-title')
mainTitle.innerText = 'Reassigned value'

const userFullName = prompt('Enter your name')


let out
out = document.all // colleciton of all the elememts, similar to array but no useful functions
out = document.all[8]
out = document.all.length

//basic proterties
out = document.documentElement // root element of the dom
out = document.head
out = document.body
out = document.body.children
out = document.doctype
out = document.domain
out = document.URL
out = document.characterSet


// colleciton elements
out = document.links
out = document.links[0]
out = document.links[0].href

out = document.forms
out = document.forms[0]

// modify, add attributes 
document.forms[0].id = 'form-one-js'
out = document.links

document.links[0].href = 'https://www.facebook.com'
document.links[2].text = 'Facebook'

// add class to a link
document.links[9].className = 'class-form-js'

const userChoice = prompt('red or green?')
console.log(userGuide)

if (userChoice === 'red') {
    document.links[1].className = 'red-link'
} else {
    document.links[1].className = 'green - link'
}

// select elements with querySelector
document.querySelector('.large-text').className = 'red-link' // replaces class
document.querySelector('.large-text').classList.add('red-link') // adds additional class


// out = document.links.forEach((link) => {console.log(link)})
const linkArray = Array.from(document.links)

linkArray.forEach((link) => {link})

// destructuring concept

const newLinkArray = [...document.links]
