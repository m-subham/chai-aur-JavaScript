const user  = {
    username : "Subham",
    price : 9999 ,

    welcomeMessage : function (){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this.username);
}
// chai()

// () =>  --- Arrow function

// const addTwo = (num1 , num2) =>{
//     return num1+ num2
// }
// console.log(addTwo(4,5));

// const addTwo = (num1 , num2) => num1 +num2
// console.log(addTwo(4,8));

// const addTwo = (num1 , num2) => (num1 + num2)
// console.log(addTwo(2,5));

const addTwo = (num1  , num2) => ({username : "hitesh"})

console.log(addTwo(3,4));

