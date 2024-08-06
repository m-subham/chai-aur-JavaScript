// singleton
Object.create

// Object Literals

const mySymbol = Symbol("Key 1")        // dataypes - symbol

const JsUser = {
    name:"Subham",
    "Full Name" : "Subham Maharana",
    [mySymbol]: "key 1",                    // Access the symbol in Square bracket
    age: 22,
    location : "bbsr",
    email : "Subham@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);

// console.log(typeof(JsUser.mySymbol));

JsUser.email = "Subham@outlook.com"
// Object.freeze(JsUser)
JsUser.email = "SUbham@chatgpt.com"

// console.log(JsUser);

// Add function in objects
JsUser.greeting = function(){
    console.log("Hello js Users");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js Users, ${this.name}`);
}

// console.log(JsUser.greeting);       //function reference
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());


// We access the Object Value with " . " & other hand access in  " [ ]" .