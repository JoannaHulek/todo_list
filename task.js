const task = {
    taskTitle: '',
    taskDescription: '',
    doneFlag: false
};

function createNewTask(titleInput, descriptionInput) {
    const myTask = Object.create(task);
    myTask.taskTitle = titleInput.value.trim();
    myTask.taskDescription = descriptionInput.value.trim();
    myTask.doneFlag = false;

    createListItem(myTask);
}

function editTask(myTask, newTitle, newDescription) {
    myTask.taskTitle = newTitle;
    myTask.taskDescription = newDescription

    return myTask;
}

function updateDoneFlag(myTask, newDoneFlag) {
    myTask.doneFlag = newDoneFlag;

    return myTask;
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
