# test-es7-decorators

> Testing ECMAScript 7 Decorators. Currently status: Stage 1

```js
class Osoba {
    @readonly
    name = 'Kasia';
}

function readonly(target, name, descriptor) {
    descriptor.writable = false;
}

let o = new Osoba();
console.log(o.name);

o.name = 'Basia'; // TypeError: Cannot assign to read only property 'name' of #<Osoba>
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
