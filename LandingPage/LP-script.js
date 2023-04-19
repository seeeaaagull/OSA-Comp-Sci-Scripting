// Landing Page Scripting

//Prompt user for Data when page loads
let inname = prompt("What is your name?");
let focus = prompt("What is your main focus?");
let actionTime = prompt("When are you going to do that?");
let chosenQuote = prompt("What quote works for you at that time?");
let chosenSpeaker = prompt("Who said that?");

//output the data in to the page
document.getElementById("scriptName").innerHTML = inname;
document.getElementById("abovefocus").innerHTML = focus;
document.getElementById("actionTime").innerHTML = actionTime;
document.getElementById("textQuote").innerHTML = chosenQuote;
document.getElementById("quoteSpeaker").innerHTML = chosenSpeaker;



