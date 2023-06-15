//Variables
let steveImg = document.getElementById("steve");
let alexImg = document.getElementById("alex");
let villagerImg = document.getElementById("villager");

let fishbtn = document.getElementById("fishbtn");
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
    document.getElementById("stats").innerHTML = "Steve";
    document.getElementById("statsNum").innerHTML = "Cod: 70% &emsp; Salmon: 20% &emsp; Tropical Fish: 5% &emsp; Pufferfish: 5%";
    chosenChar = 0;
});

alexImg.addEventListener("click", function(){
    alexImg.classList.toggle("charImgSelected", true);
    steveImg.classList.toggle("charImgSelected", false);
    villagerImg.classList.toggle("charImgSelected", false);
    document.getElementById("stats").innerHTML = "Alex";
    document.getElementById("statsNum").innerHTML = "Cod: 10% &emsp; Salmon: 10% &emsp; Tropical Fish: 30% &emsp; Pufferfish: 50%";
    chosenChar = 1;
});

villagerImg.addEventListener("click", function(){
    villagerImg.classList.toggle("charImgSelected", true);
    steveImg.classList.toggle("charImgSelected", false);
    alexImg.classList.toggle("charImgSelected", false);
    document.getElementById("stats").innerHTML = "Villegar";
    document.getElementById("statsNum").innerHTML = "Cod: 20% &emsp; Salmon: 15% &emsp; Tropical Fish: 10% &emsp; Pufferfish: 5% &emsp; Nothing: 50%";
    chosenChar = 2;
});

fishbtn.addEventListener("click", function(){
    setTimeout(fish, 2800);
    showResult.src = "img/castRod.gif";
});
document.getElementById("plusNumBtn").addEventListener("click", function(){
    let maxNum = constrainInNum(document.getElementById("plusNum"));
    for(let i = 0; i < maxNum; i++){
        fish();
    }
});
document.getElementById("plusFishBtn").addEventListener("click", function(){
    let currFishNum;
    let maxNum = constrainInNum(document.getElementById("plusFish"));
    switch(document.getElementById("plusFishChoice").value){
        case "cod":
            currFishNum = +codNum.innerHTML;
            while(+codNum.innerHTML - currFishNum < maxNum){
                fish();
            }
            break;
        case "salmon":
            currFishNum = +salNum.innerHTML;
            while(+salNum.innerHTML - currFishNum < maxNum){
                fish();
            }
            break;
        case "tropFish":
            currFishNum = +tropNum.innerHTML;
            while(+tropNum.innerHTML - currFishNum < maxNum){
                fish();
            }
            break;
        case "puffFish":
            currFishNum = +puffNum.innerHTML;
            while(+puffNum.innerHTML - currFishNum < maxNum){
                fish();
            }
            break;
        default:
            alert("error");
    }
});

function constrainInNum(inputBox){
    if(+inputBox.value < 0){
        inputBox.value = 0;
        return 0;
    } else{
        return +inputBox.value;
    }
}

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