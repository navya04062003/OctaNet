document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', addTodo);

    function addTodo(event) {
        event.preventDefault();

        const todoText = todoInput.value.trim();

        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.textContent = todoText;

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.addEventListener('click', () => {
                todoItem.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(todoItem);
            });

            todoItem.appendChild(completeButton);
            todoItem.appendChild(deleteButton);

            todoList.appendChild(todoItem);
            todoInput.value = '';

            // Add animation effect
            setTimeout(() => {
                todoItem.style.transform = 'scale(1)';
            }, 0);
        }
    }
});
