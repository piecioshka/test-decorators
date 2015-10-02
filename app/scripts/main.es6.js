class Osoba {
    @readonly
    name = "Kasia";
}

function readonly() {
    console.log.apply(console, arguments);
}

let o = new Osoba();

console.log(o);
