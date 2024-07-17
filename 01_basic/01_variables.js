const accountId = 144523
let accountEmail = "Subham@nothinf.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not alloweed

// {
//     // curly bracket is called scope
// }
accountEmail = "smkjes"
accountPassword = "2121212"
accountCity = "bengalure"

console.log(accountId);
console.log(accountId);

/*
Prefer not use var
because of issue in block scope and functional scope
*/

let accountState;

console.table([accountId , accountEmail ,accountPassword, accountCity,accountState])