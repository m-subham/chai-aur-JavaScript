const marvel_heros = ["Ironman" , "Thor" , "Captain America"]
const dc_heros = ["superman" , "Aquaman" , "Batman"]

// marvel_heros.push(dc_heros)                 //push - add elements in existing array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)           //contact - add element in a new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros , ...dc_heros]       //Spread all elements
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)         //flat
console.log(real_another_array);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Subham"}));       //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));
