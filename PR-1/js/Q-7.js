let birthYear = parseInt(prompt("Enter your Birth Year :"));

let currentYear = 2026;

let age = currentYear - birthYear;

console.log("Your Age is : " + age);

if (age <= 12) {
    console.log("Category : Child");
}
else if (age <= 19) {
    console.log("Category : Teenager");
}
else if (age <= 59) {
    console.log("Category : Adult");
}
else {
    console.log("Category : Senior Citizen");
}