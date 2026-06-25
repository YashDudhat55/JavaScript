// Q1 - Minimum Number

let num1 = Number(prompt("Enter first number :"));
let num2 = Number(prompt("Enter second number :"));

document.write("<h2>Q1 Minimum Value</h2>");
document.write("First number : " + num1 + "<br>");
document.write("Second Number : " + num2 + "<br>");

if (num1 < num2) {
    document.write("Minimum value = " + num1 + "<hr>");
} else {
    document.write("Minimum value = " + num2 + "<hr>");
}


// Q2 - Positive, Negative or Neutral

let number = Number(prompt("Enter any number :"));

document.write("<h2>Q2 Check Positive, Negative or Neutral</h2>");
document.write("Entered number : " + number + "<br>");

if (number > 0) {
    document.write("This number is positive<hr>");
}
else if (number < 0) {
    document.write("This number is negative<hr>");
}
else {
    document.write("This number is neutral<hr>");
}


// Q3 - Average Marks

let maths = Number(prompt("Enter maths marks :"));
let english = Number(prompt("Enter english marks :"));
let science = Number(prompt("Enter science marks :"));

let average = (maths + english + science) / 3;

document.write("<h2>Q3 Average Marks</h2>");
document.write("Maths marks : " + maths + "<br>");
document.write("English marks : " + english + "<br>");
document.write("Science marks : " + science + "<br>");
document.write("Average marks : " + average + "<hr>");