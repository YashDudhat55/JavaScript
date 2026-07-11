let n = +prompt("Enter a number:");
let i = 1;

do {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
} while (i <= n);