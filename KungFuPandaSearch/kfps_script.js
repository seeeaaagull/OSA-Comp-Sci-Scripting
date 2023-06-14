//KF Panda Character Search

//Variables for HTML Elements
let charimgEl = document.getElementById("show-char");
let nameEl = document.getElementById("name-char");
let quoteEl = document.getElementById("quote");

//event listener
document.getElementById("search").addEventListener("click", function(){
    //Input
    let name = document.getElementById("search-in").value.toLowerCase();

    //output
    if(name === "tigress"){
        charimgEl.src = "images/tigress.png";
        nameEl.innerHTML = "Tigress";
        quoteEl.innerHTML = "That was pretty hardcore!";
    }else if(name === "po" || name === "dragon warrior" || name === "the dragon warrior"){
        charimgEl.src = "images/po.png";
        nameEl.innerHTML = "Po";
        quoteEl.innerHTML = "Buddy, I am the Dragon Warrior.";
    }else if(name === "viper" || name === "master viper"){
        charimgEl.src = "images/viper.png";
        nameEl.innerHTML = "Viper";
        quoteEl.innerHTML = "I don't need to bite to fight!";
    }else if(name === "mantis"){
        charimgEl.src = "images/mantis.png";
        nameEl.innerHTML = "Mantis";
        quoteEl.innerHTML = "Fear the bug!";
    } else if(name === "crane"){
        charimgEl.src = "images/crane.png";
        nameEl.innerHTML = "Crane";
        quoteEl.innerHTML = "You can chain my body, but you will never chain my warrior spirit!";
    } else if(name === "monkey"){
        charimgEl.src = "images/monkey.png";
        nameEl.innerHTML = "Monkey";
        quoteEl.innerHTML = "We should hang out!";
    } else {
        charimgEl.src = "images/question-mark.png";
        nameEl.innerHTML = "--------";
        quoteEl.innerHTML = "Character not found.";
    }
});

