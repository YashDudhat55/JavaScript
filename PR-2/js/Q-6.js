let num = Number(prompt("Enter a number:"));

while (num > 9) {
    let sum = 0;

    while (num > 0) {
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    }

    num = sum;
}

console.log("Final: " + num);
document.write("Final: " + num);