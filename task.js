const task = {
    taskTitle: '',
    taskDescription: '',
    doneFlag: false
};

const tasks = [];

function Task(title, description) {
    this.taskTitle = title;
    this.taskDescription = description;
    this.doneFlag = false; // Default value for doneFlag
}

function addTask(titleInput, descriptionInput) {
    const newTask = new Task(titleInput, descriptionInput)
    tasks.push(newTask);
}

function editTask(taskID, newTitle, newDescription) {
    if (taskID >= 0 && taskID < tasks.length) {
        const task = tasks[taskID];
        task.taskTitle = newTitle;
        task.taskDescription = newDescription;
    }
}

// Function to update done flag
function updateDoneFlag(taskID, newDoneFlag) {
    if (taskID >= 0 && taskID < tasks.length) {
        const task = tasks[taskID];
        task.doneFlag = newDoneFlag;
    }
}

function onSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    var titleInput = document.getElementById("todo-input");
    var descriptionInput = document.getElementById("description-input");

    return createNewTask(titleInput, descriptionInput);
}

document.getElementById("new-task-form").addEventListener("submit", function(event) {
    onSubmit(event);
});
