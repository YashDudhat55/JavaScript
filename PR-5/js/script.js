let students = [

    {
        id: 101,
        name: "Rahul",
        age: 20,
        course: "JavaScript",
        marks: 78,

        show: function () {
            return this.name + " is learning " + this.course;
        }
    },

    {
        id: 102,
        name: "Priya",
        age: 19,
        course: "Web Development",
        marks: 85,

        show: function () {
            return this.name + " is learning " + this.course;
        }
    },

    {
        id: 103,
        name: "Amit",
        age: 21,
        course: "JavaScript",
        marks: 62,

        show: function () {
            return this.name + " is learning " + this.course;
        }
    }

];

function addStudent(newStd) {

    let check = students.find(s => s.id == newStd.id);

    if (check) {

        console.log("Student ID Already Exists");
        document.write("<p>Student ID Already Exists</p>");

    } else {

        students.push(newStd);

        console.log("Student Added");
        document.write("<p>Student Added Successfully</p>");
    }
}

addStudent({

    id: 104,
    name: "Prince",
    age: 17,
    course: "AI, ML and Data Science",
    marks: 91,

    show: function () {
        return this.name + " is learning " + this.course;
    }

});

function updateStudent(id, name, course, marks) {

    let std = students.find(s => s.id == id);

    if (std) {

        std.name = name;
        std.course = course;
        std.marks = marks;

        console.log("Student Updated");
        document.write("<p>Student Updated Successfully</p>");
    }
}

updateStudent(102, "Priya Patel", "Full Stack", 95);

function deleteStudent(id) {

    let pos = students.findIndex(s => s.id == id);

    if (pos != -1) {

        students.splice(pos, 1);

        console.log("Student Deleted");
        document.write("<p>Student Deleted Successfully</p>");
    }
}

deleteStudent(103);
 
document.write("<h2>Student List</h2>");

for (let std of students) {

    console.log(std);

    document.write(`
        <div>
            <b>ID :</b> ${std.id}<br>
            <b>Name :</b> ${std.name}<br>
            <b>Age :</b> ${std.age}<br>
            <b>Course :</b> ${std.course}<br>
            <b>Marks :</b> ${std.marks}
            <hr>
        </div>
    `);
}

document.write("<h2>Student Details</h2>");

let one = students[0];

for (let key in one) {

    if (typeof one[key] != "function") {

        console.log(key + " : " + one[key]);

        document.write("<b>" + key + "</b> : " + one[key] + "<br>");
    }
}

document.write("<h2>Result</h2>");

for (let std of students) {

    let ans;

    if (std.marks >= 35) {
        ans = "Pass";
    } else {
        ans = "Fail";
    }

    console.log(std.name + " : " + ans);

    document.write("<p>" + std.name + " : " + ans + "</p>");
}

top = students[0];

for (let std of students) {

    if (std.marks > top.marks) {
        top = std;
    }
}

console.log("Topper :", top.name, top.marks);

document.write("<h2>Topper</h2>");
document.write("<p><b>" + top.name + "</b> - " + top.marks + "</p>");

document.write("<h2>Using this Keyword</h2>");

for (let std of students) {

    console.log(std.show());

    document.write("<p>" + std.show() + "</p>");
}