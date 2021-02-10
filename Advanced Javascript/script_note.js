// ANDREI NEAGOIE

//Advanced Control Flow

// Ternary Operator
condition ? expr1 : expr2 //Syntax
// E.g
function test() {
    return 1 > 2
}

test ? "Ït is true" : "It is false" //This just states that if the condition hold then condition 1 else condition 2. 


// Switch Statements
// E.g
function game(direction) {
    var yourMove;
    switch (direction) {
        case "forward":
            yourMove = "You're advancing"
            break;
        case "backward":
            yourMove = "You're regressing"
            break;
        case "left":
            yourMove = "You're straying left"
            break;
        case "right":
            yourMove = "You're straying right"
            break;
    
        default:
            yourMove = "Enter a valid direction";
            break;
    }
    return yourMove;
}//Mostly used to condition multiple statements. 


// ES6

// Variables
// let and const ----
let experience = 90; // Better used in place of var.
let wizardLevel = false;
const player = "Bobby"; // This variable cannot be changed.



// Destructuring ---
const obj = {
    player : "Bobby",
    wizardLevel : false,
    experience : 80
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel; // This is the regular way of picking out object properties.

const {player, experience} = obj;
let {wizardLevel} = obj; // This is a better way and faster.

// Object Properties
const name = "John Snow";
const obj = {
    [name]: "Actor",
    [1 + 2]: "Number",
    address: "Brooklyn"
}// [] Can only be used to identify the title.



// Template Strings. `` above tab key. ---
const name = "Sally";
const age = 34
const pet = "horse"

const greet = "Hello" + name + "you look " + age + "and your " + pet + "is cute. " // Tedious
const greeting = `Hello ${name} you look ${age - 10} and your ${pet} is cute` // Faster.



// Default Arguments ---
function greet(name = " ", age = "30", pet = "cat") {
    return `Hello ${name} you look ${age - 10} and your ${pet} is cute`
}



//Arrow Functions ----
function add(a, b) {
    return a+b
}
// OR ---
const add2 = (a,b) => {return a+b} ;

// ES6 END



// Advanced Functions

// Closures
function first() {
    const greet = "Hi"
    function second() {
        alert(greet)
    }
    return second
}
const newFunc = first();
newFunc(); // Closures enable second to access the greet variable in first. It also explains that parent scope do not have access to the children scope, but children scope have access to the parent scope. With var keyword, if statements do not create a new scope. With let anything in {} is a new scope. 

//Currying
var multiply = (a,b) => a*b // Normal function
var curried = (a) => (b) => a*b // This executes the function one at a time.
curried(3)(4);

// Compose
const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1
compose(sum, sum)(5); // This uses the output of a function as the input of the other

// Advanced Functions



// Advanced ARRAY  Note: They must all return a value to work.

// Map for ARRAYS
array = [1,2,5,10]
const mapArray = array.map((num) => {
    return num*2
}
)
mapArray; // This makes manipulating arrays easier. And used better for looping through arrays.

// OR

const newMap = array.map(
    function (num) {
        return num *3
    }
)
newMap;



// Filter
const filterArray = array.filter(
    (num) => {
        return num > 5
    }
) // This as the name suggests filters the array as the function describes.



// Reduce
const reduceArray = array.reduce(
    (acc, num) => {
        return acc + num
    }, 5 // 5 here is the accumulator.
) // In reduce the accumulator stores the function and iterates through the array.



// Advanced Array

// Reference Type
var obj1 = {value: 10};
var obj2 = obj1;
var obj3 = {value: 10}; // This shows that obj1 and obj2 are equal because obj2 is referenced from obj1. Whereas obj3 is not equal to obj1 because they are different containers.

// Advanced ARRAY 



// INSTANTIATION (FUNCTION CONSTRUCTOR)
class Player {
    constructor(name,type){ //Creates object properties.
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hello I am ${this.name}, I'm a ${this.type}`)
    }
} //Creates a reusable object.

class Wizard extends Player {
    constructor(name,type){
        super(name, type) //Allows to get the constructor of the object extended
    }
    play(){
        console.log(`I'm a ${this.type}, and I'm ready to play. `)
    }
} //By extending you use an existing object but add another functionality to it

const wizard1 = new Wizard("Arthur", "Healer");
const wizard2 = new Wizard("Merlin", "Knight");

// INSTANTIATION (FUNCTION CONSTRUCTOR)



// ES7

// Includes
var pets = ["cat", "dog", "bird"]
pets.includes("cat") // This is like an identifier. Returns true or false.

// Exponentials
var square = (s) => s ** 2
var cube = (c) => c**3 

// ES7



// ES8

// Padding
"Colossus".padEnd(10)
"Colossus".padStart(10) // For strings.

// OBJECT LOOP
var obj = {
    user0 :"Cassy",
    user1 : "John",
    user2 : "Bob"
}

Object.keys(obj).forEach(
    (key, index) => {
        console.log(key, obj[key])
    } 
)//Old Method
 // OR
 Object.entries(obj).forEach(
     (name) => {
         console.log(name)
     }
 ) // Gets the key and property in an array.

 //e.g
 Object.entries(obj).map(
     (name) => {
         return name[1] + name[0].replace("user", "")
        
     }
 )

 //e.g
 Object.entries(obj).map(value => value.join(" ")).join(' ')

 // OR
 Object.values(obj).forEach(
    (name) => {
        console.log(name)
    }
) // Gets the values of the object keys

// ES8



// Debugging
function fun() {
    if (true) {
        console.log("done")
        debugger; // This helps to debug the code
    }else{
        alert("useless")
    }
}



// Asynchronous Call Stack
console.log(1);
setTimeout(
    () => {
        console.log(2);
    }, 200
) // 200 sets the time to wait in milliseconds. which makes other functions to run until the time is set. 2000ms = 2s
console.log(3);



// Modules

//Browserify
module.exports = function add(a,b) {
    return a+b 
} // This exports the contents for other js files to use.

var add = require ("./quiz") // Syntax for obtaining files from anothe js file.


// ES6 + WebPack2 NOTE: This is more useful.
export const add = () => {
     a + b 
} // export can move out a function for another js file to import.

import {add} from "./quiz" // Must begin with ./ to get the file. import can get a function from another js file. 


// Promises: Used for asynchronous programming.
const promise = new Promise ((resolve, reject) =>{ //Promises always accept resolve and reject.
    if (true) {
        resolve("Stuff worked")
    }else{
        reject ("Error, didn't work.")
    }
})

promise.then((output) =>{
    console.log(output)
    return output + " anew"
}).then(outadd =>{
    console.log(outadd)
})  // then is used to add chains to promises.

.catch(()=>{
    console.log("Error")  //catch is used to get any errors within the then chain.
})

//E.g
const promise = new Promise ((resolve, reject) =>{
    if (true) {
        resolve("Stuff worked")
    }else{
        reject ("Error, didn't work.")
    }
})

const promise2 = new Promise((resolve,reject) =>{
    setTimeout(resolve, 100, "Heyy") // This syntax allows to set the time for execution of a command.
    //Note: 1000ms = 1s.
})

const promise3 = new Promise ((resolve,reject) =>{
    setTimeout(resolve, 5000, "Is it me you are looking for")
})

Promise.all([promise, promise2, promise3]).then((input) =>{
    console.log(input)
}) // .all allows to group all promises inside an array.

//E.g
const urls = [
    "https://jsonplaceholde.typicode.com/users",
    "https://jsonplaceholde.typicode.com/posts",
    "https://jsonplaceholde.typicode.com/albums"
]

Promise.all(urls.map((url) =>{
    return fetch(url).then(response =>{
        response.json()
    })
})).then(results =>{
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log("Error Found"))



// ASYNC AWAIT
async function fetchUsers() {
    const response = await fetch("http://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    console.log(data)
}// Async function is just a modified way of writing promises.
fetchUsers();

//E.g
const urls = [
    "https://jsonplaceholde.typicode.com/users",
    "https://jsonplaceholde.typicode.com/posts",
    "https://jsonplaceholde.typicode.com/albums"
]

const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map((url =>{
            fetch(url).then(resp => resp.json())
        })))
        console.log("users", users)
        console.log("users", posts)
        console.log("users", albums) 
    } catch (error) {
        console.log("Error found", error)
    }
   // try is used to run the function with promises, catch is to get errors in the function.
}




