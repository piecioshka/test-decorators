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
