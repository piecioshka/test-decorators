# test-decorators

Testing ECMAScript Decorators. Currently status: **Stage 2**

## Class Property Decorator

```js
function readonly(target, name, descriptor) {
    descriptor.writable = false;
}

class Person {
    @readonly
    name = 'Kasia';
}

let o = new Person();
console.log(o.name); // 'Kasia'

o.name = 'Basia'; // TypeError: Cannot assign to read only property 'name' of #<Person>
console.log(o.name); // 'Kasia'
```

## Resources

* <https://github.com/tc39/proposal-decorators> — Proposal
* <https://babeljs.io/docs/en/babel-plugin-proposal-decorators> — Babel.js plugin
