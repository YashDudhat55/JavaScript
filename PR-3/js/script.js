function addition(a, b) {
    console.log("Answer = " + (a + b));
}

function subtraction(a, b) {
    console.log("Answer = " + (a - b));
}

function multiplication(a, b) {
    console.log("Answer = " + (a * b));
}

function division(a, b) {
    console.log("Answer = " + (a / b));
}

function modulo(a, b) {
    console.log("Answer = " + (a % b));
}

let choice;

while (choice != 0) {

    choice = +prompt(
        "Press 1 for Addition\n" +
        "Press 2 for Subtraction\n" +
        "Press 3 for Multiplication\n" +
        "Press 4 for Division\n" +
        "Press 5 for Modulo\n" +
        "Press 0 for Exit"
    );

    if (choice == 0) {
        console.log("Program End");
        break;
    }

    let a = +prompt("Enter First Number : ");
    let b = +prompt("Enter Second Number : ");

    switch (choice) {

        case 1:
            addition(a, b);
            break;

        case 2:
            subtraction(a, b);
            break;

        case 3:
            multiplication(a, b);
            break;

        case 4:
            division(a, b);
            break;

        case 5:
            modulo(a, b);
            break;

        default:
            console.log("Invalid Choice");
    }
}