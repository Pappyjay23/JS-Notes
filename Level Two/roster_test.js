// Create array
var list = []

// Function to add
function addTo() {
    var add = prompt("What name would you like to add?")
    list.push(add);
}

// Function to remove
function removeTo() {
    var remove = prompt("What name would you like to remove?")
    var index = list.indexOf(remove)
    list.splice(index, 1)
}

// Function to Display
function display() {
    alert("Check the console please!!")
    console.log(list)
}

var begin = prompt("Would you like to start the roster web app? Y/N")
var request = "empty"

if (begin === "Y") {
    while (request !== "quit") {
        request = prompt("Please select an action: add, remove, display or quit. ")
        if (request === "add") {
            addTo();
        }else if (request === "remove") {
            removeTo();
        }else if (request === "display") {
            display()
        }
    }
}

alert("Thank you for using this web app. Refresh the page to use again.")
console.clear()