"use strict";  // treat all js code as newer version

// alert (3+3) we are using nodejs, not browser
console.log(3+3)

let name = "riti"
let age = 20
let isLoggedIn= false


// ...._all datatypes

// number => 2 to power 53
// bigint
// string =>  ""
// boolean => true/false
// null =>  standalone value
// undefined => 
// symbol => unique 

//  object


console.log(typeof "age")
console.log(typeof "null")



// Primitive 
//  7 Types : string , Number , Boolean , null , undefined , symbol , BigInt

//  

// Non Primitive /refrence type
//  Aray , Objects, Functions 

const heros = ["shaktiman" , "naagraj", "doga"]
console.log(heros);


let myobj ={
    name:"rushi",
    age: 23
   
   
}
console.log(myobj);

const myFunction = function(){
    console.log("hello World")
}



// ###############################################################

// stack  memory , heap memory

// stack used (primitive ) heap(non-primtive)

let myHomeName = "simonsuri"

let anotherName = myHomeName
anotherName = "rushisi"

console.log(myHomeName);
console.log(anotherName);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "rushi@google.com"

console.log(userOne.email);
console.log(userTwo);
