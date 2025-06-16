import * as readline from 'readline';

function askQuestion(query: string) : Promise<string>{
    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })

    return new Promise(resolve => rl.question(query, answer => {
        rl.close();
        resolve(answer);
    }))
}

async function calculator(){
    let number1:number = Number( await askQuestion("Enter the first number: "));
    let number2:number = Number( await askQuestion("Enter the second number: "));
    console.log(`Result = ${number1-number2}`)
}

calculator();


