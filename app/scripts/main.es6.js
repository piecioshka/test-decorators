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
