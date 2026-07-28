
// Question 1: Negative Elements
console.log("Question 1");
document.write("<h2>Question 1: Negative Elements</h2>");

let arr = [10, -5, 20, -15, 30, -8];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        console.log(arr[i]);
        document.write(arr[i] + "<br>");
    }
}

// Question 2: Largest Element
console.log("Question 2");
document.write("<h2>Question 2: Largest Element</h2>");

let arr2 = [10, 20, 50, 40, 15];

let largest = arr2[0];

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > largest) {
        largest = arr2[i];
    }
}
console.log(largest);
document.write(largest);

// Question 3: Maximum Element
console.log("Question 3");
document.write("<h2>Question 3: Maximum Element</h2>");

let arr3 = [12, 25, 40, 80, 5];

let max = arr3[0];

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] > max) {
        max = arr3[i];
    }
}

console.log(max);
document.write(max);

// Question 4: Minimum Element
console.log("Question 4");
document.write("<h2>Question 4: Minimum Element</h2>");

let arr4 = [20, 15, 40, 2, 60];

let min = arr4[0];

for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] < min) {
        min = arr4[i];
    }
}

console.log(min);
document.write(min);

// Question 5: Duplicate Elements
console.log("Question 5");
document.write("<h2>Question 5: Duplicate Elements</h2>");

let arr5 = [10, 20, 30, 20, 40, 10];

for (let i = 0; i < arr5.length; i++) {
    for (let j = i + 1; j < arr5.length; j++) {
        if (arr5[i] == arr5[j]) {
            console.log(arr5[i]);
            document.write(arr5[i] + "<br>");
            break;
        }
    }
}

// Question 6 : Duplicate Elements
console.log("Question 6");
document.write("<h2>Question 6: Sum of Elements</h2>");

let arr6 = [10, 20, 30, 40];

let sum = 0;

for (let i = 0; i < arr6.length; i++) {
    sum = sum + arr6[i];
}

console.log(sum);
document.write(sum);

// Question 7: First, Middle and Last
console.log("Question 7");
document.write("<h2>Question 7: First, Middle and Last</h2>");

let arr7 = [10, 20, 30, 40, 50];

let middle = parseInt(arr7.length / 2);

console.log(arr7[0]);
console.log(arr7[middle]);
console.log(arr7[arr7.length - 1]);

document.write("First = " + arr7[0] + "<br>");
document.write("Middle = " + arr7[middle] + "<br>");
document.write("Last = " + arr7[arr7.length - 1]);

// Question 8: Sum of Even Index Elements
console.log("Question 8");
document.write("<h2>Question 8 : Sum of Even Index Elements</h2>");

let arr8 = [10, 20, 30, 40, 50, 60];

let sum2 = 0;

for (let i = 0; i < arr8.length; i++) {
    if (i % 2 == 0) {
        sum2 = sum2 + arr8[i];
    }
}

console.log(sum);
document.write(sum);