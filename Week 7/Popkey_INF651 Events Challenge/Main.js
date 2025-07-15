let output = document.getElementById("coordinates")
let box = document.getElementById("mouseTracker");
let submit = document.getElementById("submitButton").addEventListener("click", handleSubmit);
let divOutput = document.getElementById("outputDiv");

function handleSubmit() {
    let itemInput = document.getElementById("nameInput").value.trim();    //Form submission function

    if (itemInput === '') {
        divOutput.textContent = "Error: Please enter a name.";
        divOutput.style.backgroundColor = "red";
    } else {
        divOutput.textContent = "Welcome, " + itemInput + "!";
        divOutput.style.backgroundColor = "green";
    }
}

document.getElementById("nameInput").addEventListener("keypress", function(event) {  // Keyboard event
    if (event.key === "Enter" ) {
        handleSubmit();
    }
});


box.addEventListener("mousemove", runEvent);

function runEvent(e){  // Mouse event
    output.innerHTML = "<h3>Mouse X:" + e.offsetX + "</h3><h3>Mouse Y: " + e.offsetY + "</h3>";
}
