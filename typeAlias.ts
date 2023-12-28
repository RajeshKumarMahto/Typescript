export {};

type User={
    name: string;
    age: number;
}

const user1: User={
    name: "Rajesh",
    age: 23
}

function greetUser(user: User){
    console.log(`Hi ${user.name}, Your age is ${user.age}`);
}

function checkOlder(user:User, checkAge:number): boolean{
    return user.age>checkAge;
}

greetUser(user1);
console.log(checkOlder(user1, 25));




