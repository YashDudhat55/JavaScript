let a, b = 0, c, n;

a = +prompt("Enter any number:");

n = a;

while(a > 0){

c = a % 10;
b = b * 10 + c;
a = Math.floor(a / 10);
}

if(n == b){
console.log("Palindrome Number");
}
else{
console.log("Not Palindrome");
}
