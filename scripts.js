const taskList = document.getElementById("task-list");
const input = document.getElementById("task-input");

function addTask() {
  const value = input.value.trim();
  if (value) {
    const li = document.createElement("li");
    li.textContent = value;
    li.onclick = () => li.remove();
    taskList.appendChild(li);
    input.value = "";
  }
}

function sortTasks() {
  const tasks = [...taskList.children];
  tasks.sort((a, b) => a.textContent.localeCompare(b.textContent));
  tasks.forEach(task => taskList.appendChild(task));
}

function reverseTasks() {
  const tasks = [...taskList.children].reverse();
  tasks.forEach(task => taskList.appendChild(task));
}

function clearTasks() {
  taskList.innerHTML = "";
}
