// Variable Declaration
const txt = document.getElementById("name");
const btn = document.getElementById("inp__btn");
const spn = document.getElementById("custom__text");

// Function to add value to desired tag
function fun(){
    spn.innerHTML = txt.value;
}

// Button to perform action
btn.addEventListener("click",fun);
