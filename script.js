console.log("Script loaded... Welcome!")

cursorElement = document.getElementById("cursor")
cursorElement.classList.add("cursor-blink", "blinking");

// Get the user input field and new 'CLI' elements.
inputElement = document.getElementById("cli")
cliInputElement = document.getElementById("cliInput")
rowInput = document.getElementById("inputDiv")
properties = ["focus", "blur"]

properties.forEach((property) => {
    inputElement.addEventListener(property, (event) => {
        if (event.type === 'focus') {
            if (inputElement.value.length > 0) {
                cursorElement.classList.remove("blinking")
            }
            } else {
            cursorElement.classList.add("cursor-blink", "blinking");
            }
    })
})

rowInput.addEventListener("click", (event) => {
    inputElement.focus()
})

// Attach input event listener and send input to a new div
console.log(cliInputElement.textContent)

inputElement.addEventListener("input", (event) => {
    if (event) {
        cliInputElement.textContent = inputElement.value
    }
})



