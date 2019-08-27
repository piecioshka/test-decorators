# test-es7-decorators

Testing ECMAScript 7 Decorators. Currently status: Stage 2

```js
class Person {
    @readonly
    name = 'Kasia';
}

function readonly(target, name, descriptor) {
    descriptor.writable = false;
}

let o = new Person();
console.log(o.name);

o.name = 'Basia'; // TypeError: Cannot assign to read only property 'name' of #<Person>
console.log(o.name);
```

## Setup

If you would like to install this project, try run that commands:

```
npm install
webpack
```

Next, open in browser `app/index.html`.

## Links

 - More about specification: https://github.com/wycats/javascript-decorators
 - Babel.js: Experimental section: https://babeljs.io/docs/usage/experimental/
