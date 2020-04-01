import './index.html';

function enumerable(status) {
    return function (target, name, descriptor) {
        descriptor.enumerable = status;
    }
}

class Person {
    @enumerable(true)
    get name() {
        return 'this is my name';
    }

    @enumerable(false)
    get surname() {
        return 'this is my surname';
    }
}

const p = new Person();

for (let prop in p) {
    console.log(prop);
}
