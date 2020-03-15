// https://youtu.be/VBVOXTgXX2U

/*
SPECIAL CHARACTERS
*/
//checks for special characters
window.addEventListener("keyup", checkKeyPress, false);
var textareaInput;

function checkKeyPress(key) {
    /*
    alert("typeTextbox length: " + textareaInput.value.length);
    var textareaInput = document.querySelector("typingTextbox");
    var textareaInput = document.getElementById("typingTextbox").value;
    alert(textareaInput);
    document.getElementById("typingTextbox").value = "Ha ha, I messed you up!";
    */
    //conversion
    if (key.keyCode == "65") {
        alert("The 'a' letter key has been pressed!");
    }
    textareaInput = document.getElementById("typingTextbox").value;
    charConversion(textareaInput);
    document.getElementById("comboBox").value = textareaInput;
}

function charConversion(currentInput) {
    alert(currentInput);
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
