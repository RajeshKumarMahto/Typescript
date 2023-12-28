export{};

const x: string | null = prompt("Enter first number", "1");
const y : string | null = prompt("Enter 2nd number", "0");
const num1: number = parseInt(x!);
const num2: number = parseInt(y!);


// First method using module(%) operator

const num1_last_digit: number = num1%10;
const num2_last_digit: number = num2%10;
if(num1_last_digit === num2_last_digit){
    console.log("Last digit is same");
}else{
    console.log("Last digit is not same");
}

