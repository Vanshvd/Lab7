document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    const createTaskElement = (taskText) => {
        const li = document.createElement('li');
        li.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function toggleCompleted(event) {
            if (event.target.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        const div = document.createElement('div');
        div.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(div);
        li.appendChild(deleteBtn);

        return li;
    };

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement)
            taskInput.value = '';
            taskInput.focus();
        }
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});