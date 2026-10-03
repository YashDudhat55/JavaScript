function addTask() {
    let title = document.getElementById("task-title").value;
    let description = document.getElementById("task-description").value;
    let date = document.getElementById("task-date").value;
    let priority = document.getElementById("task-priority").value;

    if (title === "" || description === "" || date === "") {
        alert("Please fill all fields.");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    let newTask = {
        id: Date.now(),
        title: title,
        description: description,
        date: date,
        priority: priority,
        status: "Active"
    };

    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    alert("Task added successfully.");

    window.location.href = "index.html";
}

function clearForm() {
    document.getElementById("task-title").value = "";
    document.getElementById("task-description").value = "";
    document.getElementById("task-date").value = "";
    document.getElementById("task-priority").value = "Medium";
}
