var one = document.querySelector(".one")
var two = document.querySelector(".two")
var h3 = document.querySelector("h3")
var bgd = document.querySelector("body")


one.addEventListener("input", function () {
    bgd.style.background = "linear-gradient(to right, " + one.value +", " + two.value +  ")"
    h3.textContent = bgd.style.background + ";";
    console.log(one.value);
})
two.addEventListener("input", function () {
    bgd.style.background = "linear-gradient(to right, " + one.value +", " + two.value +  ")"
    h3.textContent = bgd.style.background + ";";
})

