const square = document.querySelectorAll(".square")
const mole = document.querySelectorAll(".mole")
const timeLeft = document.querySelector("#time-left")
let score = document.querySelector("#score")

let result = 0
let currentTime = timeLeft.textContent

// To place the mole randomly
function randomSquare(){
    square.forEach(className => {
        className.classList.remove("mole")
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add("mole")

    // Assign the id of the randomPosition to hitPosition 
    hitPosition = randomPosition.id 

}

// To update score
square.forEach(el => {
    el.addEventListener("mouseup", () => {
        if (el.id === hitPosition) {
            result = result + 1
            score.textContent = result
        }
    })
})

// To move the mole
function moveMole () {
    let timerId = null
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

// To countdown the timer
function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0){
        clearInterval(timer)
        alert("GAME OVER! Your final score is " + result)
    }
}

let timer = setInterval(countDown, 1000);

