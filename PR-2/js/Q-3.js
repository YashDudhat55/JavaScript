let unit = Number(prompt("Enter Units:"));
let bill = 0;

console.log("Units: " + unit);
document.write("Units: " + unit + "<br><br>");

if (unit <= 50) {
    bill = unit * 0.50;
}
else if (unit <= 150) {
    bill = (50 * 0.50) + (unit - 50) * 0.75;
}
else if (unit <= 250) {
    bill = (50 * 0.50) + (100 * 0.75) + (unit - 150) * 1.20;
}
else {
    bill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + (unit - 250) * 1.50;
}

bill = bill + (bill * 20 / 100);

console.log("Bill = " + bill);
document.write("Bill = " + bill);