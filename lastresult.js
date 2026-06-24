const add = require("./addition");
const sub = require("./substraction");
const product = require("./multiplication");
const division = require("./division");
const pwr = require("./power");
const sqrt = require("./sqrt");

function useLastResult(r1, state, menu) {
    if (state.lastresult === null) {
        console.log("\nNo previous result available. Perform a calculation first.");
        menu();
        return;
    }

    console.log("Arithmetic Operation on Previous Result");
    console.log("Previous Result: " + state.lastresult);
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Power");
    console.log("6. Square Root");

    r1.question("Enter operation: ", (op) => {
        op = Number(op);

        if (op === 6) {
            state.lastresult = sqrt(state.lastresult);
            console.log("Square Root ="  + state.lastresult);
            r1.question("Do you want to continue? (y/n): ", (ans) => {
                if (ans.toLowerCase() === "y")
                    {
                     menu();
                     }
                else 
                {
                    r1.close();
                }
            });

        } else if (op >= 1 && op <= 5) {
            r1.question("Enter second number: ", (n) => {
                n = Number(n);
                let result;

                switch (op) {
                    case 1:
                    state.lastresult = add(state.lastresult, n);
                        console.log("The sum is" + state.lastresult);
                        break;
                    case 2:
                    state.lastresult = sub(state.lastresult, n);
                        console.log("The difference is" + state.lastresult);
                        break;
                    case 3:
                    state.lastresult = product(state.lastresult, n);
                        console.log("The product is" + state.lastresult);
                        break;
                    case 4:
                        if (n === 0) {
                            console.log("Error: Division by zero is not allowed.");
                            r1.question("Do you want to continue? (y/n): ", (ans) => {
                                if (ans.toLowerCase() === "y") menu();
                                else r1.close();
                            });
                            return;
                        }
                        state.lastresult= division(state.lastresult, n);
                        console.log("The division is" + state.lastresult);
                        break;
                    case 5:
                        state.lastresult= pwr(state.lastresult, n);
                        console.log("The power is" + state.lastresult);
                        break;
                }

                r1.question("Do you want to continue? (y/n): ", (ans) => {
                    if (ans.toLowerCase() === "y") menu();
                    else r1.close();
                });
            });

        } else {
            console.log("Invalid operation. Please choose between 1 and 6.");
            r1.question("Do you want to continue? (y/n): ", (ans) => {
                if (ans.toLowerCase() === "y") menu();
                else r1.close();
            });
        }
    });
}

module.exports = useLastResult;
