"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const init_1 = require("./init");
let glad = new init_1.Boy();
glad.greet();
let boy_names = ["vlad", 'bomj', "bomjik", "vladic", "jomic"];
let boys = [];
for (let i = 0; i < 5; i++) {
    let boy = new init_1.Boy(boy_names[i], i + 10);
    boys[i] = boy;
}
boys.forEach(boy => {
    console.log(`${boy.name} + ${boy.age}`);
});
const coordinate = { x: 10, y: 20 };
console.log(coordinate);
coordinate.x++;
console.log(coordinate);
if (coordinate.x == 2) {
    console.log("vlad jomic");
}
else {
    console.log("vladbomjic");
}
