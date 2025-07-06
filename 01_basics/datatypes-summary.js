// Two major types of data types are in JS

/*
1. PRIMITIVE --- (call by value) - 7 in number  ...
    => String , Number , Boolean , null , undefined , BigInt , Symbol
*/

const score ="40"
const scoreNumber = 40.55    // Number include all part ( int + float )
const isloggedIn = true 
const outsidetemp = null 
let emailId ;

const Id = Symbol("123")
const AnotherId = Symbol("123")
console.log(Id === AnotherId)       // gives false answer cz symbol makes both the variable unique even if there value looks same 

const bigNumber = 12345678994212345678n   // bigInt is used to store these type of intergers in JS



/*
2. REFERENCE TYPE ( NON-PRIMITIVE ) --- ( call by reference) ...
    => Arrays , Functions , Objects 
*/


const heroes = ["Shaktimaan","Nagraaj", "Doga"]  //Array 

let my_obj = {                                   //Object
    name : "Ashish",
    age : 20 ,
    isData_scienceBranch : true
}

const myFunc = function(){                     //function
    console.log("Hello world")
}                                    

// let bigNum = 12312342343343234322134894567890
console.log(typeof bigNum)                        // if BigNum is not defined then show undefined 
console.log(typeof outsidetemp)                // it givesus datatype object but the value of outsidetemp = null 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Stack (Primitive - pass by value) and Heap ( Non-Primitive - pass by reference)

let utubechannelName = "DataScience with Ash"                   
let another_utubeName = utubechannelName                   // go to stack as a copy
another_utubeName = "Software developemt with Ash"
console.log(utubechannelName)
console.log(another_utubeName)                  // pass by value 

let userOne ={
    mailId : "ash@google.com",              // go to heap 
    upiId : " ash@ybl"
}

let userTwo = userOne                   // pass by reference
console.log(userTwo.mailId)
console.log(userOne.mailId)




