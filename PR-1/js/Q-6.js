let name = prompt("Enter Student Name :");

let sub1 = parseInt(prompt("Enter Subject 1 Marks :"));
let sub2 = parseInt(prompt("Enter Subject 2 Marks :"));
let sub3 = parseInt(prompt("Enter Subject 3 Marks :"));
let sub4 = parseInt(prompt("Enter Subject 4 Marks :"));
let sub5 = parseInt(prompt("Enter Subject 5 Marks :"));

let total = sub1 + sub2 + sub3 + sub4 + sub5;
let percentage = total / 5;

let grade;

if (percentage >= 90) {
    grade = "A";
}
else if (percentage >= 75) {
    grade = "B";
}
else if (percentage >= 60) {
    grade = "C";
}
else if (percentage >= 35) {
    grade = "D";
}
else {
    grade = "Fail";
}

console.log("Student Name : " + name);
console.log("Total Marks : " + total);
console.log("Percentage : " + percentage + "%");
console.log("Grade : " + grade);