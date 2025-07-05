const account_id = 151515
let account_mail = "ashish@gmail.com"
var account_password = "ashish"
account_city = "Jaipur"

// account_id =2   Not allowed to change const in js

account_mail = "ash@ash.com"       // these all three can be changed (redefined)
account_password = "343434"
account_city ="delhi"            // we can also define something from this type but this is not the good way to define something. 

let account_state;      // if we declare a variable without its value then output will show undefined not error
console.log(account_id);

// prefer not to use 'var' cz of block scope and functional scope(ye baar baar change hota rhta h jitni baar bhi defined krdo )
//( use 'let' in max cases then 'const' and very rare is 'var')

console.table([account_id , account_mail , account_password , account_city ,account_state])