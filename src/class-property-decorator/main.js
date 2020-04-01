import './index.html';

function readonly(target, name, descriptor) {
    descriptor.writable = false;
}

class Person {
  @readonly
  name = 'Kasia';
}

const o = new Person();
console.log(o.name); // 'Kasia'

o.name = 'Basia'; // TypeError: Cannot assign to read only property 'name' of #<Person>
console.log(o.name); // 'Kasia'
