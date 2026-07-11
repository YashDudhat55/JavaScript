let n, sum, rem;

n = +prompt("Enter any number :");

while (n > 9) {
    sum = 0;

    while (n != 0) {
        rem = n % 10;
        sum = sum + rem;
        n = Math.floor(n / 10);
    }

    n = sum;

}

if (n == 1)
    console.log("\nThis is Magic Number");
else
    console.log("\nThis is Not a Magic Number");