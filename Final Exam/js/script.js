function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {

    let savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }

    displayTasks();
}

function displayTasks(taskList = tasks) {
    let table = document.getElementById("task-table");

    if (!table) {
        return;
    }

    table.innerHTML = "";

    taskList.forEach(function(task, index) {
        let priorityClass = task.priority.toLowerCase();

        table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${task.title}</td>
                <td>${task.description}</td>
                <td>${task.date}</td>
                <td>
                    <span class="priority ${priorityClass}">
                        ${task.priority}
                    </span>
                </td>
                <td>
                    <button class="view-task"
                        onclick="viewTask(${task.id})">
                        View
                    </button>

                    <button class="edit-task"
                        onclick="editTask(${task.id})">
                        Edit
                    </button>

                    <button class="delete-task"
                        onclick="deleteTask(${task.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

function viewTask(id) {
    let task = tasks.find(function(item) {
        return item.id === id;
    });

    if (task) {
        alert(
            "Task Details\n\n" +
            "Title: " + task.title + "\n" +
            "Description: " + task.description + "\n" +
            "Due Date: " + task.date + "\n" +
            "Priority: " + task.priority + "\n" +
            "Status: " + task.status
        );
    }
}

function editTask(id) {
    localStorage.setItem("editId", id);
    window.location.href = "Edit-task.html";
}

function deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks = tasks.filter(function(task) {
            return task.id !== id;
        });

        saveTasks();
        displayTasks();
    }
}

loadTasks();