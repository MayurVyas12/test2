// ✅constant example 
// const dulha = "Lab";
// const dulhan = "Labi";

// console.log(dulha + " " + dulhan);

// dulha = "MAYUR";

// console.log(dulha + " " + dulhan);

// ✅hoisting

// console.log(a);
// var a = 10;
// // var a ko value diya hai 10 and upar print kiya hai uske output will be undefined. var a = 10 will break  and declaration(var a;) will move to the top



// console.log(b);
// // output -- b is not defined.

// ✅Types in js

// var a = 12;
// b = a;
// console.log(a);
// console.log(b);
// // ismai b mai 12 pass kar diya and ho gya its successfull

// var a1 =[1,2,3,4];
// b1 = a1;
// console.log(a1);
// console.log(b1);
// // array mai bhi b1 ko a1 ka arrays de diya ho gya lekin........ 

// b1.pop();
// console.log(a1);
// console.log(b1);
// // pop b ko kiya, b mai sai last elemey remove kiya to a se bhi ho gya remove.
// // so thats the problem

// ✅conditional – if else…...else if…...else

// if(17 > 8)
// {
// console.log("true");
// }
// // 17 bada hai 8 se to outout will be true and age ka kuch bhi execute nhi hoga..

// else if(111> 10){
// console.log("else if run hua");
// }
// else{
//     console.log("false");
// }

// ✅ Loops -> for / While

// //for loop
// for (var a = 1; a < 5; a++)
// {
// console.log(a);
// }

// //while loop

// var a =12;
// while (a < 20)
// {
//     a++;
// console.log(a);
// }

// ✅ Functions

// //ex 1
// function students() // paramenter pass upar hota hai
// {
//     // function statement
// console.log("A");
// console.log("B");
// console.log("C");
// console.log("D");
// }
// students(); // argument niche hota hai.
// students();


// ✅ Functions parameter and arguments
// //ex2
// function number(a ,b) // parameter
// {
//     console.log(a + b);
// }
// number(12, 13); //argument

// ✅Arrays

// var array = [1,2,3,4,5];

// // array.push(9);
// // array.pop();
// // array.unshift("apple");
// // array.shift();
// array.splice(2,2); // seond 2 means total value will be removed.
// console.log(array);

// ✅Objects

// var a = {}
// // this is blank object

// var a1 = {
//     firstName: "Omkar",
//     lastName: "Gawade",
//     Rollno: 32,
//     DOB: "18th june 1994",
//     MarritualStatus : "No",
//     fnc:function()
//     {

//     }
// }
// // property vs method :- firstname, lastname all are property and fnc jiska color green hai its a method


// // to access any value
// var type = a1.Rollno;
// console.log(type);

// //updating values, lets change the last name

// var change = a1.lastName = "AKASH";
// console.log(change);
// // output is askash

// ✅ function scope and braces scope / ✅Difference between var and let and const.
// Var function scope hai
// 	Let braces scope hai.

// function scope() {

//     for (let i = 1; i < 12; i++) {
//         console.log(i);
//     }
//     console.log(i);
//     // let braces scope hai islye error aya ki i is not defined.
// }
// scope();

// // ✅window object

// var a = 12;
// var b = 20;

// let  d = 30;


// // In the console tpye window + emter, you will see var a and b add them inside window objects but let dont add.

// ✅stack 

// ✅heap memory

// ✅execution context

// function abc() {
//     var a = 10;
//     console.log("a is 10");

//     function xyz() {
//         var b = 12;
//         console.log("b is 12");

//     }
   
// }
// abc();
// xyz();

// // execution context mai var a jayega then function xyz then lexical context btayega ki kya use kar skte haiu kya nhi
// // xyz ko uske function khatam hone ke bad he use kar skte hai , nhi to error ayega.

// ✅how to copy reference

// // basics practice
// var a = [1,2,3,4];
// var b = a;

// console.log(b);


// b.push(2);
// console.log(b);
// console.log(a);

// b.pop();
// console.log(b);

// b.unshift(12)
// console.log(b);
// console.log(a);

// b.shift()
// console.log(b)

// b.splice(1,3)
// console.log(b);

// Latest es6 to copy ref by using spread operator
//  var a = [1,2,3,4,5,6]
//  var b = [...a]

//  console.log(b);

// b.push(10);
// console.log(b);
// console.log(a);

// copy objects using spread operator

// var a = {
//     firstName : "mayur",
//     lastName  : "vyas"
// }val
//  var b = {...a};

//  console.log(b);

// a.firstName = "Diksha"

// console.log(a);

// ✅ Truthy and Falsy value


// if(NaN)
// {
//     console.log("truthy");

// }
// else
// {
//  console.log("Falsy")   
// }
// // falsy print hoga because NaN is a falsy value as simple as that.


// ✅for each, for in
// for each ex:- 

// var a = [1,2,3,4,5,6];

// a.forEach(function(val){
// console.log(val * 10);
// });

// console.log(a)
// // orignal array will remain same


// ✅for in loop ex:-

// var mayur = {
//     name : "mayur Vyas",
//     age : 24,
//     city: "Mumbai"

// }

// for(var key in mayur)
// {
// // console.log(key);

// console.log(key , mayur[key]);
// }

// ✅do while

// var a = 100
// do
// {
// console.log("Hello mayur")
// a++;
// }
// while(a < 12);
// // condition false hai fhir bhi ek bar print hua.

// ✅Callback functions

// setTimeout(function(){
// console.log("Hello i will run aftyer 2 sec");
// }, 4000)

// // iske andar hmne ek function likha hai ki , 4 sec bad chlna isse ko calback function bolte hai

// ✅first class function

// // var a = function(){}

// // basic function example
// function abcd(a)
// {
// console.log(a);
// }

// abcd(12)

// // ex 2

// function student (a){
// a();
// }
// student(function(){console.log("Hello mayur")});

// ✅how arrays are made behind the scenes

// var a = [11,22,33,44];

// //js will convert upper part into below one 

// a = {
//     0: 11,
//     1: 22,
//     2: 33,
//     3: 44
// }
// console.log(a);

// console.log(Array.isArray([]));
// // this is an array square bracket
// console.log(Array.isArray({}));
// // not an array curly braces

// ✅ how to delete object properties

// var student = {

// class : "bsc it",
// age : 27,
// city : "Mumbai"

// }
// console.log(student);

// delete student.age;
// delete student.class;
