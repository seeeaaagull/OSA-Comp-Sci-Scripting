//Average calc script

document.getElementById("calcAvg").addEventListener("click", avgFunc);

function avgFunc() {
    //input
    let num1 = +document.getElementById("n1").value;
    let num2 = +document.getElementById("n2").value;
    let num3 = +document.getElementById("n3").value;

    //process
    let average = (num1 + num2 + num3)/3

    //output
    document.getElementById("avg").innerHTML = average;
}