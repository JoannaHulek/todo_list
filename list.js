// Function to fetch and render tasks from JSON file
function fetchAndRenderTasks() {
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
    todoList.innerHTML = ''; // Clear existing list

    tasks.forEach(task => {
        var listItem = document.createElement('li');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        listItem.appendChild(checkbox);

        var taskLabel = document.createElement('label');
        taskLabel.textContent = task.title;
        if (task.completed) {
            taskLabel.classList.add('completed');
        }
        listItem.appendChild(taskLabel);

        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        listItem.appendChild(editButton);

        var descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = task.description;
        descriptionSpan.classList.add('task-description');
        listItem.appendChild(descriptionSpan);

        todoList.appendChild(listItem);
    });

    initializeTaskListeners(); // Reattach event listeners to the loaded tasks
}

// Call fetchAndRenderTasks to fetch and render tasks on page load
fetchAndRenderTasks();

document.getElementById("todo-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    var taskInput = document.getElementById("todo-input");
    var descriptionInput = document.getElementById("description-input");
    var taskText = taskInput.value.trim(); // Trim any leading or trailing whitespace
    var descriptionText = descriptionInput.value.trim(); // Trim any leading or trailing whitespace

    if (taskText !== "") { // Check if the input is not empty
        var todoList = document.getElementById("todo-list");
        var listItem = document.createElement("li");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        listItem.appendChild(checkbox);

        var taskLabel = document.createElement("label");
        taskLabel.textContent = taskText;
        listItem.appendChild(taskLabel);

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("hidden-element"); // Initially hide the edit button
        listItem.appendChild(editButton);

        var descriptionSpan = document.createElement("span");
        descriptionSpan.textContent = descriptionText;
        descriptionSpan.classList.add("task-description"); // Assign class for styling
        listItem.appendChild(descriptionSpan);

        todoList.appendChild(listItem);

        taskInput.value = ""; // Clear the task input field
        descriptionInput.value = ""; // Clear the description input field

        // Add event listener to the checkbox
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                taskLabel.classList.add("completed");
                descriptionSpan.classList.add("completed");
            } else {
                taskLabel.classList.remove("completed");
                descriptionSpan.classList.remove("completed");
            }
        });

        // Add event listener to the edit button
        editButton.addEventListener("click", function() {
            var newTaskText = prompt("Edit task:", taskLabel.textContent);
            var newDescriptionText = prompt("Edit description:", descriptionSpan.textContent);

            if (newTaskText !== null && newDescriptionText !== null) {
                taskLabel.textContent = newTaskText;
                descriptionSpan.textContent = newDescriptionText;
            }
        });
    }
});