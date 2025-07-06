//  DATES

let myDate = new Date()
console.log(myDate)                        // not very useful
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())              //my choice
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())

console.log(typeof myDate)  // object => interview question

// NOTE : Months are started from 0 in JS...

const newDate1 = new Date(2025,0,5)   // Here 0 represents january 
console.log(newDate1.toLocaleString())

const newDate2 = new Date(2025,6,6,16,52,0)   
console.log(newDate2.toLocaleString())

const newDate3 = new Date("2025-07-06")
console.log(newDate3.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)                      //comparision of time in milliseconds from 1 jan 1970 to now .( used to make polls=>imp.)
console.log(newDate3.getTime())

console.log((Math.floor(Date.now()/1000)))   //convert time into seconds from milliseconds ( Interview question )


let newdate4 = new Date()
console.log(newdate4.getFullYear())
console.log(newdate4.getDate())
console.log(newdate4.getDay())
console.log(newdate4.getHours())
console.log(newdate4.getMilliseconds())
console.log(newdate4.getMinutes())
console.log(newdate4.getMonth())
console.log(newdate4.getSeconds())
console.log(newdate4.toLocaleString())

let newDate5 = new Date()
newDate5.toLocaleString('default',{                  // important 
    weekday : "long",                     
})











