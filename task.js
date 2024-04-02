const task = {
    id: 0,
    title: '',
    description: '',
    doneFlag: false
};

const tasks = [];

function Task(title, description){
    this.id = 0;
    this.title = title;
    this.description = description;
    this.doneFlag = false;
}

function addTask(title, description) {
    const newTask = new Task(title, description);
    newTask.id = tasks.length;
    tasks.push(newTask);

    return newTask;
}


function updateDoneFlag(taskItem, checkbox) {
    let taskID = parseInt(taskItem.id)

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskItem.classList.add("completed");
        } else {
            taskItem.classList.remove("completed");
        }
        tasks[taskID].doneFlag = checkbox.checked;
    });
}

function editTask(taskItem, editButton, titleLabel, descriptionSpan) {
    let taskID = parseInt(taskItem.id)

    editButton.addEventListener("click", function () {
        let newTitle = prompt("Edit title:", titleLabel.textContent);
        if (newTitle !== null) {
            titleLabel.textContent = newTitle;
            tasks[taskID].title = newTitle;
        }
        let newDescription = prompt("Edit description:", descriptionSpan.textContent);
        if (newDescription !== null) {
            descriptionSpan.textContent = newDescription
            tasks[taskID].description = newDescription;
        }
    });
}

function getTaskInput() {
    let titleInput = document.getElementById("title-input");
    let title = titleInput.value.trim(); // Trim any leading or trailing
    titleInput.value = ""; // Clear the input field

    let descriptionInput = document.getElementById("description-input");
    let description = descriptionInput.value.trim(); // Trim any leading or trailing
    descriptionInput.value = ""; // Clear the input field

    return addTask(title, description);
}

function createTaskItem(taskItem, title, description) {
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = false;
    taskItem.appendChild(checkbox);

    let titleLabel = document.createElement('label');
    titleLabel.textContent = title;
    titleLabel.classList.add('task-title');
    taskItem.appendChild(titleLabel);

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add("hidden-element"); // Initially hide the edit button
    taskItem.appendChild(editButton);

    let descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = description;
    descriptionSpan.classList.add('task-description');
    taskItem.appendChild(descriptionSpan);
    return {checkbox, titleLabel, editButton, descriptionSpan};
}

function getTasksTodo() {
    return tasks;
}
function getTasksView() {
    return document.getElementById("tasks-todo");
}

document.getElementById("new-task-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    let newTask = getTaskInput();

    let tasksTodo = document.getElementById("tasks-todo");
    let taskItem = document.createElement("li");
    taskItem.id=newTask.id;

    if (newTask.title !== "" || newTask.description !== "") { // Check if the input is not empty
        let {
            checkbox,
            titleLabel,
            editButton,
            descriptionSpan
        } = createTaskItem(taskItem, newTask.title, newTask.description);

        tasksTodo.appendChild(taskItem);

        updateDoneFlag(taskItem, checkbox);
        editTask(taskItem, editButton, titleLabel, descriptionSpan)
    }
});

document.getElementById("list-handling").addEventListener("submit", function(event) {
    const tasks = getTasksTodo();
    const tasksTodo = getTasksView()
    const outputDiv = document.getElementById("json-output")

    let outputSpan = document.createElement('span');
    outputSpan.textContent = JSON.stringify(tasks);
    outputDiv.appendChild(outputSpan);

})