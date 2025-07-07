//Arrays -----=> pass by reference

const myArr1 = [ 1,2,3,4,5]  

const myArr2 = ["ash",45,true,null,undefined,[1,2,3],45.6]   // all datatype possible and also re-sizeable
console.log(myArr2)
console.log(myArr2[5])
let myArr3 = myArr2
myArr3[1] =21
console.log(myArr2)   // pass by reference

const myArr4 = new Array(12,23,34,45,56,67,78,89,90)   //a different method to declare an array
console.log(myArr4[4])


// Array methods............

console.log(myArr1.push(6))      // add 6 to the end of the array
console.log(myArr1.push(7))     // add 7 to the end of the array
console.log(myArr1.pop())       // remove last element from the array

console.log(myArr1.unshift(15)) // add 15 in the starting of the array but generally this operation is consider tobe bad cz of shifting in all the values
console.log(myArr1.shift()) // just like pop it remove an element but from the front..

console.log(myArr1.includes(3))
console.log(myArr1.indexOf(12))   // not find then gives the answer = -1 .
console.log(myArr1.indexOf(4))     // find and give the index 

let myArr5 = myArr1.join()
console.log(myArr1)              // answer is in square brackets
console.log(myArr5)             // answer is not in square brackets
console.log(typeof myArr5)     // changed datatype to string but myArr1 has datatype object 

let myArr6 = [ 0,1,2,3,4,5]
const myArr7 = myArr6.slice(1,4)    // give element from index 1 to 3
console.log(myArr7)
console.log("B: ",myArr6)          // the full array will be printed , no element delete..

const myArr8 = myArr6.splice(1,4)   // give the element from index 1 to 4 completely 
console.log(myArr8)
console.log("C :" ,myArr6)           // now the spliced element is slraedy deleted from our array , the rest element are displayed




















































