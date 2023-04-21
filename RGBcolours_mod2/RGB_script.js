//Javascript for RBG colours assingment

//event listener for button click
//when id="previewC" (a button) is clicked, run rgbPreview function
document.getElementById("previewC").addEventListener("click", rgbPreview);

//select all the h1 elements on the page
const headings = document.querySelectorAll('h1');

//Event fucntion
function rgbPreview(){
    //input: get rgb values
    let rval = document.getElementById("redIn").value;
    let gval = document.getElementById("greenIn").value;
    let bval = document.getElementById("blueIn").value;

    //process: build rgb string
    let rgbString = "rgb(" + rval + ", " + gval + ", " + bval + ")"

    // output: display colour and rgb string
    document.getElementById("outStr").innerHTML = rgbString;

    //_____).type.attribute = data
    document.getElementById("display").style.background = rgbString;//string is placed into the css
    document.getElementById("outStr").style.fontFamily = "Comic Sans MS";
    document.getElementById("outStr").style.fontSize = "30px";
    document.getElementById("description").style.color = "rgb(186,85,255)";

    // Loop through the h1 elements and change their font size
    headings.forEach((heading) => {
        heading.style.fontSize = '30px';
        heading.style.fontFamily = "Papyrus";
    });
}

