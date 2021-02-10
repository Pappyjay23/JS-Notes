// ---DOCUMENT ATTRIBUTES---
// document.URL
// document.body
// document.head
// document.links

// ---METHODS TO GRAB HTML ELEMENTS---
// document.getElementById()
// document.getElementsByClassName()[0] // Gets the index of the class.
// document.getElementsByTagName()
// document.querySelector() // This gets the first attribute of whatever asked
// document.querySelectorAll() // This gets all the values asked.

// ---TO CHANGE AN HTML PROPERTY---
// var change = document.querySelector("h1")
// change.style.color = "red"


// ---CODE TO GET RANDOM COLORS---
// function getRandom() {
//     var letters = "01234556789ABCDEF";
//     var color = "#"
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random()*16)];
        
//     }
//     return color
// }

// function changeColor() {
//     colorInput = getRandom()
//     var head = document.querySelector("h1")
//     head.style.color = colorInput
// }
// setInterval("changeColor()", 500)

// ---HTML INTERACTION---
// Example
// var p = document.querySelector("p")
// p.textContent = "This is the new content of the first paragraph" // This changes the text content of the html
// p.innerHTML = "<em>This new paragraph is now in italics</em>" // This changes the html attribute.

// var special = document.querySelector("#special")
// var specialA = document.querySelector("a")
// specialA.getAttribute("href") // This gets the value of an attribute.
// specialA.setAttribute("href", "www.facebook.com") // This changes the value of an html attribute.


// CHANGING STYLES
// document.querySelector("h1").style.background = "yellow" 

//Much preferrably used is:
// var h1 = document.querySelector("h1");
// h1.className = "first" //This adds a new class to the element selected.

//Also we use:
// var list = document.querySelector("li");
// list.classList.add("second");//This is the best to add classes.
// list.classList.remove("second");
// list.classList.toggle; // This will undo whatever action has been done to the classList.

//Also have:
// document.querySelectorAll("li")[1].parentElement.children

// EVENTS
// var hOne = document.querySelector("#one")
// var hTwo = document.querySelector("#two")
// var hThree = document.querySelector("#three")

// hOne.addEventListener("mouseover", function () {
//     hOne.textContent = "HOVERED ON";
//     hOne.style.color = "red"
// })

// hOne.addEventListener("mouseout", function () {
//     hOne.textContent = "HOVER!";
//     hOne.style.color = "black"
// })

// hTwo.addEventListener("click", function () {
//     hTwo.textContent = "CLICKED ON!";
//     hTwo.style.color = " blue"
// })

// hThree.addEventListener("dblclick", function () {
//     hThree.textContent = "DOUBLE CLICKED ON!";
//     hThree.style.color = "green"
// } )

// hThree.addEventListener("keypress", function () {
//     if (keyCode === 13) {
//         //     hThree.textContent = "keyboard pressed!";
// //     hThree.style.color = "green"
//     }

// // } )


// To create element
// var li = document.createElement("li");
//To create text in the element
// li.appendChild(document.createTextNode(input.value)) //.value gets the input of an element. e.g input tag 
// input.value = ""
//To add to an element
// ul.appendChild(li);