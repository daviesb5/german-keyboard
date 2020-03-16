// https://youtu.be/VBVOXTgXX2U

/*
SPECIAL CHARACTERS
*/
//checks for special characters
window.addEventListener("keyup", checkKeyPress, false);
var textareaInput;
var keyBoolean = false;
var requiredComboLength = 0;
//Special Characters [":", "s", "^", "'", "`", "-", "="];
var asciiArray = [186, 83, 54, 222, 192, 189, 187];

function checkKeyPress(key) {
    //grabs string in textbox
    textareaInput = document.getElementById("typingTextbox").value;

    //checks that required length fits in text length
    requiredComboLength = findComboLength(key.keyCode);

    // Determines if current key is a special character
    keyBoolean = asciiArray.includes(key.keyCode, textareaInput);

    // compares text length vs required combo length
    if (textareaInput.length >= requiredComboLength && keyBoolean){
        // looks for special characters
        if (keyBoolean == true){
            charConversion(textareaInput, requiredComboLength);
        }
    } else {
        return;
    }
}

function findComboLength(currentKeyCode){
    // determines required length
    if (currentKeyCode == 187){
        return 2;
    } else {
        return 3;
    }
}

function charConversion(currentInput, requiredLength) {
    //displays combo box
    document.getElementById("comboBox").value = currentInput;
    //determines whether we convert characters or not
    if (currentInput.length >= 2){
        alert("Convert Character");
    } else {
        //alert("Too short");
        return;
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
