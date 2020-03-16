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
    textareaInput = document.getElementById("typingTextbox").value;
    document.getElementById("comboBox").value = textareaInput;

    //checks that required length fits in text length
    requiredComboLength = findComboLength(key.keyCode);
    //alert("requiredComboLength: " + requiredComboLength);
    if (textareaInput.length >= requiredComboLength){
        // Determines if current key is a special character
        keyBoolean = asciiArray.includes(key.keyCode, textareaInput);

        // looks for special characters
        if (keyBoolean == true){
            charConversion(textareaInput, requiredComboLength);
        } else {
            alert("nothing here");
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
    alert(currentInput);
    if (currentInput.length >= 2){
        alert("Convert Character");
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
