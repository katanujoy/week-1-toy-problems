const readline = require("readline-sync");

function steps(n) {
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i));
    }
}

// Get user input
const levels = parseInt(readline.question("Enter the number of steps: "), 10);
steps(levels);
