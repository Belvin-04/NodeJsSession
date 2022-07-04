// This is how we do comment in Javascript file.

// Type of Data
let m = 3;      //number
let n = 'abc';  //string
let o = {
    id: 'abc123',
    name: 'abc',
    age: '20'
};    


let x, y, z; // Variable declaration
var p;

const s = 20;

let xyz = "xyz";
xyz = "pqr";

x = 5; // Variable assignment
y = 6;
z = x + y; // Arithmatic operation

console.log("x:", x, "y:", y, "z:", z); // Printing in terminal


// Arithmatic Operators
let w = 2;
let v = 3;
console.log("v+w", v + w); //Addition
console.log("v-w", v - w); //Sub
console.log("v*w", v * w); //Multiply
console.log("v**w", v ** w); //Expo
console.log("v/w", v / w); //Division    
console.log("v%w", v % w); //Mod        
console.log("++v", ++v); //Increment
console.log("--w", --w); //Decrement



// Difference between == and ===
let a = 3;
let b = 3;

console.log("\na==b : ", a == b); // Compares just value
console.log("a===b : ", a === b); // Compares values and type


// String Methods
let str1 = "Hello World";
console.log("String Lenght: ",str1.length);


//slice(startIndex,endIndex)
console.log(str1.slice(6,9));
console.log(str1.slice(-8,-2));


//substring(startIndex,endIndex)
console.log(str1.substring(9,6));
console.log(str1.substring(-2,4));

//subStr(startIndex,count)
console.log(str1.substr(2,2));


let answer = multiply(10,10)

function multiply(a,b){
    return a*b;
}

console.log(answer);

let arr = [0,1,2,3,4,5,4,3,2,1,0];

let aa = arr.filter(function(item){return item>=4});

console.log(aa);