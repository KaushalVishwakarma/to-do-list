document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("new-task");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit")) {
      editTask(event.target.closest(".task-item"));
    } else if (event.target.classList.contains("delete")) {
      deleteTask(event.target.closest(".task-item"));
    } else if (event.target.classList.contains("task-text")) {
      toggleTaskCompletion(event.target.closest(".task-item"));
    }
  });

  function addTask(text) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
            <span class="task-text">${text}</span>
            <div class="task-actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;
    taskList.appendChild(taskItem);
  }

  function editTask(taskItem) {
    const taskTextElement = taskItem.querySelector(".task-text");
    const newTaskText = prompt("Edit task:", taskTextElement.textContent);
    if (newTaskText !== null) {
      taskTextElement.textContent = newTaskText.trim();
    }
  }

  function deleteTask(taskItem) {
    taskItem.remove();
  }

  function toggleTaskCompletion(taskItem) {
    taskItem.classList.toggle("completed");
  }
});
