
function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}

// sayMyName()

// function addTwoNum(num1 , num2){
//     console.log(num1 + num2);
// }

// addTwoNum(3,4)
// addTwoNum(3,"4")
// addTwoNum(3,"a")
// addTwoNum(3 , null)

function addTwoNum (num1 , num2){
    // let result = num1 +num2
    // return result 

    return num1 + num2 ;
}

const result = addTwoNum(3,5)
// console.log("Result :" ,result);


function loginUserMsg(userName = "Sam"){
    // if(userName ===undefined){
    //     console.log("Please enter a user name");
    //     return 
    // }

    if(!userName){
        console.log("Please enter a user name");
        return 
    }


    return `${userName} jsut Logged in`
}

// console.log(loginUserMsg("Subham"));
// console.log(loginUserMsg( ));        // undefined just Logged in 

function calculateCartPrice(...num1){               // ... rest operator
    return num1
}

// console.log(calculateCartPrice(200 , 400 , 600));        // [200 , 400, 600]

function calculateCartPrice(val1, val2, ...num1){             
    return num1
}

// console.log(calculateCartPrice(200 , 400 , 600 , 500 , 2000));          // [600 , 500, 2000]

const user = {
    userName :"Subham" , 
    price : 999
}

function handObject(anyObject) {
    console.log(`User Name is ${anyObject.userName} and Price is ${anyObject.price}`);
}

// handObject(user)

// handObject({
//     userNmae: "Maharamna" , 
//     price : 566
// })

const myNewArray = [200 , 400, 600 , 100]

function returnSecondValue(getArray) {
    return getArray [3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100 , 500 , 600 , 800 , 900]));

