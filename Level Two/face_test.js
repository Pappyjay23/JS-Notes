var database = [
    {
        username: "John",
        password: "password"
    }
]

var post = [
    {
        username: "Bob",
        timeline: "Web Dev is so fun!!"
    },
    {
        username: "Kate",
        timeline: "I am enjoying this tutorial."
    }
]

var usernameAsk = prompt("What's your username?");
var passwordAsk = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        alert("Welcome" + " " + database[0].username + " ." + " Please check the console.")
        console.log(post);
        
    } else{
        alert("Wrong username or password.")
    }
}

signIn(usernameAsk, passwordAsk);