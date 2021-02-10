// Restart Button
var restart = document.querySelector("button")
// Table cells
var cell = document.querySelectorAll("td")

//Clear function
function clear() {
    for (var i = 0; i < cell.length; i++) {
        cell[i].textContent = " ";
        
    }
}

restart.addEventListener("click", clear)
// Logic
function logic() {
    if (this.textContent === "") {
        this.textContent = "X"
    }else if (this.textContent === "X") {
        this.textContent = "O"
    }else {
        this.textContent = ""
    }
}

// Iteration
for (var i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", logic)
    
}

