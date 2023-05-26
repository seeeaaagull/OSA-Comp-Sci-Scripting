let userChoice = "ek";
let x = 0;
let y = 0;
let z = 0;

function changeReact(index){
  document.getElementById(index).style.display = "block";
}

function clear(){
  document.getElementById("ek").style.display = "none";
  document.getElementById("ep").style.display = "none";
  document.getElementById("sv").style.display = "none";
  document.getElementById("answer").innerHTML = "";
  x = 0;
  y = 0;
  z = 0;
}


clear();
document.getElementById("ek").style.display = "block";


document.getElementById("mySelect").addEventListener("change", function() {
  clear();
  userChoice = document.getElementById("mySelect").value;
  changeReact(userChoice);
}); 

document.getElementById("solve").addEventListener("click", function() {
  if(userChoice == "ek"){
    x = +document.getElementById("ek1").value;
    y = +document.getElementById("ek2").value;
    let a = 0.5*x*y*y;
    document.getElementById("answer").innerHTML = a + " Joules";
  } else if (userChoice == "ep"){
    x = +document.getElementById("ep1").value;
    y = +document.getElementById("ep2").value;
    z = +document.getElementById("ep3").value;
    let a = x*y*z;
    document.getElementById("answer").innerHTML = a + " Joules";
  } else if (userChoice == "sv"){
    x = +document.getElementById("sv1").value;
    let a = (4/3)*3.14159*x*x*x;
    document.getElementById("answer").innerHTML = a + " units³";
  }

});