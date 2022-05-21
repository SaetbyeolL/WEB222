/**
function greeting() {
    console.log("Hello World!"); 
}
 */

//Run Eval Print Loop(REPL)
/**
 * a
 * b
 * c
 */

var pi = 3.14159; // 변수 선언할 때 var 사용. 데이터 타입 안써도됨
//최근엔 let, const 사용

let radius = 4.2;
const pi = 3.14159; // number (64-bit double float)

let string = "Hello World"; // string, unicode

let b = true;
let b2 = false; // boolean

//Truthy and Falsy
let s = null;

// = assign
// == compare (ex. '1' == 1 -> true)
// === strict equal (ex. '1' === 1 -> false)
if(x = 7) {

}


// o is a Reference to an Object
let o = new Object(); // object
let o2 = o;

let n = null; //nothing이라고 정의된것
let u = undefined; // 정의되지 않은것
let u2;

let area; // undefined


area = pi * radius * radius;

console.log('Area = ${area}');
