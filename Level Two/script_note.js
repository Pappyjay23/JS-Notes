
// function area(pi, r) {
//     console.log("The area of the circle is "+ 2*pi*r + "centimeter square.");
    
// }
// // RETURN VALUES : Used to store values for anoter function ----

// function greet(name = "PJ", title = "Master") {
//     return title + " " + name 
// }

// FUNCTION TEST ---
// var age = prompt("What is your age?");

// if (Number(age) < 18) {
// 	alert("Sorry, you are too young to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }


// //  FUNCTION DECLARATION ---
// function checkDriverAge(age) {
//     var age = prompt("What is your age?")
    // if (Number(age) < 18) {
    //     alert("Sorry, you are too young to drive this car. Powering off");
    // } else if (Number(age) > 18) {
    //     alert("Powering On. Enjoy the ride!");
    // } else if (Number(age) === 18) {
    //     alert("Congratulations on your first year of driving. Enjoy the ride!");
    // }
// }

// // FUNCTION EXPRESSION ---
// var check = function (age) {
//     var age = prompt("State your age?")
//     if (Number(age) < 18) {
//         alert("Sorry, you are too young to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }

// BONUS ---
// function checkAge(age) { 
//     if (Number(age) < 18) {
//         alert("Sorry, you are too young to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }

// }    

// ARRAYS ---
// var list = ["Ball", "Boots", "Socks", "Jersey"]; //["Hand", "Shoulders"]

// console.log(list[0]);
// list.shift(); //{This removes the first item of the list}
// list.pop(); //{This removes the last item of the list}
// list.push("Coal") // This adds an item to the list
// list.concat(["Band", "Head gear"]) // This also adds items to the list, to create a new list. 
// list.sort() // This sorts the list
//list.splice(0,1, "Brush") // Note 0 is the start no to delete, 1 is the amount to delete. The new variable added will be after the number stated.

// TEST ---
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// array.shift();
// array.sort();
// array.push("Kiwi");
// array.shift();
// array.sort();
// array.reverse();

// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// array2[1][1][0];

// Another way of accessing arrays in a a function is:
// var myArray = [1,2,3,4,5]
// var new = myArray.map(function (no) {
//     no = no + 100;
//     return no;

// })

// // OBJECTS ---
// var obj = {
//     name: "John",
//     age : 30,
//     hobby : "Gaming",
//     isMarried : true,
// }
// //To acces them or add to them,
// obj.name
// obj.class = "working";

// OBJECTS CAN ALSO BE CALLED BY ---
// obj["name"]
// obj["class"] = "working"

// You can have a list in an object and vice versa. Functions can also be added
// var wizard = {
//     name: "Zordon",
//     age: 50,
//     spells:["shazam", "abracadabra", "stupify"],
//     action: function action() {
//         console.log("Swoosh!!!");
        
//     }
// }

// var database = [
//     {
//         username: "Paul",
//         password: "paulo"
//     },
//     {
//         username: "John",
//         password: "johnny"
//     },
//     {
//         username: "Gabrielle",
//         password: "gabby"
//     }
// ]

// TO USE KEY VALUES IN METHOD; ---
// var me = {
//     key: "Paul",
//     greet : function hey() {
//         alert("Hello" + this.key);
//     }

// }
// // OR
// var me = {
//     key: "Paul",
//     greet : function hey() {
//         alert("Hello" + me.key);
//     }

// }

// NOTE: The this keyword calls methods or keys in an object.

// var object = {
//     name: "Peace Jinadu Paul",
//     splitting: function(){
//         alert(`${this.name.split(" ")[1]}`) 
//         // split here breaks a string into an array depending on the parameter for breakage. here is a space.
//     }
// }

