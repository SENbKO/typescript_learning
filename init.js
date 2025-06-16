"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boy = void 0;
function greet(name) {
    return `Hello ${name}`;
}
class Boy {
    constructor(name = "vlad", age = 20) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}
exports.Boy = Boy;
