var type = document.querySelector("#input")
var buttonAdd = document.querySelector(".add")
var buttonSub = document.querySelector(".sub")
var ul = document.querySelector("ul")

function AddList() {
    if (type.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(type.value));
        ul.appendChild(li);
        type.value = "";
    }
}
function RemoveList() {
    
}

buttonAdd.addEventListener("click", AddList)
buttonSub.addEventListener("click", RemoveList)
type.addEventListener("keypress", function key(enter) {
    if (type.value.length > 0 && enter.keyCode === 13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(type.value));
        ul.appendChild(li);
        type.value = "";
    }
} )