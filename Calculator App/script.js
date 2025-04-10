const display = document.getElementById("input-txt")
const buttons = document.querySelectorAll(".btn, .btn2")
let input = ""

function updateDisplay() {
    display.textContent = input
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const value = button.value

        if (value === "=") {
            try {
                input = eval(input.replace("X", "*"))
                updateDisplay()
            } catch {
                input = "Error"
                updateDisplay()
            }
        } else if (value === "AC") {
            input = ""
            updateDisplay()
        } else if (value === "C") {
            input = input.slice(0, -1)
            updateDisplay()
        } else {
            input += value
            updateDisplay()
        }
    })

})