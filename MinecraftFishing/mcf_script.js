//Variables
let steveImg = document.getElementById("steve");
let alexImg = document.getElementById("alex");
let villagerImg = document.getElementById("villager");

let fishbtn = document.getElementById("fishbtn");
let plus5btn = document.getElementById("plus5");
let cod200btn = document.getElementById("cod200");
let plus50btn = document.getElementById("plus50");
let salmon500btn = document.getElementById("salmon500");
let showResult = document.getElementById("fishResult");

let codNum = document.getElementById("codNum");
let salNum = document.getElementById("salmonNum");
let tropNum = document.getElementById("tropNum");
let puffNum = document.getElementById("puffNum");

let chosenChar = 0;


steveImg.addEventListener("click", function(){
    steveImg.classList.toggle("charImgSelected", true);
    alexImg.classList.toggle("charImgSelected", false);
    villagerImg.classList.toggle("charImgSelected", false);
    chosenChar = 0;
});

alexImg.addEventListener("click", function(){
    alexImg.classList.toggle("charImgSelected", true);
    steveImg.classList.toggle("charImgSelected", false);
    villagerImg.classList.toggle("charImgSelected", false);
    chosenChar = 1;
});

villagerImg.addEventListener("click", function(){
    villagerImg.classList.toggle("charImgSelected", true);
    steveImg.classList.toggle("charImgSelected", false);
    alexImg.classList.toggle("charImgSelected", false);
    chosenChar = 2;
});

fishbtn.addEventListener("click", fish);
plus5btn.addEventListener("click", function(){
    for(let i = 0; i < 5; i++){
        fish();
    }
});
cod200btn.addEventListener("click", function(){
    let currCodNum = +codNum.innerHTML;
    while(+codNum.innerHTML - currCodNum <200){
        fish();
    }
});
plus50btn.addEventListener("click", function(){
    for(let i = 0; i < 50; i++){
        fish();
    }
});
salmon500btn.addEventListener("click", function(){
    let currSalmonNum = +salNum.innerHTML;
    while(+salNum.innerHTML - currSalmonNum <500){
        fish();
    }
});

function fish(){
    document.getElementById("totalFishCaught").innerHTML = +document.getElementById("totalFishCaught").innerHTML + 1;
    let ranFish = Math.random();
    
    switch(chosenChar){//! need to add a starting character, or display error when no character is chosen
        case 0://steve
            if(ranFish < 0.7){
                codNum.innerHTML = +codNum.innerHTML + 1;
                showResult.src = "img/Raw-Cod.png";
            } else if(ranFish >= 0.7 && ranFish < 0.9){
                salNum.innerHTML = +salNum.innerHTML + 1;
                showResult.src = "img/Raw-Salmon.png";
            } else if(ranFish >= 0.9 && ranFish < 0.95){
                tropNum.innerHTML = +tropNum.innerHTML + 1;
                showResult.src = "img/Tropical-Fish.png";
            } else {
                puffNum.innerHTML = +puffNum.innerHTML + 1;
                showResult.src = "img/Pufferfish.png";
            }
            break;
        case 1://alex
            if(ranFish < 0.1){
                codNum.innerHTML = +codNum.innerHTML + 1;
                showResult.src = "img/Raw-Cod.png";
            } else if(ranFish >= 0.1 && ranFish < 0.2){
                salNum.innerHTML = +salNum.innerHTML + 1;
                showResult.src = "img/Raw-Salmon.png";
            } else if(ranFish >= 0.2 && ranFish < 0.5){
                tropNum.innerHTML = +tropNum.innerHTML + 1;
                showResult.src = "img/Tropical-Fish.png";
            } else {
                puffNum.innerHTML = +puffNum.innerHTML + 1;
                showResult.src = "img/Pufferfish.png";
            }
            break;
        case 2://villager
            if(ranFish < 0.2){
                codNum.innerHTML = +codNum.innerHTML + 1;
                showResult.src = "img/Raw-Cod.png";
            } else if(ranFish >= 0.2 && ranFish < 0.35){
                salNum.innerHTML = +salNum.innerHTML + 1;
                showResult.src = "img/Raw-Salmon.png";
            } else if(ranFish >= 0.35 && ranFish < 0.45){
                tropNum.innerHTML = +tropNum.innerHTML + 1;
                showResult.src = "img/Tropical-Fish.png";
            } else if(ranFish >= 0.45 && ranFish < 0.5) {
                puffNum.innerHTML = +puffNum.innerHTML + 1;
                showResult.src = "img/Pufferfish.png";
            } else{
                document.getElementById("totalFishCaught").innerHTML = +document.getElementById("totalFishCaught").innerHTML - 1;
                showResult.src = "img/sad-villager.jpg";
            }
            break;
        default:
            alert("No one selected");
    }
}