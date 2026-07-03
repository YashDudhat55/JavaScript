let num = prompt("Enter a number :");

console.log("Entered Number : " + num);
document.write("Entered Number  " + num + "<br><br>");

let sum = 0;

for (let i = 0; i < num.length; i++) {
    let digit = Number(num[i]);
    let power = 1;

    for (let j = 1; j <= i + 1; j++) {
        power = power * digit;
    }

    sum = sum + power;
}

console.log("Sum = " + sum);
document.write("Sum = " + sum + "<br><br>");

if (sum == Number(num)) {
    console.log("Disarium Number");
    document.write("Disarium Number");
}
else {
    console.log("Not a Disarium Number");
    document.write("Not a Disarium Number");
}