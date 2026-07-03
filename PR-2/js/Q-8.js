let letters = "abcdefghijklmnopqrstuvwxyz";
let i = 0;

console.log("Output:");
document.write("Output: ");

do {
    console.log(letters[i]);
    document.write(letters[i] + " ");

    i = i + 4;

} while (i < letters.length);