// Q1 - Minimum of 3 Numbers

let num1 = Number(prompt("Enter first number :"));
let num2 = Number(prompt("Enter second number :"));
let num3 = Number(prompt("Enter third number :"));

let min = num1;

if (num2 < min) {
    min = num2;
}

if (num3 < min) {
    min = num3;
}

document.write("<h2>Q1 - Minimum of 3 Numbers</h2>");
document.write("First Number : " + num1 + "<br>");
document.write("Second Number : " + num2 + "<br>");
document.write("Third Number : " + num3 + "<br>");
document.write("Minimum Value : " + min + "<hr>");


// Q2 - Maximum of 4 Numbers

let n1 = Number(prompt("Enter first number :"));
let n2 = Number(prompt("Enter second number :"));
let n3 = Number(prompt("Enter third number :"));
let n4 = Number(prompt("Enter fourth number :"));

let max = n1;

if (n2 > max) {
    max = n2;
}

if (n3 > max) {
    max = n3;
}

if (n4 > max) {
    max = n4;
}

document.write("<h2>Q2 - Maximum of 4 Numbers</h2>");
document.write("First Number : " + n1 + "<br>");
document.write("Second Number : " + n2 + "<br>");
document.write("Third Number : " + n3 + "<br>");
document.write("Fourth Number : " + n4 + "<br>");
document.write("Maximum Value : " + max);