console.log(2>1)            // true
console.log(2==1)           //false
console.log(3!=3)           //false
console.log(2<1)            //false

console.log("2" > 1)            // true
console.log( "02" > 1)          //true

console.log(null == 0)          //false 
console.log(null > 0)           //false 
console.log(null >= 0)          //true

/* 
The reason is that an equality check == and comparisions > < >= <= works differently ..
Comparsions convert null to a number , treating it as 0 .
That's why ( null >= 0 ) is true and ( null > 0 ) is false ..
*/
  
console.log( undefined == 0 )           //false
console.log( undefined >= 0 )           //false
console.log( undefined <= 0 )           //false

console.log("2" === 2 )   // triple equal to is used to check strictly...Like the data types also has to be same along with the number.. 
// the answer of the upper one is false cz left "2" is string and right one is a number.. 