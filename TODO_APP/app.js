// Select the form and task list
const form = document.querySelector("form");
const taskList = document.querySelector("#task-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the task input
  const taskInput = document.querySelector("#task-input");

  // Create a new li element
  const newTask = document.createElement("li");

  // Set the text content of the new task to the task input
  newTask.textContent = taskInput.value;

  // Append the new task to the task list
  taskList.appendChild(newTask);

  // Clear the task input
  taskInput.value = "";
});
