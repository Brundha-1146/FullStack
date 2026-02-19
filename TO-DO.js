const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCountsDiv = document.getElementById("taskCounts");

function updateTaskCounts() {
  const totalTasks = taskList.children.length;
  const completedTasks = taskList.querySelectorAll('.completed').length;
  taskCountsDiv.innerHTML = `
    <p>Total Tasks: ${totalTasks}</p>
    <p>Completed Tasks: ${completedTasks}</p>
  `;
}

addButton.addEventListener("click", function () {
  const task = taskInput.value.trim();
  if (task === "") {
    alert("Please enter a task");
    return;
  }
  const existingTasks = Array.from(taskList.children).map(li => li.querySelector('span').textContent);
  if (existingTasks.includes(task)) {
    alert("This task already exists!");
    return;
  }
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = task;
  span.style.cursor = "pointer";
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
    updateTaskCounts();
  });
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn"; // Assign class for styling
  deleteBtn.style.marginLeft = "10px"; // Optional inline style
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
    updateTaskCounts();
  });
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
  updateTaskCounts();
});

updateTaskCounts();