const name = "Ashish"
const repoCount = 5

console.log( name + repoCount + "Value" )  // outdated method 

console.log(`My name is ${name} and my repoCount is ${repoCount}`)    // modern method and good to write like this

const gameName = new String("Ash.Gaming")   // another method to declare string 
console.log(gameName[0])                    // index starts from zero so answer is 'A'
console.log(gameName.__proto__)             // gives {} as otput which means object

console.log(gameName.length)            // we can directly access all the prototype-methods like this
console.log(gameName.toUpperCase())    // cz 'toUpperCase' is a function so we access like this(BUT THIS IS PASS BY VALUE REMEMBER THAT)
console.log("ASHISH"[2])              // H is at 2nd index in ASHISH
console.log(gameName.charAt(4))        // to find the character at particular position
console.log(gameName.indexOf('G'))      // to find the index of a particular character

const newStr1 = gameName.substring(0,4)     // normal substring function
console.log(newStr1)
const newStr2 = gameName.substring(-1,5)    // same output as (0,5) not the error
console.log(newStr2)

const Str1 = gameName.slice(-8,8)
console.log(Str1)

const Str2 = "       Ashish        " ;
console.log(Str2)
console.log(Str2.trim())                   // trimStart() and trimEnd() are also available 

const url1 = "https://ashish%20badal.com"     //to replace some part of any string to another part
console.log(url1.replace('%20','--'))

console.log(url1.includes('badal'))         //give answer in true or false that given string preent in url1 or not

const splitfunc = "ashish@kumar@badal"
console.log(splitfunc.split('@'))         //split through a particular section

console.log(eval(2+4))            // to evaluate any expression

console.log(eval("2"+ "4"))     // string concatenation

const newstring1 = "Ashish"
console.log(newstring1.padEnd(10,"-"))           // add a padding of ---- from last to complete the length upto 10

const newstring2 = "333"
console.log(newstring2.padStart(5))          // add the padding of white spaces from starts to complete the length upto 5

const newstring3 = "Happy ! "
console.log(`I feel ${newstring3.repeat(3)}`)   // to repeat something without writing it directly or completely

const newstring4 = "ASHISH BADAL"
console.log(newstring4.replaceAll("A","Z"))   // replace all the character or part of string with another string

const newstring5 = "ashish kumar"
console.log(newstring5.search("h"))    // gives the index of first occurence of any particular character


