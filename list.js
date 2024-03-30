const task = {
    title: '',
    description: '',
    doneFlag: false
};

function createOutput(outputDiv, tasksTodo) {

    const tasks = []; // Array to store task objects

    // Iterate over each <li> element within the <ul>
    tasksTodo.querySelectorAll('li').forEach(function(liElement) {
        const task = {}; // Object to represent a task

        // Extract task title from the text content of the <li>

        task.title = liElement.querySelector('.task-title').textContent.trim()
        task.description = liElement.querySelector('.task-description').textContent.trim();
        task.doneFlag = liElement.querySelector('input[type="checkbox"]').checked;

        tasks.push(task);
    });

    const tasksJson = JSON.stringify(tasks);

    let outputSpan = document.createElement('span');
    outputSpan.textContent = tasksJson;
    outputSpan.classList.add("code-element")
    outputDiv.appendChild(outputSpan)
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

document.getElementById("list-handling").addEventListener("submit", function(event) {
    const tasksTodo = getTasksTodo()
    const outputDiv = document.getElementById("json-output")
    createOutput(outputDiv, tasksTodo);
    //loadTasksFromStorage();
})