var data = [
    {
        username: "Peace",
        password: "123"
    }, 
    {
        username: "Love",
        password: "456"
    },
    {
        username: "Faith",
        password: "789"
    }
]

var posts = [
    {
        username: "Barry",
        timeline: "Flash Season 6 is on hold"
    },
    {
        username: "Wally",
        timeline: "Why is that??"
    },
    {
        username: "Barry",
        timeline: "Due to the corona virus outbreak."
    },
    {
        username: "Wally",
        timeline: "Alright."
    }
]

function infoCheck(user, pass) {
    for (var i = 0; i < data.length; i++) {
        if (user === data[i].username && pass === data[i].password ) {
            return true;
        }
        
    }
    return false;
}

function signIn(user, pass) {
    if (infoCheck(user,pass)) {
        alert("Welcome!!. Please check the console for updates.")
        console.log(posts)
    }else{
        alert("Wrong username or password!!")
    }
}

var usernameAsk = prompt("What is your username?");
var passwordAsk = prompt("What is your password?");

signIn(usernameAsk, passwordAsk);