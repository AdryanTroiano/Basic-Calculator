        // Capturing the numbers
        function getNumbers() {
            let n1 = parseFloat(prompt("Type the First Number:"));
            let n2 = parseFloat(prompt("Type the Second Number:"));

            if (isNaN(n1) || isNaN(n2)) {
                alert("Please enter valid numbers.");
                return null;
            }
            return [n1, n2];  
        }

        // Function for addiction
        function calculatorA() {
            let numbers = getNumbers();
            if (numbers !== null) {
                let r = numbers[0] + numbers[1];
                alert("Result (Addition): " + r);
            }
        }

        // Function for subtraction
        function calculatorB() {
            let numbers = getNumbers();
            if (numbers !== null) {
                let r = numbers[0] - numbers[1];
                alert("Result (Subtraction): " + r);
            }
        }

        // Function for multiplication
        function calculatorC() {
            let numbers = getNumbers();
            if (numbers !== null) {
                let r = numbers[0] * numbers[1];
                alert("Result (Multiplication): " + r);
            }
        }

        // Function for division
        function calculatorD() {
            let numbers = getNumbers();
            if (numbers !== null) {
                if (numbers[1] === 0) {
                    alert("Division by zero is not allowed.");
                } else {
                    let r = numbers[0] / numbers[1];
                    alert("Result (Division): " + r);
                }
            }
        }
