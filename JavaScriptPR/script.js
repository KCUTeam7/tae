// variable types---------------------------
//var person = 'John';
//  console.log(person);

//  person = 'Nick';
//  console.log(person);

//  var firstName ='Bob';



//  let age = 30;
//  console.log(age);
// age = 35;
// console.log(age);


// const city = 'london';
// console.log(city);
// city='Rome';

// const color = 'red';


//primitive data types-------------------------------

// const str = 'John is a developer';
// console.log(str);
// console.log(typeof str);

// const num = 30;
// console.log(num);
// console.log(typeof num);


// const num1 = 10;
// const num2 = 20;
// const bool = true;
// console.log(typeof bool);

// let a;
// console.log(a);
// console.log(typeof a);

// const b = null;


// //Operators; special function; more than two parameters; return result-----

// const a = 5 / 5; 
// console.log(a);

// const b = (5 + 5) * 5;
// console.log(b);

// //comparison; boolean result

// const num1 = 10;
// const num2 = '10'; //if different data type, still same return '=='cannot cate, but '===' can catch



//Type Coercion---------------------------
// const a =10 + '20'; //different data types can be concaticnated
// console.log(a);

// const b = 'Hello' + " there";
// console.log(b);

// const c = 'a' + 15 + 10; //a1510
// //const c = 15 + 10 + 'a'; // 25a // different results up to order
// console.log(c);


//5 === 5 true
//5 === 5 === 5 false 
// true === 5 false
// true == 1 true
// false == 0 true
//ture === 1 false

//Coditional statements------------------

// const kid = 'Alexis';
// const gender = 'male';

// if(gender === 'male'){
//     console.log(kid + ' is my son');
// }else{
//     console.log(kid + " is my daughter");
// }

// const prof = 'de';
// if(prof === 'composer'){
//     console.log(prof + " teaches students");
// }else if(prof === 'composer'){
//     console.log(prof + " creates music");

// }else{
//     console.log("Professions do not match");
// }

// && || !
// if(!5 === 5)
// {
//     console.log('Codition is true');
// }else{
//     console.log('Condition is false');
// }

//Functions-------------------------------------

// function funName(){
//     console.log("Hello there");
// }

// funName();

// function passExam(name, score){
//     const passUni = 71;
//     const passColl = 51;

//     if (score >= passUni){
//         console.log(name +' enrolled at the Uni' + score + ' pts');
//     }else if( score >= passColl){
//         console.log(name + ' enrolled at the College' + score + ' pts');

//     }else{
//         console.log(name + " failed");
//     }

// }
// passExam('Bob', calScore(44,45));
// passExam('Ann', 75);
// passExam('Jack', 50);
// passExam('Sue' ,65);


// function calScore(quizScore, essayScore){
//     const score = quizScore + essayScore;

//     return score;
// }

//Arrow Functions
// const multiply = function(x, y){
//     const a = x * y;
//     return a;
// }
//arrow function form of above function
// const multiply = x => x * 10;
    
// console.log(multiply(10));

//Array-----------------------------------------------------------

// const arr = ['Ann','Bob','John',10,5,true,[1,2,3]];
// console.log(arr);
// console.log(arr[0]);//return indexVal
// console.log(arr[0][1]);//return indexChar at the element

// const colors = ['white', 'black', 'red'];
// colors[1] = 'green';
// colors.push('blue');//put element at tail
// //colors.pop(); //pop tail
// colors.shift(); //remove 0 index element
// colors.unshift('purple'); //put element at head


// console.log(colors.indexOf('yellow')); // null case, return -1
// console.log(colors.indexOf('green'));
// console.log(colors);

//Objects; set up variables for function ----------------------------

// const person ={
//     myFunc(){
//         console.log('Hi there');
//     }


// };

// person.myFunc();

// person.firstname = 'John';
// person['lastname'] = 'Smith';
// person.firstname = 'Bob';

// person.son = {
//     name: 'Nick'
// };

// person.son.age = 5;


// console.log(person);
// console.log(person.firstname);

//Loop-----------------------------------------------------------
const arr = ['John','Nick','Bob', 'Nmichael', ' Mary'];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// for(let i = 0; i < arr.length; i++){
//     //i = i + 1
//     // console.log(arr[i]);
//     if(arr[i] === 'Bob'){
//         console.log(arr[i] + ' is my brother');
//         continue; //break; go next index
//     }
//     console.log(arr[i]);
// }

// let i = 0;
// while(i <= 10){
//     i++; // 1 - 11
//     console.log(i);
//     //i++; //0 - 10
// }

// let i = 0;
// do {
//     i++ //1-10
//     console.log(i);
//     //i++; //0-9
// }while(i < 10); 

//Template String -----------------------------------------------

// const name = 'John';
// let age = 29;
// let profession = 'instructor';

// function personES5(){
//     console.log('My name is ' + name + " I am " + age + " years old and I am an " + profession);

// }

// personES5();


// function personES6(){
//         console.log('My name is ${name} I am ${age} years old and I am an ${profession}');
// }

// personES6();