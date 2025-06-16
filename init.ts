function greet(name: string){
    return `Hello ${name}`;
}

interface Person{
    name?: string,
    age?: number
}

export class Boy implements Person{
    name : string;
    age : number;
    constructor(name:string = "vlad", age:number = 20){
        this.name = name;
        this.age = age;
    }

    greet() : void {
        console.log(`My name is ${this.name} and I am ${this.age} years old`)    
    }
}