// ANDREI NEAGOIE






//JONAS SCHMEDTMAN

/*
 How Javascript Works Behind The Scenes
    *There are various Javascript Engines. V8 for Chrome, Spidermonkey etc.
    . Our code is run
    . It is parsed by the JavaScript Engine(This checks for errors)
    .Then converted to a data structure called the ABSTRACT SYNTAX TREE.
    .Then converted to machine code.(This can be executed by the computer processor)
    .Then finally runs the code.
*/
/*
    The this keyword
    . The this keyword is assigned a value once an object method is called.
    . The this keyword is assigned by default to the window object. 
    . The this keyword in a  regular function points to the window object.  
*/
/*
    Inheritance And Prototype
    . Every Javasrcript Object has a prototype property which makes inheritance possible in Javascript  
    . The prototype property of an object is where we put methods and other properties we want other objects to inherit. 
*/

// Function Constructor
//Regular Object
var john = {
    name: "John",
    age: 25,
    birthYear: 2001
}



// Constructor
var Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job
}

var john = new Person("John", 20, "teacher"); //Note: Constructor name must be capitalized.It creates more objects under it. new function creates a new object.
var mark = new Person("Mark", 25, "plumber")
var jane = new Person ("Jane", 22, "waitress")



// Inheritance
Person.prototype.calcAge = function () {
    console.log(2020 - this.age)
} //This property makes the objects variables inherit this attribute.




