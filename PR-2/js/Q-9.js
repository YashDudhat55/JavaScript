let num = Number(prompt("Enter number:"));
let count = 0;

while (num > 0) {
    count++;
    num = Math.floor(num / 10);
}

console.log("Total digits: " + count);
document.write("Total digits: " + count);