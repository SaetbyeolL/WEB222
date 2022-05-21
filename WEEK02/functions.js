//camelCase is recommended.
//js doesn't write data type. 

//1. function declaration
// function add(a,b) { 
//     return a+b;
// }
// let total=add(1,1);
//total 2

//2. Function Expression - Function Object (same as above)
// let add2=function(a,b){
//     return a+b;
// };
// add2(1,1);

//3. Arrow Function
//let add3=function(a,b){ return a+b; }; old style(syntax)
//let add3=(a,b) => { return a+b;}; // arrow function leave out 'return'
//let add3=(a,b) => a + b;
//---------------------------------------------------------------------------

//example1
//function doSomething(a,b){
  // explicit return statement
  //return  a + b;
  // implicit return undefined
//}
//let value = doSomething('1','2');
//'ab' String 출력은 12로 나옴. 문자열로 인식하기 때문. 
// 3 Number

//example2
// function doSomething(a,b){
//     return  a + b;
// }
// let value = doSomething(1, 2, 3); // argument가 함수에 있는것보다 더 많아도 상관없음. 
//'ab' String 출력은 12로 나옴. 문자열로 인식하기 때문. 
// 3 Number

//example3
// let a;
// function add(){
//     let total = 0;

//     for(let i=0; i< arguments.length;i++){
//         total+=arguments[i];
//     }
//     return total;
// }
// console.log(add(1, 2, 3, 4, 5), add(1, 2));

//example4
// let a;
// function add(...numbers){ // ...numbers: I want to take the rest of the parameter that are inside of here and I want to call them numbers
//                           //             I want to make something called numbers. 
//                           // 예시3번과 비교 이점: It helps to document your code a little bit more and clear. 
//     let total=0;

//     for(let i=0;i < numbers.length;i++){
//         total +=numbers[i];
//     }
//     return total;
// }

//=================================================================================
//Practice
//8. function to create a javascript library name generator: generateName("dog") should return "dog.js"
/* Function Declaration

function generateName(name){
    return name + '.js';
}
*/

// Function Expression
// let generateName=function(name){
//     return name + '.js';
// }; //이렇게 쓸수도 있고

// Arrow Function
// let generateName = (name) => name + '.js'; // 이렇게도 사용가능

// function generateName(name){
//     if(name.endsWith('.')){
//         return name + 'js';
//     } else{
//         return name + '.js';
//     }
// } 
// let name = 'web222';
// console.log(name, generateName(name));


//10. check if a number is between two other numbers, being inclusive if the final argument is true:  2번째인수가 1,3번째인수 사이에 있는 숫자라면?
//    checkBetween(66, 1, 60, true) should return false.
// inclusive는 해당 내용이 참인지 거짓인지 판단
// function checkBetween(value, low, high, inclusive){ 
//     if(inclusive){
//         return value >= low && value <= high;
//     } 
//     return value > low && value < high;
// }
// console.log(checkBetween(50, 1, 50));


//18. Function to log all arguments larger than 255: showOutsideByteRange(1, 5, 233, 255, 256, 0) should log 256 to the console. 
// let showOutsideByteRange = function(){ //변수를 정의해준후 아래에서 적용
//     for(let i=0;i<arguments.length;i++){
//         let value=arguments[i]; // arguments가 작성되어있는 2부분을 value로 변경해서 사용할수 있다.첫줄엔 '(...value)로 변경.
//         if(value>255){
//             console.log(value)
//         }
//     }
// };
// showOutsideByteRange(1, 5, 233, 256, 300, 0);


//11. Function to calculate the HST(13%) on a purchase amount.
// function calculateHST(amount){
//     return amount*0.13
// }

// console.log(25, calculateHST(25));

//=========================================================================
//function scope and closure

// var s='hello';
// //scope chain

// function f(){
//     //f function scope
//     console.log(s);

//     for(let i=0;i<10;i++){
//     }
// }
// console.log(s);


// var x=1;
// function parent() {
//     var x=2;
//     // x overwrites/overrides/shadows global x

//     function child(x){
//         //override x in parent and use 3
//         console.log(x);
//     }
// }
// child(3);


//Closure
// function parent(){
//     var x= 7;
//     return function child(){
//         return x * 2;
//     };
// }
// let f =parent();
// console.log(x);
// f();//8
// f();//9


//IIFE
let add = (function(value){
    return function(n){
        value+=n;
        return value;
    }
})(10);

add(1);//11
add(1);//12
value=3;