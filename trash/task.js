const task = {
    title: '',
    description: '',
    doneFlag: false
};

const tasks = [];

function createNewTask(title, description) {
    return {
    title: title,
    description: description,
    doneFlag: false // Default value for doneFlag
}}

function addTask(newTask) {
    tasks.push(newTask);
    renderTasks(tasks)
}

function editTask(taskID, newTitle, newDescription) {
    if (taskID >= 0 && taskID < tasks.length) {
        const task = tasks[taskID];
        task.title = newTitle;
        task.description = newDescription;
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

    addTask(createNewTask(titleInput, descriptionInput));
}

function extracted(myTask, titleInput, descriptionInput) {
    if (myTask.taskTitle !== "") { // Check if the input is not empty
        var todoList = document.getElementById("todo-list");
        var listItem = document.createElement("li");
        createListItem(listItem, titleText, descriptionText, false, todoList);
        titleInput.value = ""; // Clear the task input field
        descriptionInput.value = ""; // Clear the description input field
    }
}


document.getElementById("new-task-form").addEventListener("submit", function(event) {
    onSubmit(event);
});
