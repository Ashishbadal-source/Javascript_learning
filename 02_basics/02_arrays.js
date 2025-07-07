const marvel_heroes =["ironman","spiderman","thor"]
const dc_heroes = ["flash","batman","superman"]
//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes)    // [ 'ironman', 'spiderman', 'thor', [ 'flash', 'batman', 'superman' ] ] this is gonna be our output(like 2d array)

//console.log(marvel_heroes[3][2])  // to access 2d array ( but its not better method to add 2 arrays )
// push method do the operation on existed array but one more method called concat which do operation on new array 

const allHeroes = marvel_heroes.concat(dc_heroes)  //['ironman', 'spiderman', 'thor', 'flash', 'batman', 'superman'] add like this which is a better method to add 2 arrays
console.log(allHeroes)

// one another interesting method is spread method which do the same work as concat do
const all_new_Heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_Heroes)        // ['ironman', 'spiderman', 'thor', 'flash', 'batman', 'superman'] same ouutput as from concat occurs(max used)

const new_array1 = [0,1,2,[3,4,5],6,[7,[8,9]]]
const new_array2 = new_array1.flat(Infinity)        // convert multi dimentional array to the 1-d array 
console.log(new_array2)

console.log(Array.isArray("Ashish"))   // tells us rather this string,objects etc is an array or not  (used in web scraping)
console.log(Array.from("Ashish"))      // convert the string,objects etc into an array                (used in web scraping)

console.log(Array.from({name:"Ashish"}))  // special case => give empty case , we have to tell it about the key or value that operate on(interview ques.)

let score1 = 100
let score2 =20 
let score3 =30
console.log(Array.of(score1,score2,score3))  // make a new array annd return it  after adding all the element given in this 













































