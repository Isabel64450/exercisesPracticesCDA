

let display = document.getElementById("display");
    let currentInput = "0";

   function updateDisplay() {
        display.textContent = currentInput;
    }

    function appendNumber(num) {
        if (currentInput === "0" && num !== ".") {
            currentInput = num;
        } else {
            currentInput += num;
        }
        updateDisplay();
    }

    function appendOperator(op) {
        if (!/[+\-*/]$/.test(currentInput)) {
            currentInput += op;
            updateDisplay();
        }
    }

 
    function clearDisplay() {
        currentInput = "0";
        updateDisplay();
    }

   
    function deleteLast() {
        currentInput = currentInput.slice(0, -1) || "0";
        updateDisplay();
    }

    
    function calculate() {
        try {
            let result = eval(currentInput);
            if (!isFinite(result)) throw new Error("Division par zéro");
            currentInput = result.toString();
        } catch (e) {
            currentInput = "Erreur";
        }
        updateDisplay();
    }

     
    