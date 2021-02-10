// document.addEventListener("DOMContentLoaded", () => {

//     // Card options
//     const cardArray = [
//         {
//             name: "beef",
//             img: "images/beef.png"
//         },
//         {
//             name: "beef",
//             img: "images/beef.png"
//         },
//         {
//             name: "omlet",
//             img: "images/omlet.png"
//         },
//         {
//             name: "omlet",
//             img: "images/omlet.png"
//         },
//         {
//             name: "pizza",
//             img: "images/pizza.png"
//         },
//         {
//             name: "pizza",
//             img: "images/pizza.png"
//         },
//         {
//             name: "shawarma",
//             img: "images/shawarma.png"
//         },
//         {
//             name: "shawarma",
//             img: "images/shawarma.png"
//         },
//         {
//             name: "soup",
//             img: "images/soup.png"
//         },
//         {
//             name: "soup",
//             img: "images/soup.png"
//         },
//         {
//             name: "veggies",
//             img: "images/veggies.png"
//         },
//         {
//             name: "veggies",
//             img: "images/veggies.png"
//         }
//     ]

//     cardArray.sort(() => 0.5 - Math.random())

    
//     const grid = document.querySelector(".grid")
//     const resultDisplay = document.querySelector("#result")
//     var cardsChosen = []
//     var cardsChosenId = []
//     var cardsWon = []

//     // 1.  Create Game Board
 
//     function createBoard() {
//         for (let i = 0; i < cardArray.length; i++) {
//             var card = document.createElement("img")
//             card.setAttribute("src", "images/blank.png")
//             card.setAttribute("data-id", i)
//             card.addEventListener("click", flipcard)
//             grid.appendChild(card)
            
//         }
//     }
    
    
    
//     // 2. Flip your Card
//     function flipcard () {
//         var cardId = this.getAttribute("data-id")
//         cardsChosen.push(cardArray[cardId].name)
//         cardsChosenId.push(cardId)
//         this.setAttribute("src", cardArray[cardId].img) 
//         if (cardsChosen.length === 2) {
//             setTimeout(checkForMatch, 500)
//         }
//     }


//     // 3.  Check For Match
//     function checkForMatch () {
//         var cards = document.querySelectorAll("img")
//         const optionOneId = cardsChosenId[0]
//         const optionTwoId = cardsChosenId[1]
//         if (cardsChosen[0] === cardsChosen[1]) {
//             alert("You found a match")
//             cards[optionOneId].setAttribute("src", "images/white.png")
//             cards[optionTwoId].setAttribute("src", "images/white.png")
//             cardsWon.push(cardsChosen)
//         } else {
//             cards[optionOneId].setAttribute("src", "images/blank.png")
//             cards[optionTwoId].setAttribute("src", "images/blank.png")
//             alert("Sorry, try again")
//         }
//         cardsChosen = []
//         cardsChosenId = []
//         resultDisplay.textContent = cardsWon.length
//         if (cardsWon.length === cardArray.length / 2) {
//             resultDisplay.textContent = "Congratulations! You have found them all!"
//         }
//     }




//     createBoard();



// })


// My Try out
document.addEventListener("DOMContentLoaded", () => {
    const cardList = [
        {
            name: "beef",
            image: "images/beef.png"
        },
        {
            name: "beef",
            image: "images/beef.png"
        },
        {
            name: "omlet",
            image: "images/omlet.png"
        },
        {
            name: "omlet",
            image: "images/omlet.png"
        },
        {
            name: "pizza",
            image: "images/pizza.png"
        },
        {
            name: "pizza",
            image: "images/pizza.png"
        },
        {
            name: "shawarma",
            image: "images/shawarma.png"
        },
        {
            name: "shawarma",
            image: "images/shawarma.png"
        },
        {
            name: "soup",
            image: "images/soup.png"
        },
        {
            name: "soup",
            image: "images/soup.png"
        },
        {
            name: "veggies",
            image: "images/veggies.png"
        },
        {
            name: "veggies",
            image: "images/veggies.png"
        }
    ]

    cardList.sort(() => 0.5 - Math.random())

    var result = document.querySelector("#result")
    var board = document.querySelector(".grid")
    var cardChosen = []
    var cardChosenId = []
    var cardsWon = []
    


    //1. Create Board
   function createBoard() {
    for (let i = 0; i < cardList.length; i++) {
        var card = document.createElement("img")
        card.setAttribute("src", "images/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipcard)
        board.appendChild(card)
        
    }

    //2. Flip cards
    function flipcard() {
        var id = this.getAttribute("data-id")
        this.setAttribute("src", cardList[id].image)
        cardChosen.push(cardList[id].name)
        cardChosenId.push(id)
        if (cardChosen.length === 2) {
            setTimeout(checkMatch, 300)
        }
    }

    //3. Check for Match
    function checkMatch() {
        var cards = document.querySelectorAll("img")
        var firstpick = cardChosenId[0]
        var secondpick = cardChosenId[1]
        if (cardChosen[0] === cardChosen[1]) {
            alert("You found a match")
            cards[firstpick].setAttribute("src", "images/white.png")
            cards[secondpick].setAttribute("src", "images/white.png")
            cardsWon.push(cardChosen)
            
        } else {
            cards[firstpick].setAttribute("src", "images/blank.png")
            cards[secondpick].setAttribute("src", "images/blank.png")
            alert("Sorry, try again.")
        }
        cardChosen =[]
        cardChosenId = []
        result.textContent = cardsWon.length

        if (cardsWon.length === cardList.length / 2) {
            result.textContent = "Congratulations you have found them all. "
        }
    }

   }

   createBoard();

})