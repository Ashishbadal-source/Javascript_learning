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
