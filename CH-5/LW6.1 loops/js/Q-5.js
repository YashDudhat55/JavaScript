let start = +prompt("Enter First Year");
let end = +prompt("Enter Second Year");

console.log("Leap Years:");

while (start <= end) {

    if ((start % 400 == 0) || (start % 4 == 0 && start % 100 != 0)) {
        console.log(start);
    }

    start++;
}