let num = Number(prompt("Enter number:"));

let last = num % 10;
let first = num;

while (first >= 10) {
    first = Math.floor(first / 10);
}

let sum = first + last;

console.log("Sum = " + sum);
document.write("Sum = " + sum);