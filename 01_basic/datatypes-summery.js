// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 123664n


// Reference (Non primitive)

// Array, Objects , FUnctions

const heros = ["a","b","c"];

let myObj = {
    name: "Subham",
    age:22.
}

const myFunction = function() {
    console.log("Hello World");
}

// console.log(typeof outsideTemp)
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);


// ********************************

// Stack & Heap 

// Stack (Primitive) , Heap(Non-primitive)

let myYoutubename = "my youtube"

let anothername  = myYoutubename
anothername = "Chai aur code"

console.log(anothername);
console.log(myYoutubename);
//++++++++++++++++++++++
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Subham@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//Stack --copy & Heap -- reference