const ul = document.querySelector('#todoList');
const input = document.querySelector('#msgInput');
const button = document.querySelector('#msgButton');
const todoItemTemplate = document.querySelector('#todoItemTemplate');

button.addEventListener('click', onButtonClick);

addTodoItem('1 item');

function onButtonClick() {
    const message = input.value;

    addTodoItem(message);
}

// function addTodoItem(message) {
//     const li = document.createElement('li');
//     li.classList.add('todoItem');

//     const span = document.createElement('span');
//     span.textContent = message;

//     const btnEdit = document.createElement('button');
//     btnEdit.textContent = '[Edit]';
//     btnEdit.classList.add('editBtn');

//     const btnDelete = document.createElement('button');
//     btnDelete.textContent = '[Delete]';
//     btnDelete.classList.add('deleteBtn');

//     li.append(span, btnEdit, btnDelete);
//     ul.append(li);
// }

// function addTodoItem(message) {
//     const todoItemTemplateHTML = generateTodoHtml(message);

//     // ul.innerHTML += todoItemTemplateHTML;

//     ul.insertAdjacentHTML('beforeend', todoItemTemplateHTML);
// }

// function generateTodoHtml(message) {
//     return todoItemTemplate.innerHTML.replace('{message}', message);
// }

function addTodoItem(message) {
    const todoItemTemplateHTML = generateTodoHtml(message);
    ul.insertAdjacentHTML('beforeend', todoItemTemplateHTML);
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