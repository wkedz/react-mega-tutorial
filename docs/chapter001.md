# Chapter 1 Modern JavaScript

https://blog.miguelgrinberg.com/post/how-to-dockerize-a-react-flask-project

## Transpiling

Converting ES6 like code to ES5 that run everywhere. Thanks to tha javascript developer do not need to worry about code support in webbrowsers. 

## Semicolons 

Rules for using semicolons are complicated. So it it better to use them everywhere. Except like `}` like in other languages. 

Exampels of usage:

```js
const a = 1;  // <-- semicolon here

function f() {
  console.log('this is f');  // <-- semicolon here
}  // <-- but not here


const f = () => {
  console.log('this is f');
};  // <-- this is an assignment, so a semicolon is used


const myArray = [
  1,
  3,
  5,
];

const myObject = {
  name: 'susan',
  age: 20,
};
```

## Import and Exports

The code can have only one default export. Any additionaly default export will cause an error. But it can have multiple other exports.

```js
//Filename: default.js
export default function sayHello() {
  console.log('Hello, world!');
}

export const PI = 3.14;
export const SQRT2 = 1.41;

// const variable = 42;
// export default variable;

// export default class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }
```

```js

// Defaut import can have any name
import saySomething, {SQRT2, PI } from './default.js';
saySomething();
```

## Variables and Constatns

In older js for variable declaration there was `var` keyword. But it has some scoping quirks, so it is a best to replace it with the more predictable `let`. 

```js
let a; //not assigned - undefined value
let a = 1; 

const c = 3;
c = 4; // it will cause error

const d = [1,2,3];
d.push(4);  // allowed
```

Why does push works for const d? Because javascript has restriction for assigments, not for mutating the initial assigned value. 

## Equality and Inequality Comparisions

There are `==` and `!=` but they act weird, so it is best practice to use the newest one: `===` and `!==`. 

```js
let a = 1;

console.log(a === 1); //true
console.log(a === '1'); //false
console.log(a !== '1'); //true
```

## String Interpolation

```js
const name = 'susan';
let greeting = 'Hello, ${name}';
```


## For loops

```js
const allTheNames = ['susan','john','alice'];
for (name of allTheNames) {
    console.log(name)
}
```

## Arrow functions

ES6 introduces new syntax for function definition `=>` 

Old syntax:
```js
// old syntax
function mult(x,y) {
    const result = x * y;
    return result;
}
mult(2,3)
```

New syntax:
```js
// new syntax
function mult(x,y) => {
    const result = x * y;
    return result;
}
```

At first look, it doesnt give much, but we can reduce it to :

```js
const mult = (x,y) => x*y;
const square = x => x*x;
```

And for passing to other functions:

```js
longTask(function (result) {console.log(result);});
longTask(result => console.log(result));
```

## Promises

Promise is a special object that is returned to the caller of async function. IT allows caller to track execution of asynchronic function, and obtain a result from it thwn it completes. 

Promise object has `then()` and `catch()` methods that allows to create chain of execution. 

For example `fetch()` is a async function that returns Promise object.

```js
fetch('https://example.com').then(r => console.log(r.status))
```

Like said before, promises can be chained. For example :
```js
fetch('https://example.com/data.json')
.then( r => r.json() )
.then( data => console.log(data) )
```

And for the error handling:

```js
fetch('https://example.com/data.json')
.then( r => r.json() )
.then( data => console.log(data) )
.catch( error => console.log(`Error: ${error}`))
```


```js
f().then(() => console.log('done!'));
```

## Await and async

We can split code execution into functions for more readbility by using `async`/`await`. 

For example code above:

```js
fetch('https://example.com/data.json')
.then( r => r.json() )
.then( data => console.log(data) )
```

Can be rewritten to 

```js
async function f() {
    const r = await fetch('https://example.com/data.json')
    const data = await r.json()
    console.log(data)
}
```

and error handling:

```js
async function f() {
    try{
        const r = await fetch('https://example.com/data.json')
        const data = await r.json()
        console.log(data)
    } catch(error) {
        console.log(`Error: ${error}`)
    }
}
```

One line function:

```js
async function g() {
  await f();
  console.log('done!');
}
```

```js
const g = async () => {
  await f();
  console.log('done!');
};
```

## Spread Operator

The spread operator is used for expanding an array or object in place. 

```js
const a = [5, 3, 9, 2, 7];
console.log(Math.min(...a));  // 2

const a = [5, 3, 9, 2, 7];
const b = [10, ...a, 8, 0];  // [10, 5, 3, 9, 2, 7, 8, 0]

const c = [...a];  // [5, 3, 9, 2, 7]

const d = {name: 'susan'};
const e = {...d, age: 20};  // {name: 'susan', age: 20}
const f = {...d};  // {name: 'susan'}

const user = {name: 'susan', age: 20};
const new_user = {...user, age: 21};  // {name: 'susan', age: 21}
```

## Object Property Shorthand

In the same league as the spread operator, the object property shorthand provides a simplified syntax for object properties.

```js
const name = 'susan';
const age = 20;
const user = {name: name, age: age};

const user = {name, age}; // object created here has a property name with value from name.
```

## Destructuring Assignments

This feature allows to assign to multiple variables at once.

```js
const a = ['susan', 20];
let name, age;
[name, age] = a;

const b = [1, 2, 3, 4, 5];
let c, d, e;
[c, d, ...e] = b;
console.log(c);  // 1
console.log(d);  // 2
console.log(e);  // [3, 4, 5]

const user = {name: 'susan', active: true, age: 20};
const {name, age} = user;
console.log(name);  // susan
console.log(age);  // 20

const f = ({ name, age }) => {
  console.log(name);  // susan
  console.log(age);  // 20
};

const user = {name: 'susan', active: true, age: 20};
f(user);
```

## Clases

Introduce base oop concept.

```js
class User{
    constructor(name, age, active {
        this.name = name
        this.age = age
        this.active = active
    })

    isActive() {
        return this.active
    }

    async read() {
        const r = await fetch(`https://example.org/user/${this.name}`);
        const data = await r.json()
        return data;
    }
}
```

Usage:

```js
const user = new User('susan', 20, true);
```

## JSX

Its purpose to create inline structured content mostly for HTML pages.

```jsx
const paragraph = document.createElement('p');
paragraph.innerText = 'Hello, world!';

const paragraph = <p>Hello, world!</p>;

const myTable = (
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Susan</td>
      <td>20</td>
    </tr>
    <tr>
      <td>John</td>
      <td>45</td>
    </tr>
  </table>
);
```

## JSX

It is a syntax extension  that allows to describe page in decalartive way by using tag system from HTML-like code within your JavaScript files  

WebBrowsers and JavaScript engines do not understands JSX directly. Tools like `Babel` will transpiled into regular JavaScript.

Examples:

```jsx
<p>Hello, world!</p>
```

To:
```js
React.createElement('p', null, 'Hello, world!')
```


```jsx
const element = (
  <div>
    <p>Hello, world!</p>
  </div>
);
```


To:
```js
const element = React.createElement('div', null,
  React.createElement('p', null, 'Hello, world!')
);
```