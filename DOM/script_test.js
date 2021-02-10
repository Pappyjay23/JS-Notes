// Restart Button
 var restart = document.querySelector("#b")

 //Table Cells
 var cells = document.querySelectorAll("td")
// Clear board function
function clearBoard() {
    for (var i = 0; i < cells.length; i++) {
         cells[i].textContent = " ";
        
    }
}

restart.addEventListener("click", clearBoard)
// Assign game
function change() {
    if (this.textContent === " ") {
        this.textContent = "X"
    }else if (this.textContent === "X") {
        this.textContent = "O"
    }else{
        this.textContent == " "
    }
}

for (var i = 0; i < cells.length; i++) {
     cells [i].addEventListener("click", change);
    
}