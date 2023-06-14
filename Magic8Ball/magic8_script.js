const responses = ["Without a Doubt.", "As I see it, yes.", "Concentrate and ask again.", "Don't count on it.", "Outlook not so good."];



//setup before functions
let typingTimer;                //timer identifier
let doneTypingInterval = 2500;  //time in ms (5 seconds)
let myInput = document.getElementById('questionBox');

//on keyup, start the countdown
myInput.addEventListener('keyup', () => {
    document.getElementById("answer").innerHTML = "";
    clearTimeout(typingTimer);
    if (myInput.value) {
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
    document.getElementById("stateFeedback").src = "https://cdn.dribbble.com/users/616823/screenshots/9121296/media/5ea60f85ba66a02365626e3b3f752fee.gif";
});

//user is "finished typing," do something
function doneTyping () {
    if (document.getElementById("questionBox").value.toLowerCase() === "does a magic 8 ball actually work?" || document.getElementById("questionBox").value.toLowerCase() === "does a magic 8 ball actually work") {
        document.getElementById("answer").innerHTML = "How dare you doubt me!";
        document.getElementById("stateFeedback").src = "";
    } else if (document.getElementById("questionBox").value.toLowerCase() === "penis"){
        document.getElementById("answer").innerHTML = "8===D";
        document.getElementById("stateFeedback").src = "";
    } else {
        let ans = Math.floor(Math.random() * 5);
        document.getElementById("stateFeedback").src = "";
        document.getElementById("answer").innerHTML = responses[ans];
    }
}