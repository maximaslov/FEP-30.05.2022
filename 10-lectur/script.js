const TODO_ITEM_SELECTOR = '.todoItem';
const EDIT_BTN_CLASS = 'editBtn';
const DELETE_BTN_CLASS = 'deleteBtn';

const todoList = document.querySelector('#todoList');
const input = document.querySelector('#msgInput');
const button = document.querySelector('#msgButton');
const todoItemTemplate = document.querySelector('#todoItemTemplate');

button.addEventListener('click', onButtonClick);
todoList.addEventListener('click', onTodoListClick);


addTodoItem('1 item');
addTodoItem('2 item');
addTodoItem('3 item');

function onButtonClick() {
    const message = input.value;

    addTodoItem(message);
}

function onTodoListClick(e) {
    const todoItem = getTodoItem(e.target);

    if (todoItem) {
        if (e.target.classList.contains(EDIT_BTN_CLASS)) {
            console.log('edit');
            return;
        }
        if (e.target.classList.contains(DELETE_BTN_CLASS)) {
            console.log('delete');
            return;
        }

        todoItem.classList.toggle('done');
    }
}

function getTodoItem(el) {
    return el.closest(TODO_ITEM_SELECTOR);
}

// function addTodoItem(message) {
//     const li = document.createElement('li');
//     li.classList.add('todoItem');
//     li.textContent = message;
//     li.style.margin = '20px';

//     li.addEventListener('click', (e) => {
//         e.target.classList.toggle('done');
//     });

//     todoList.append(li);
// }

function addTodoItem(message) {
    const todoItemTemplateHTML = generateTodoHtml(message);
    todoList.insertAdjacentHTML('beforeend', todoItemTemplateHTML);
}

function generateTodoHtml(message) {
    return `
        <li class="todoItem">
            <span>${message}</span>
            <button class="editBtn">[Edit]</button>
            <button class="deleteBtn">[Delete]</button>
        </li>
    `;
}