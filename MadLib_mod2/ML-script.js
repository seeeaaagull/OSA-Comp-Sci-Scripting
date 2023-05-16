//Mad Lib with Javascript

/*
"There are too many _______ on this _______ airplane!</em>", I screamed. "<em>Somebody has to _______ on the _______ to solve this problem! </em> Looking to my right, I saw a person running ________. _______ had probably seen the view out the window - we were in _______!!!!"
*/


//event listener
document.getElementById("preview").addEventListener("click", madlib);

//input
function madlib(){
    let pluralNoun = document.getElementById("pluralnoun").value;
    let adjective = document.getElementById("adjective").value;
    let verb = document.getElementById("verb").value;
    let noun = document.getElementById("noun").value;
    let adverb = document.getElementById("adverb").value;
    let pronoun = document.getElementById("pronoun").value;
    let location = document.getElementById("location").value;

    //process
    let result = '"There are too many ' + pluralNoun + ' on this ' + adjective + ' airplane!", I screamed. "Somebody has to ' + verb + ' on the ' + noun + ' to solve this problem." ';
    let result2 = 'Looking to my right, I saw a person running ' + adverb +'. '+ pronoun +' had probably seen the view out the window - we were in ' + location + '!!!!'
    let totalresult = result + result2;

    //output 
    document.getElementById("result").innerHTML = totalresult;
    document.getElementById("result").style.border = "thick dotted #771dde";
}






