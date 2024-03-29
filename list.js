function saveTasks(tasksTodo) {
    // Function to save tasks list to JSON
    const tasksJson = JSON.stringify(tasksTodo);

    console.log(tasksJson)

    const filename = "todo-list.json";
    const blob = new Blob([tasksJson], { type: "application/json" });

    if (window.navigator.msSaveOrOpenBlob) {
        // For IE and Edge browsers
        window.navigator.msSaveBlob(blob, filename);
    } else {
        // For other browsers
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }
}

function loadTasksFromStorage() {
    const tasksJson = localStorage.getItem('tasks');
    if (tasksJson) {
        const taskList = JSON.parse(tasksJson);
        const tasksTodo = document.getElementById("tasks-todo");
        tasksTodo.innerHTML = ''; // Clear existing tasks
        taskList.forEach(function(task) {
            const taskItem = document.createElement("li");
            // Create task elements and append them to taskItem
            // For example:
            // taskItem.textContent = task.title;
            // tasksTodo.appendChild(taskItem);
        });
    }
}

document.getElementById("save-list").addEventListener("submit", function(event) {
    const tasksTodo = getTasksTodo();
    saveTasks(tasksTodo);
    loadTasksFromStorage();
})