// To Create Objects
var personProto = {
    calcAge: function () {
        console.log(2020 - this.birthYear)
    }
} // Creates inheritance prototype

var john = Object.create(personProto); // Creates object
john.name = "John";
john.birthYear = 1999;
john.job = "teacher" //Creates object variables.

//OR
var jane = Object.create(personProto, 
{
    name: {value: "Jane"},
    birthYear:{vaue: 1983},
    job: {value: "designer"}
}
)



// Functions As Arguments
var years = [1989, 1990, 1992, 1995, 2002];
function calc(yr, fn) {
    var newYear = [];
    for (let i = 0; i < yr.length; i++) {
        newYear.push(fn(yr[i]));
    }
    return newYear;
}

function ageCalc(el) {
    return 2020 - el;
}

var ages = calc(years, ageCalc);
console.log(ages);

// Functions Returning Functions
function interview(job) {
    if (job === "teacher") {
        return function(name){
            console.log(`What subject do you teach ${name}`)
        }
    }
    else if (job === "designer") {
        return function (name) {
            console.log(`Please, ${name} tell me a bit about UI design`)
        }
    } else {
        return function(name){
            console.log("Please what do you do?")
        }
    }
}

var teacher = interview("teacher");
teacher("John");
var designer = interview("designer");
designer("Cole");

interview("teacher")("Chris");



// Math functions
Math.random() * 10  //Picks and delivers a random number.
Math.round(10.2) //Rounds up the number chosen
Math.floor() // Returns a whole number

// Immediately Invoked Function Expressions  Note: Used for data privacy.
(
    function game(luck) {
        var score = Math.random()*10;
        console.log(score>= 5 - luck)
    }
)(5)




// Closures --- Ability of a function to use a variable or parameter outside its scope.
function retirement(retirementAge) {
    var a  = " years left until retirement"
    return function (birthYear) {
        var age = 2020 - birthYear
        console.log((retirementAge - age)+ a);
        
    }
}

var retirementUS = retirement(66)(1964);
retirementUS;



// Call Function for OBJECTS.
var john = {
    name: "John",
    age: 35,
    job: "teacher",
    presentation : function (style, timeOfDay) {
        if(style === "formal"){
            console.log(`Good ${timeOfDay} Ladies and Gentlemen. I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old`);
            
        }else if( style === "friendly"){
            console.log(`Hey! What's Up? I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. `)
        }
    }
};

var emily = {
    name: "Emily",
    age: 26,
    job: "designer"
}

john.presentation("formal", "morning");
john.presentation.call(emily, "friendly", "afternoon"); // This call function allows the object emily to get the attribute presentation. i.e borrowing a method. i.e setting the this variable to emily.



// Bind Function for OBJECTS
var paul = {
    name: "Paul",
    age: 20,
    job: "engineer"
}
var paulFunc = john.presentation.bind(paul, "formal");
paulFunc("night") // The bind function stores a copy of a function inside a variable and works like the call function. 

// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);





//JONAS SCHMEDTMAN