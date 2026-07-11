	let n, arm, rem, sum = 0;

n = +prompt("Enter any Number :");

arm = n;

while (n != 0) {
    rem = n % 10;
    sum = sum + (rem * rem * rem);
    n = Math.floor(n / 10)  ;
}

if (arm == sum)
    console.log("\nThis is Armstrong Number");
else
    console.log("\nThis is Not an Armstrong Number");
