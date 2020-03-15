// https://youtu.be/VBVOXTgXX2U

/*
SPECIAL CHARACTERS
*/
//checks for special characters
window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
    alert("You pressed a key!");
    //conversion
    if (key.keyCode == "65") {
        alert("The 'a' letter key has been pressed!");
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
