// npm i -g typescript

// tsc script.ts -w

// tsc --init




const character = "kamal";
console.log(character);


const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(inputs => {
    console.log(inputs);
});



// function
const circ = (diameter:number) => {
    return diameter * Math.PI;
}
console.log(circ(25));


//arrays
let names = ['kamal', 'arun', 'john'];
names.push('akash');
//names.push(23);
console.log(names);

//objects
let content = {
    name: 'kamal',
    email: 'kamal@edvoy.com',
    age: 30
};
console.log(content);

content.age = 31;
content.name = "john";
console.log(content);

//content.skills = ['html', 'css'];
console.log(content);


//explicit types
let characterName: string;
let age: number;
let isLoggedIn: boolean;

//array
let arrayValues: string[] = []; //use push for add []
arrayValues.push('kamal');
console.log(arrayValues);


//union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(25);
mixed.push(false);
console.log(mixed);

let uuid: string|number;
uuid = '1234';
uuid = 123;
console.log(uuid);

//objects
let dataOne: object;
dataOne = {name: 'kamal', age:30 };
console.log(dataOne);

let dataTwo: {
    name: string,
    age: number,
    email: string
}

dataTwo = {name: 'kamal', age: 30, email: 'kamal@edvoy.com'}
console.log(dataTwo);



//anytype
let ageData:any;

ageData = 25;
console.log(ageData);

ageData = true;
console.log(ageData);

ageData = {name: 'kamal'}
console.log(ageData);

let mixedAny: any[] = [];

mixedAny.push(5);
mixedAny.push('kamal');
mixedAny.push(false);
console.log(mixedAny);

let objectAny: { name: any, age: any }
objectAny = { name: 'kamal', age: 25 }
console.log(objectAny);



//Function

/* let greet = () => {
    console.log('Hello, words');    
}
console.log(greet); */

let greet: Function;

greet = () => {
    console.log('Hello world');    
}
console.log(greet);

// const add = (a:number, b:number, c?: number | string = 10) => {  /* ? check default value */
    const add = (a:number, b:number, c: number | string = 10) => {
    console.log(a + b); 
    console.log(c);       
}
//add(5,8) /*output: 10 */
//add(5, 8, '20');

//return value
const adding = (a:number, b:number, c: number | string = 10):void => {
    console.log(a + b); 
    console.log(c);       
}
adding(8,8);



const minus = (a:number, b:number) => {
    return a + b;
}
let results = minus(10, 7);
console.log(results);


//Function type
type StringorNum = string | number;
type objWithName = { name:string, uid:StringorNum };

const logDetails = (uid:StringorNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);    
}

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`);    
}


//let greet: Function;
// () => void


// example 1 

let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);    
}

// example 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne:number, numTwo: number, action: string) => {
    if(action === 'add'){
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

// example 3

let logDetails: (obj: {name: string, age: number}) => void;
type person = {name: string, age: number};

logDetails = (logdata: person) => {
    console.log(`${logdata.name} is ${logdata.age} years old`);
    
}


//form handling
// const anchor = document.querySelector('a')!;
// console.log(anchor);
/* if(anchor){
    console.log(anchor.href);
} */
// console.log(anchor.href);


//classes (readonly, private, public)
class Invoice {
    client: string;
    details: string;
    public amount: number;

    constructor(c: string, d: string, a:number){
        this.client = c;
        this.amount = a;
        this.details = d;
    }
    format(){
        return `${this.client} own  ${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('Bala', 'website', 500);
const invTwo = new Invoice('Bhuvana', 'website', 250);
//console.log(invOne, invTwo);

//set array
let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);
//console.log(invoices);

invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format());    
})




//form Handling
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFontElement;
// console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );    
});



//interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'kamal',
    age: 30,
    speak(text: string): void{
        console.log(text);        
    },
    spend(amount: number): number {
        console.log('I spend', amount); 
        return amount;       
    }
};

console.log(me);

const greetPerson = (person: IsPerson) => {
    console.log('Hello', person.name);    
}
greetPerson(me);




// intrface used
/* let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('kamal', 'Designer', 400);
docTwo = new Payment('Arun', 'Developer', 600);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs); */


//class used
/* const invOne = new Invoice('Bala', 'website', 500);
const invTwo = new Invoice('Bhuvana', 'website', 250);
//console.log(invOne, invTwo);

//set array
let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);
//console.log(invoices);

invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format());    
}) */


// GENERICS
const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'kamal', age: 40});
console.log(docOne);

// GENERICS Extends
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'kamal', age: 40});
console.log(docOne.age);





// with interface
interface Resource {
    uid: number;
    resourceName: string;
    data: object;
}

const docThree: Resource = {
    uid: 1,
    resourceName: 'Kamal',
    data: {name: 'Arun'} //only allow object
}
console.log(docThree);


// with interface Extent
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: 'Kamal',
    data: 'Holedata' // allow string only
}
console.log(docThree);
const docFour: Resource<string[]> = {
    uid: 1,
    resourceName: 'persons',
    data: ['kamal', 'arun'] // allow string array
}
console.log(docFour);



// ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
    uid: number;
    resourceName: ResourceType;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data: { title: 'Name of the person'}
}

const docTwo: Resource<string[]> = {
    uid: 2,
    resourceName: ResourceType.BOOK, // allow ENUM
    data: ['kamal', 'arun'] 
}

console.log(docOne, docTwo); //Enum allow return Numbers


// tuples
let arr = ['kamal', 24, true];
arr[0] = false;
arr[1] = 'Arun';
arr = [40, false, 'sakthi'];

console.log(arr);

let tup: [string, number, boolean] = ['kamal', 24, true];
console.log(tup);

tup[0] = false; // not allow 
tup[1] = 'kamal'; // not allow 
tup[2] = false; // this allow 

let student: [string, number];
student = ['Kamal', 2020]; // allow 
student = [77, 'arun']; // not-allow