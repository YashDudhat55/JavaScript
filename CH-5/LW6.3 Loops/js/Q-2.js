let num = +prompt("Enter a number : ");

let fact = 1;
let i = 1;

while (i <= num) {
    fact = fact * i;
    i++;
}

console.log("Factorial = " + fact);