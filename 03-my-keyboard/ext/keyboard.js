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

    //alert("requiredComboLength: " + requiredComboLength);
    if (keyBoolean == true) {
        charConversion(textareaInput, lastChar);
    } else {
        // alert("nothing here");
        return;
    }
}

function charConversion(currentInput, finalChar) {
    alert(currentInput);
    var specialChar;
    // either 2 or 3 characters
    var sliceLength;
    if (finalChar == "=" && currentInput.length >= 2) {
        //alert("Convert Character");
        sliceLength = 2;
    } else if (finalChar !== "=" && currentInput.length >= 3) {
        //alert("Convert Character");
        sliceLength = 3;
    } else {
        alert("Too short");
    }
    specialChar = convertToSpecialChar(currentInput, finalChar, sliceLength);
    document.getElementById("comboBox").value = specialChar;
}

function convertToSpecialChar(inputText, lastLetter, textSlice) {
    // slices the last 2-3 characters from textbox
    var comboSet = inputText.slice(-textSlice);
    alert("comboSet: " + comboSet);

    // special character array for conversion
    var specialCharArray = [
        ["A+^", "Â"],
        ["a+^", "â"],
        ["A+:", "Ä"],
        ["a+:", "ä"],
        ["E+'", "É"],
        ["e+'", "é"],
        ["E+`", "È"],
        ["e+`", "è"],
        ["E+^", "Ê"],
        ["e+^", "ê"],
        ["E+:", "Ë"],
        ["e+:", "ë"],
        ["m+-", "m̄"],
        ["n+-", "n̄"],
        ["O+^", "Ô"],
        ["o+^", "ô"],
        ["O+:", "Ö"],
        ["o+:", "ö"],
        ["s=", "ſ"],
        ["S+s", "ẞ"],
        ["s+s", "ß"],
        ["U+:", "Ü"],
        ["u+:", "ü"],
        ["Y+:", "Ÿ"],
        ["y+:", "ÿ"]
    ];
    // keyBoolean = specialCharArray.includes(lastChar, textareaInput);
    var firstRow;
    var newSpecialChar;
    // specialCharArray[1][0].includes(lastLetter);
    for (i = 0; i < specialCharArray.length; i++){
        firstRow = specialCharArray[i][0].includes(lastLetter);
        newSpecialChar = specialCharArray[i][1];
        alert("firstRow: " + firstRow);
        if (firstRow == true){
            alert("newSpecialChar: " + newSpecialChar);
            break;
        }
    }
    return newSpecialChar;
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