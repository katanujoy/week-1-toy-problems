const readline = require("readline-sync");

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Get user input
let input = readline.question("Enter numbers separated by spaces: ");
let numbers = input.split(" ").map(Number);

// Sort and display the result
console.log("Sorted array:", bubbleSort(numbers));
