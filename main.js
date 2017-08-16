'use strict';

class Person {
    @readonly()
    name = 'Kasia';
}

function readonly() {
    return function (target, propertyName, descriptor) {
        descriptor.writable = false;
        return descriptor;
    };
}

let o = new Person();
console.log(o.name);

o.name = 'Basia'; // TypeError: Cannot assign to read only property 'name' of #<Person>
console.log(o.name);
