// https://youtu.be/VBVOXTgXX2U

/*
SPECIAL CHARACTERS
*/
//checks for special characters
window.addEventListener("keyup", checkKeyPress, false);
var textareaInput;
var keyBoolean = false;

function checkKeyPress(key) {
    textareaInput = document.getElementById("typingTextbox").value;
    document.getElementById("comboBox").value = textareaInput;
    
    //Special Characters [":", "s", "^", "'", "`", "-", "="];
    var asciiArray = [186, 83, 54, 222, 192, 189, 187];
    alert("key.keyCode: " + key.keyCode);

    // var keyBoolean;
    keyBoolean = asciiArray.includes(key.keyCode);
    alert("keyBoolean: " + keyBoolean);

    // looks for special characters
    if (keyBoolean == true){
        alert("we found it");
    } else {
        //alert("nothing here");
    }
    //charConversion(textareaInput);
}

function charConversion(currentInput) {
    // alert(currentInput);
    if (currentInput.length >= 2){
        
    } else {
        alert("Too short");
    }
}

/*
BASIC VALUES
*/
var displayNone = "";
var enterChar = displayNone;
var specialCombo = specialChar;
var boxText;

//Reset
//document.getElementById('displayNone').innerHTML = displayNone;

/*
DROPDOWN MENU
*/

// Toggles between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
