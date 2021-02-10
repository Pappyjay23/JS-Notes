document.addEventListener("DOMContentLoaded", ()=>{
   /* // Function to reverse a number . e.g 32243 to 334223
    var number = prompt("Please provide a number you want to reverse.")
     let numSplit = number.split("").reverse().join("");
     console.log(numSplit)
    */

    /*  // Function to check if string is palindrome
     var word = prompt("Provide a word to check ")
     var revWord = word.split("").reverse().join("")
     console.log(word)
     console.log(revWord)
     if (word === revWord) {
         alert("This word is palindrome")
     }else {
         alert("This is a regular word")
     }
     */

     /* // Function to Capitalize the first letter of each word. 
     var word = prompt("Provide word")
     var alphWord = word.split(" ")
     var newArray = [ ]
     for (let i = 0; i < alphWord.length; i++) {
         newArray.push(alphWord[i].charAt(0).toUpperCase() + alphWord[i].slice(1))
     }
     var final = newArray.join(" ")
     console.log(final)
     */

     /*
     // Function to find the longest word in a string.
     var word = prompt("Provide a word")
     var wordArr = word.split(" ")

     var longest = ""
     for (let i = 0; i < wordArr.length; i++) {
         if (wordArr[i].length > longest.length) {
             longest = wordArr[i]
         }
         
     }

     console.log(wordArr)
     console.log(longest)

     */

     /*
     // Function to count the number of vowels in a string. 
     function countVowels() {
         var word = prompt("Please provide any word in space provided below.")
         var vowels = /[aeiou]/gi
         var match = word.match(vowels)
        //  console.log(match)
         var count = match.length
         console.log("The amount of vowels in " + word + " is " + count )
     }

     countVowels();

      */
     /*
     //  Function to check for prime number
     var number = prompt("Please provide a number below.")
     function primeNo (no){
        if (no === 1 ) {
            alert("This is not a prime number") 
        }else if (no > 1){
            for (let i = 2; i < no; i++) {
                if (no % i === 0) {
                    return false
                }
                
            }
            return true
        }
     }
     console.log(primeNo(number) );

      */

      /*
      // Function to check type of argument
      function checkType(arg){
        var type = typeof(arg)
        console.log(`The type of argument is  ${type}`)
      }
      checkType()
       */

       /*
       function checkSecond(){
            var array1 = [ 21,62,43,84,135]
            var sorted = array1.sort(function(a,b) {return a - b}) // Ascending toll gate. 
            console.log(sorted)
            var lowestSecond = sorted[1]
            var highestSecond = sorted[sorted.length - 2]
            console.log("Array is " + array1);
            console.log('The second lowest in the array is ' + lowestSecond)
            console.log('The second highest in the array is ' + highestSecond)
       }
       checkSecond()
       */
        /* 
       // Check perfect number
       function perfectNo(){
           var number = Number(prompt("Provide a number below to find out if it is perfect."))
           var factors = []
           var sum = 0
           for (let i = 1; i < number; i++) {
               if (number % i === 0) {
                   factors.push(i)
                   console.log(factors)
                   sum+= i
                   console.log(sum)  
               }  
           }
           console.log("The second condition is " + ((sum + number) /2))
           if (sum === number && (sum + number) /2 === number){
               console.log("This is a perfect number")
           }else {
               console.log("This is not a perfect number")
           }
       }
       perfectNo();

       */

       /*
       // Check perfect numbers from 1 - 50
       function checkPerfect(){
           var number;
           var perfectArray = []
            for (let n = 1; n < 51; n++) {
                number = n
                var factors = []
                var sum = 0
                for (let i = 1; i < number; i++) {
                    if (number % i === 0) {
                        factors.push(i)
                        sum+= i
                    }
                }
                if (sum === n) {
                    perfectArray.push(n)
                    console.log("The perfect numbers from 1-50 are " + perfectArray)
                }

            }
       }
       checkPerfect();
        */

        

})