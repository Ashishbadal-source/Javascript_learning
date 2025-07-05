// Semicolons are optional in JavaScript
let score1 = "18"
let score2 = "18vk"
let score3 = null
let score4 = undefined
let score5 = true

console.log(typeof score1)
let value1 = Number(score1)
console.log(value1)                            // answer is 18

console.log(typeof score2)
let value2 = Number(score2)
console.log(value2)                            // answer is NaN i.e., Not a Number

console.log(typeof score3)
let value3 = Number(score3)
console.log(value3)                         // answer is 0

console.log(typeof score4)
let value4 = Number(score4)
console.log(value4)                         //answer is NaN i.e., Not a Number

console.log(typeof score5)
let value5 = Number(score5)
console.log(value5)                         //  answer is (1 for true) and (0 for false)

let isloggedIn1 = 1 
let isloggedIn2 = ""
let isloggedIn3 = "ashish"

let booleanlogged1 = Boolean(isloggedIn1)
console.log(booleanlogged1)                                   // answer is (1 for true) and (0 for false)

let booleanlogged2 = Boolean(isloggedIn2)
console.log(booleanlogged2)                                 // false for empty string

let booleanlogged3 = Boolean(isloggedIn3)
console.log(booleanlogged3)                               // true for non-empty string


//**************************************  OPERATIONS  **********************************************//


let val1 = 18
let val2 = -val1
console.log(val2)

// console.log(121+23)             //  basic operations
// console.log(121-23)
// console.log(121*23)
// console.log(121/23)
// console.log(121**23)
// console.log(121%23)


let str1 = "Hello"
let str2 = " Ashish"
let str3 = str1 +str2
console.log(str3)         //string concatenation


console.log("1"+2)              // ans => 12
console.log(1+"2")              // ans => 12
console.log(1+2+"2")           // ans => 32 
console.log("1"+2+2)         // ans => 122

console.log(true)           // ans => true
console.log(+true)          //ans => 1
//console.log(true+)        //error
console.log(true+17)        // ans => ( 1+17 = 18 )
console.log(+"")            // ans => 0

let num1,num2,num3
num1 = num2 = num3 = 3 + 4

let gamecounter = 100
let x = gamecounter++        //post -increment
let y = ++gamecounter       // pre-increment
console.log(x)
console.log(y)




