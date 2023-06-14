document.getElementById("subAns").addEventListener("click", getResult);
document.getElementById("resetbtn").addEventListener("click", resetAll);



function getResult(){
    let cornum = 0;
    let a1 = +document.getElementById("q1").value;
    let a2 = +document.getElementById("q2").value;
    let a3 = +document.getElementById("q3").value;
    let a4 = document.getElementById("q4").value.toLowerCase();

    if(a1 === 4){
        cornum+=1;
        document.getElementById("q1feedback").src = "https://cdn-icons-png.flaticon.com/512/3699/3699516.png";
    } else {
        document.getElementById("q1feedback").src = "https://assets.stickpng.com/images/5a5798809538462e5a82d431.png";
    }
    
    if(a2 === 4 || a2 === 2){
        cornum += 1;
        document.getElementById("q2feedback").src = "https://cdn-icons-png.flaticon.com/512/3699/3699516.png";
    } else {
        document.getElementById("q2feedback").src = "https://assets.stickpng.com/images/5a5798809538462e5a82d431.png";
    }

    if(a3 === 4){
        cornum += 1;
        document.getElementById("q3feedback").src = "https://cdn-icons-png.flaticon.com/512/3699/3699516.png";
    } else {
        document.getElementById("q3feedback").src = "https://assets.stickpng.com/images/5a5798809538462e5a82d431.png";
    }

    if(a4 === "italy"){
        cornum += 1;
        document.getElementById("q4feedback").src = "https://cdn-icons-png.flaticon.com/512/3699/3699516.png";
    } else {
        document.getElementById("q4feedback").src = "https://assets.stickpng.com/images/5a5798809538462e5a82d431.png";
    }

    let resultStr = cornum + "/4";
    

    if(cornum === 4){
        resultStr += " === CONGRATS!!";
        document.getElementById("feedbackGif").src = "https://media3.giphy.com/media/rhC8duvjyYNhRxMBbQ/giphy.gif?cid=6c09b952tt7u4i0976ph18clpvzu9ogjnblsx0pec4t3pvj2&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    } else if (cornum === 3){
        resultStr += " === Almost there!";
        document.getElementById("feedbackGif").src = "https://i.pinimg.com/originals/af/47/5e/af475e2bd5e06c203e1884c13a66083d.gif";
    } else {
        resultStr += " === getter better."
        document.getElementById("feedbackGif").src = "https://gifdb.com/images/high/i-m-sorry-that-you-suck-hw0491telc4d73wt.gif";
    }

    document.getElementById("score").innerHTML = resultStr;

}

function resetAll(){
    document.getElementById("q1feedback").src = "";
    document.getElementById("q2feedback").src = "";
    document.getElementById("q3feedback").src = "";
    document.getElementById("q4feedback").src = "";

    document.getElementById("q1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("q3").value = "";
    document.getElementById("q4").value = "";

    document.getElementById("feedbackGif").src = "";
    document.getElementById("score").innerHTML = "__/4";

}