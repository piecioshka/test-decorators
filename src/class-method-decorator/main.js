import './index.html';

function getFunctionSignature(fn) {
    const fnString = fn.toString();
    return fnString.substring(0, fnString.indexOf(' {'));
}

function metric(target, name, descriptor) {
    const prev = descriptor.value;
    const cached = target[name];
    descriptor.value = function (...args) {
        const start = performance.now();
        const result = prev(...args);
        const end = performance.now();
        const delta = (end - start).toFixed(2);
        const fnName = getFunctionSignature(cached);
        console.info(`[*] ${fnName} [${delta}ms]`);
        return result;
    };
}

function log(target, name, descriptor) {
    const prev = descriptor.value;
    const cached = target[name];
    descriptor.value = function (...args) {
        const fnName = getFunctionSignature(cached);
        const result = prev(...args);
        console.log(`[+] ${fnName}`);
        return result;
    };
}


class Calculator {
    @log
    @metric
    short(a, b, c) {
        return a ** b ** c;
    }

    @log
    @metric
    long(time) {
        const start = Date.now();
        while (start + time > Date.now()) {}
    }
}

const c = new Calculator();
c.short(17, 13, 19);
c.long(300);
