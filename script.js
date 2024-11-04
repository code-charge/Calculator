// Append character to display
function appendToDisplay(value) {
    document.getElementById("result").value += value;
}

// Clear display
function clearDisplay() {
    document.getElementById("result").value = "";
}

// Delete the last character
function deleteLast() {
    let display = document.getElementById("result");
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        let display = document.getElementById("result");
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid input");
    }
}