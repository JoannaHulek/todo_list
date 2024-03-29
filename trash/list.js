// Function to fetch and render tasks from JSON file
function fetchAndRenderList() {
    // Fetch the JSON data from todo-list.json
    fetch('todo-list.json')
        .then(response => response.json())
        .then(tasks => {
            renderTasks(tasks); // Render the tasks on the page
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
        });
}

// Function to render tasks
function renderTasks(tasks) {
    var todoList = document.getElementById('todo-list');

    tasks.forEach(task => {
        var todoList = document.getElementById("todo-list");
        var listItem = document.createElement('li');

        var titleText = task.title;
        var descriptionText = task.description;
        var completedLabel = task.doneFlag;

        createListItem(task, document.getElementById("todo-list"))
    });
}

// Call fetchAndRenderList to fetch and render tasks on page load
fetchAndRenderList();

function createListItem(task, todoParent) {
    var listItem = document.createElement('li');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.doneFlag;
    listItem.appendChild(checkbox);

    var taskLabel = document.createElement('label');
    taskLabel.textContent = task.title;
    if (task.doneFlag) {
        taskLabel.classList.add('doneFlag');
    }
    listItem.appendChild(taskLabel);

    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add("hidden-element"); // Initially hide the edit button
    listItem.appendChild(editButton);

    var descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = task.description;
    descriptionSpan.classList.add('task-description');
    listItem.appendChild(descriptionSpan);
    createList(listItem, todoParent)
}

function createList(listItem, todoList) {

    todoList.appendChild(listItem);

    // Add event listener to the checkbox
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskLabel.classList.add("doneFlag");
            descriptionSpan.classList.add("doneFlag");
        } else {
            taskLabel.classList.remove("doneFlag");
            descriptionSpan.classList.remove("doneFlag");
        }
    });

    // Add event listener to the edit button
    editButton.addEventListener("click", function () {
        var newTaskText = prompt("Edit task:", taskLabel.textContent);
        var newDescriptionText = prompt("Edit description:", descriptionSpan.textContent);

        if (newTaskText !== null && newDescriptionText !== null) {
            taskLabel.textContent = newTaskText;
            descriptionSpan.textContent = newDescriptionText;
        }
    });
}


