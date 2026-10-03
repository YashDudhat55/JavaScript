let editId = localStorage.getItem("editId");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let task = tasks.find(function(item) {
    return item.id == editId;
});

if (task) {
    document.getElementById("edit-title").value = task.title;
    document.getElementById("edit-description").value = task.description;
    document.getElementById("edit-date").value = task.date;
    document.getElementById("edit-priority").value = task.priority;
}

function updateTask() {
    let title = document.getElementById("edit-title").value;
    let description = document.getElementById("edit-description").value;
    let date = document.getElementById("edit-date").value;
    let priority = document.getElementById("edit-priority").value;

    if (title === "" || description === "" || date === "") {
        alert("Please fill all fields.");
        return;
    }

    let task = tasks.find(function(item) {
        return item.id == editId;
    });

    if (task) {
        task.title = title;
        task.description = description;
        task.date = date;
        task.priority = priority;
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.removeItem("editId");

    alert("Task updated successfully.");

    window.location.href = "index.html";
}

function cancelEdit() {
    localStorage.removeItem("editId");
    window.location.href = "index.html";
}
