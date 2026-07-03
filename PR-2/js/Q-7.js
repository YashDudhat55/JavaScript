let first = prompt("Enter Start Character:");
let last = prompt("Enter End Character:");

console.log("Start Character : " + first);
console.log("End Character : " + last);

document.write("Start Character : " + first + "<br>");
document.write("End Character : " + last + "<br><br>");

let start = first.charCodeAt(0);
let end = last.charCodeAt(0);

document.write("Characters : ");

for (let i = start; i <= end; i++) {
    let ch = String.fromCharCode(i);

    console.log(ch);
    document.write(ch + " ");
}