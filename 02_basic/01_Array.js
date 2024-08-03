// array

const myArr = [10,1,2,3,4,5]
const myHeros = ["spiderman" , "Ironman", "Hanuman"];

const myArr2 = new Array(11,1,23,6,7,8)
// console.log(myArr2[0]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(10));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


// Slice , Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1,3);
console.log("C ", myArr);
console.log(myn2);

// Splice maniculate the orginal array