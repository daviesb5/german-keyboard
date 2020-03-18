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
var specialCharArray = [":", "s", "^", "'", "`", "-", "="];
var asciiArray = [186, 83, 54, 222, 192, 189, 187];

function checkKeyPress() {
    textareaInput = document.getElementById("typingTextbox").value;
    document.getElementById("comboBox").value = textareaInput;

    // Determines if current key is a special character
    var lastChar = textareaInput.charAt(textareaInput.length - 1);
    keyBoolean = specialCharArray.includes(lastChar, textareaInput);

    //checks that required length fits in text length
    /*
    requiredComboLength = findComboLength(lastChar);
    */

    //alert("requiredComboLength: " + requiredComboLength);
    if (keyBoolean == true) {
        charConversion(textareaInput, lastChar);
    } else {
        // alert("nothing here");
        return;
    }
}

/*
function findComboLength(currentChar) {
    // alert("currentChar: " + currentChar);
    // determines required length
    if (currentChar == "=") {
        return 2;
    } else {
        return 3;
    }
}
*/

function charConversion(currentInput, finalChar) {
    alert(currentInput);
    if (finalChar == "=" && currentInput.length >= 2) {
        alert("Convert Character");
    } else if (finalChar !== "=" && currentInput.length >= 3) {
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