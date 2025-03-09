const readline = require("readline-sync");

function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointThreshold = 12;
    
    if (speed <= speedLimit) {
        return "Ok";
    } else {
        let points = Math.floor((speed - speedLimit) / 5);
        return points > demeritPointThreshold ? "License suspended" : `Points: ${points}`;
    }
}

// Get user input in Node.js
const speed = parseInt(readline.question("150: "), 10);
console.log(speedDetector(speed));
