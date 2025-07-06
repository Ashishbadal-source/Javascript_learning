const score = 400 
console.log(score)                 // by-default take it as a number

const newscore = new Number(400)   // particularly written Number in the output and reduces the number of properties applied on.
console.log(newscore)

console.log(newscore.toString())       // number converted into string and some additional properties also came for this string
console.log(newscore.toFixed(3))     // follow decimal upto 3 places ..(important property)

const newscore2 = 1375.18461
console.log(newscore2.toPrecision(4))
console.log(newscore2.toPrecision(3))
console.log(newscore2.toPrecision(5))
console.log(newscore2.toPrecision(7))

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'))


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++--| MATHS |--++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\

console.log(Math)

console.log(Math.abs(-5))   /// make the number positive
console.log(Math.round(56.7))  // normal round-off
console.log(Math.ceil(45.01)) // if little bit greater than 45 then convert it into 46 
console.log(Math.floor(45.99))  // if little bit smaller than 46 than 45 itself 45 no changement

//Important Math library function 
console.log(Math.random())   // generate a random number between 0 and 1 .
console.log(Math.floor(((Math.random()*10)+1)))  // just a basic calculation 

const min = 1 
const max = 6
console.log(Math.floor( Math.random() * (max-min+1)) + min)   // to set the output range (very important...)






