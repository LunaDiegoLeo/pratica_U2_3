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