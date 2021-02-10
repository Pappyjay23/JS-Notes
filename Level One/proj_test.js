// CONDITIONS

var first = prompt("What is your First Name?")
var last = prompt("What is your Last Name?")
var age = prompt("How old are you?")
var height = prompt("State your height in centimeters(cm)")
var pet = prompt("What is the name of your pet?")
alert("Thank you for your response.")

// BOOLEANS
var firstCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

// First and Last
if (first[0] === last[0] ) {
    firstCond = true
} else{
    firstCond = false
}

// Age
if (age > 20 && age < 30 ) {
    ageCond = true
} else{
    ageCond = false
}

// Height
if (height >= 170 ) {
    heightCond = true
} else{
    heightCond = false
}

// Pet name
if (pet[ pet.length - 1] = "y" ) {
    petCond = true
} else{
    petCond = false
}


if (firstCond && ageCond && heightCond && petCond ) {
    console.log("Welcome Spy!!");
    
}else{
    console.log("Welcome user.");
    
}
