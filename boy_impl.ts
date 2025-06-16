import { Boy } from "./init";


let glad = new Boy();
glad.greet();
let boy_names :Array<string> = ["vlad", 'bomj', "bomjik", "vladic", "jomic"];
let boys : Array<Boy> = [];
for(let i = 0; i< 5; i++){
    let boy = new Boy(boy_names[i], i+10);
    boys[i] = boy;
}

boys.forEach(boy => {
    console.log(`${boy.name} + ${boy.age}` )
});

type Pussy = {
    name : string
}

type Point = {
    x : number,
    y : number
}

const coordinate : Point = {x:10, y:20};
console.log(coordinate) ;
coordinate.x ++;
console.log(coordinate) ;

if(coordinate.x == 2){
    console.log("vlad jomic")
}else{
    console.log("vladbomjic")
}


