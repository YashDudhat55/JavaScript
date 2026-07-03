let n = Number(prompt("Enter number of terms:"));

let num = 1;
let inc = 1;

console.log("Series:");
document.write("Series: <br>");

for (let i = 1; i <= n; i++) {
    console.log(num);
    document.write(num + " ");

    num = num + inc;
    inc = inc + 1;
}