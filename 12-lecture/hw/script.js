const TODO_ITEM_SELECTOR = '.todoItem';
const DONE_CLASS = 'done';

const todoList = document.querySelector('#todoList');
const input = document.querySelector('#msgInput');
const button = document.querySelector('#msgButton');

button.addEventListener('click', onButtonClick);
todoList.addEventListener('click', onTodoListClick);

addTodoItem({ message: 'XXX', done: true });
addTodoItem({ message: 'YYY', done: false });
addTodoItem({ message: 'QQQ', done: true });

function onButtonClick() {
    const todo = getMessage();

    if (!isMessageValid(todo)) {
        showError();
        return;
    }

    addTodoItem(todo);
    clear();
}

function onTodoListClick(e) {
    const todoItem = findTodoItem(e.target);

    if (todoItem) {
        if (e.target.classList.contains('deleteBtn')) {
            todoDelete(todoItem)
            return;
        }

        
        todoDone(todoItem);
    }
}

function findTodoItem(el) {
    return el.closest(TODO_ITEM_SELECTOR);
}

function todoDelete(todoItem) {
    todoItem.remove();
}

function todoDone(el) {
    el.classList.toggle(DONE_CLASS);
}

function getMessage() {
    return { message: input.value, done: false };
}

function isMessageValid(todo) {
    return todo.message.trim() !== '';
}

function showError() {
    alert('Поле сообщение не должно быть пустым');
}

function addTodoItem(todo) {
    const html = generateTodoHtml(todo);

    todoList.insertAdjacentHTML('beforeend', html);
}

function generateTodoHtml(todo) {
    return `
        <li class='todoItem ${todo.done ? DONE_CLASS : ''}'>
            <span>${todo.message}</span>
            <button class='deleteBtn'>[Delete]</button>
        </li>
    `;
}

function clear() {
    input.value = '';
}