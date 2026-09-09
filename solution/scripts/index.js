function breakLine(){
    console.log("----------------------------------");
}

function sayHi(){
    console.log("Hi");
}

sayHi();
breakLine();

function sayHello(name){
    console.log(`Hi ${name}`)
}

sayHello(`Kamal`);
breakLine();

function greeting(name = "Unkown"){
    // console.log(`Hi ${name}`)
    // or you can do the following:
    sayHello(name);
}

greeting("Hassan"); // Hi Hassan
greeting(); // Hi Unkwown
breakLine();

function welcome(isRegistered=false){
    if(!isRegistered){
        console.log("access denied");
        return;
    }
    // Here, I do know that isRegistered is true
    console.log("passed");
}

welcome(true);
welcome(); // isRegistered is considered as false by default
breakLine();

function multiplication(number_1, number_2){
    const result = number_1 * number_2;
    return result;
}
let number_1 = 3;
let number_2 = 6;
console.log(`The result of ${number_1} x ${number_2} is ${multiplication(number_1, number_2)}`);
breakLine();

function printDetails(username, age, ...courses){
    console.log(`Hi my name is ${username}, I'm ${age} years old. My courses are: `);
    for (const course of courses) {
        console.log(`\t-${course}`);
    }
}

printDetails("Houssein",29,"HTML","CSS","JS","PHP");
breakLine();

// Using function expression
// setTimeout(function(){
//     console.log("Hi");
// },3000);

// Or you can do the folloing:
// Using arrow function
setTimeout(()=>{
    console.log("Hi after 3 seconds from setTimeout");
    breakLine();
},3000);

const arrowSayHi = () => {
    console.log("Hi");
}
arrowSayHi();
breakLine();
// const arrowGreeting = (name) =>{
//     console.log(`Hi ${name}`);
// }

// Or you can do the following
const arrowGreeting = name => console.log(`Hi ${name}`);

breakLine();

// const summation = (number_1, number_2) =>{
//     return number_1 + number_2;
// }

// Or you can do the following:
const summation = (number_1, number_2) =>  number_1 + number_2;

number_1 = 10;
number_2 = 33;
console.log(`The result of ${number_1} + ${number_2} is ${summation(number_1,number_2)}`)
breakLine();

const function_1 = () => {

    const function_2  = () => {
        console.log("Hi from function_2");
    }

    console.log("Hi from function_1");
    function_2();
}

function_1();

breakLine();


const division = (number_1) => {
    return (number_2)=>{
        if(number_2==0){
            return null;
        }

        return number_1/number_2;
    };
}
number_1 = 10;
number_2 = 5;


const result = division(number_1); // This is a function
let final_result = result(number_2); // This is a number -> number_1 / number_2

console.log(`The result of ${number_1} / ${number_2} = ${final_result}`)

number_1 = 10;
number_2 = 0;
final_result = result(number_2);

console.log(`The result of ${number_1} / ${number_2} = ${final_result}`)

breakLine();

const arrowSummation = (n1,n2) => n1+n2;
const arrowSubtraction = (n1,n2) => n1-n2;
const arrowMultiplication = (n1,n2) => n1*n2;
// const arrowDivisoin = (n1,n2) => {
//     if(n2 == 0) {
//         return null;
//     }

//     return n1/n2;
// };

// Or you can do the following

// const arrowDivisoin = (n1,n2) => {
//     return n2 == 0 ? null : n1/n2;
// }
// Or you can do the following

const arrowDivision = (n1,n2) =>  n2 == 0 ? null : n1/n2;

const calculator = (callback,n1, n2) => {
    return callback(n1,n2);
}

number_1 = 10;
number_2 = 5;

console.log(`The result of ${number_1} + ${number_2} is ${calculator(arrowSummation,number_1, number_2)}`);
console.log(`The result of ${number_1} - ${number_2} is ${calculator(arrowSubtraction,number_1, number_2)}`);
console.log(`The result of ${number_1} x ${number_2} is ${calculator(arrowMultiplication,number_1, number_2)}`);
console.log(`The result of ${number_1} / ${number_2} is ${calculator(arrowDivision,number_1, number_2)}`);

breakLine();