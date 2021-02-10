// var bread = 110;
// var soda = 120;

// var report = "blank";

// if (bread === 100 && soda === 100){
//     report= "Soda and bread were sold at normal price"
// } else if (bread > 100 && soda > 100) {
//     report= "Soda and bread have been inflated"
// }
// else{
//     report="Soda and bread were sold at discounted price"
// }

// console.log(report);

// MARKET REPORT

var bread = prompt("State the current price of bread in naira(#).")
var soda = prompt("State the current price of soda in naira(#).")

normCond = null
infCond  = null
discCond = null

if (bread == 100 && soda == 100) {
    normCond = true
} else{
    normCond = false
}

if (bread < 100 && soda < 100) {
    discCond = true
} else{
    discCond = false
}

if (bread > 100 && soda > 100) {
    infCond = true
} else{
    infCond = false
}

    if (normCond) {
        alert("Food prices are stable and normal.")
        console.log("Food sold at normal price.");
        
    }else if (discCond) {
        alert("Food prices are discounted.")
        console.log("Food sold at discounted price.");
        
    } else {
        alert("Food prices are inflated.")        
        console.log("Food sold at inflated prices.");
        
    }
