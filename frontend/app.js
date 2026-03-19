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

        li.innerHTML = `
            <span onclick="toggleTask(${task.id})" style="cursor:pointer; ${task.completed ? 'text-decoration: line-through;' : ''}">
                ${task.text}
            </span>
            <button onclick="deleteTask(${task.id})">❌</button>
        `;

        list.appendChild(li);
    });
}


function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );

    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}
