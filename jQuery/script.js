/* jQuery Learning */
// Selecting one object 
/*
var h1 = $("h1")
h1.css("color", "green")

 */


//Selecting multiple objects
/*
var h1Props = {
    color:"red",
    backgroundColor :"blue",
    border:"2px solid yellow"
}

h1.css(h1Props);
*/

// Selecting a particular item in a list
/*

var list = $("li");
list.css("color", "red");
list.eq(0).css("color", "blue") // .eq(0) is used to select a particular index. 

list.eq(-1).css("color", "orange") //Targets last item.

*/

//Select text

/*

h1.text("NEW TEXT GOES HERE...")

*/

//Select HTML 
/* 
h1.html("<strong>NEW TEXT IS BOLDENED...</strong>")
*/

//Change Attributes
/*

var input = $("input")
var inputNew = {
    type:"email",
    placeholder:"Type your email here..."
}
input.eq(1).attr(inputNew)
input.eq(1).val("New value typed...") //This changes the value of an attribute.

*/

//To add a class

/*
h1.addClass("turn-red");

list.eq(1).addClass("turn-blue")

*/

// To remove a class
/*
list.eq(1).removeClass("turn-blue")
*/

//To toggle a class on or off
/*

$("p").toggleClass("turn-blue");
$("p").toggleClass("turn-blue");

*/

//Events
/*

h1.click(function () {
    $(this). text("I was Changed") //this refers to whatever element you have selected.
})

*/

// Key Press
/*

$("input").eq(0).keypress(function (event) {
    if (event.keyCode == 13) {
        $("h1").toggleClass("turn-red")
    }
})

*/

// On Method

/*

$("h1").on("dblclick",function () {
    $(this).toggleClass("turn-blue");
}) // This acts like an event listener.

*/

//Events
$("input").eq(1).on("click", function(){
    $("body").fadeOut(3000)

})

//For more effects api.jquery.com/category/effects





