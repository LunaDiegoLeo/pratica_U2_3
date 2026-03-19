let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value;

    if (text === "") {
        alert("Escribe una tarea");
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(task);

    input.value = "";

    renderTasks();
}


function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;
        list.appendChild(li);
    });