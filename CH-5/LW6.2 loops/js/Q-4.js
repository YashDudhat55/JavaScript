let num = +prompt("Enter any number : ");

let a = 0;
let b = 1;
let c;

for (let x = 1; x <= num; x++) {

    console.log(a);

    c = a + b;
    a = b;
    b = c;
}