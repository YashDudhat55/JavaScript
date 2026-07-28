//for..in

let student = {
    name: "Yash",
    age: 17,
    city: "Surat"
};

for (let key in student) {
    console.log(key);
}

//for..of

let arr = [10, 20, 30];

for (let value of arr) {
    console.log(value);
}