// Create list
var todoList = []

// Function to add
function addTo() {
    var add = prompt("What would you like to add to your todo list?")
    todoList.push(add)
    alert("Added successfully!!")
}

// Function to remove
function remove() {
    var remove = prompt("What would you like to remove from your todo list?");
    var index = todoList.indexOf(remove) ;
    todoList.splice(index, 1)

}

// Function to display
function displayTo() {
    alert("Please check the console!")
    console.log(todoList);
    
}

// Function to start the program
var start = prompt("Would you like to run the todo list web application? Y/N. Please type in your answer below")
var answer = "none"

if (start === "Y") {
    while (answer !== "QUIT") {
        var answer = prompt("What action would you like to run on the list: ADD, REMOVE, DISPLAY, QUIT")
        if (answer === "ADD") {
            addTo();
        }else if (answer === "REMOVE") {
            remove();
        }else if (answer === "DISPLAY") {
            displayTo();
        }
    }
}
alert("Thank you for running the todo list web application. Refresh to use again.")
console.clear()

