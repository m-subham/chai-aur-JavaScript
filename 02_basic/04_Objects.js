// const tinderUser = new Object ()
const tinderUser = {}

tinderUser.id = "120"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname :{
            firstname:"SUbham",
            lastname:"Maharana"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"A" , 2:"B"}
const obj2 = {3:"a" , 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1 ,obj2,obj4)    // {} - all obj elements store in empty object 

const obj3 = {...obj1 , ...obj2 , ...obj4}
// console.log(obj3);


const Users = [
    {
        id:1,
        email:"S@gmail.com"
    },
    {
        id:1,
        email:"S@gmail.com"
    },
    {
        id:1,
        email:"S@gmail.com"
    },
    {
        id:1,
        email:"S@gmail.com"
    },
]

console.log(Users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged")); // check property avilable or not
