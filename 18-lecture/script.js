// https://shop.com/users/123/books/42/author/Jak-London URI params

// Query string
// https://shop.com/users?id=123&bookId=42
// https://shop.com/users?year=2022&limit=10&sort=name&order=desc

// CRUD
// - Create (POST)
// - Retrieve (GET)
//     - List
//     - One
// - Update (PUT, PATCH)
// - Delete (DELETE)

// fetch('https://62054479161670001741b708.mockapi.io/api/todo/', { method: 'GET' });
// fetch('https://62054479161670001741b708.mockapi.io/api/todo/', { method: 'POST' });
// fetch('https://62054479161670001741b708.mockapi.io/api/todo/', { method: 'PUT' });
// fetch('https://62054479161670001741b708.mockapi.io/api/todo/', { method: 'DELETE' });

const URL = 'https://62054479161670001741b708.mockapi.io/api/todo/';
const TODO_ITEM_SELECTOR = '.todoItem';
const EDIT_BTN_CLASS = 'editBtn';
const DELETE_BTN_CLASS = 'deleteBtn';

const todoList = document.querySelector('#todoList');
const input = document.querySelector('#title');
const todoForm = document.querySelector('#todoForm');

todoForm.addEventListener('submit', onTodoFormSubmit);
todoList.addEventListener('click', onTodoListClick);


// renderTodoItem({"title":"sapiente aspernatur dignissimos","status":false,"id":"87"});
// renderTodoItem({"title":"quos accusantium velit","status":true,"id":"90"});
// renderTodoItem({"title":"repellendus ipsum modi","status":false,"id":"92"});

getTodoList().then(renderTodoList);


function onTodoFormSubmit(e) {
    e.preventDefault();

    const todo = getTodo();

    // validate todo

    createTodo(todo)
        .then(newTodo => {
            renderTodoItem(newTodo);
            clearForm();
        });
}

function getTodo() {
    return {
        title: input.value,
        status: false,
        // id: "109"
    };
}

function getTodoList() {
    return fetch(URL).then(res => res.json());
}

function createTodo(todo) {
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json',
        },
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }

        throw new Error('Can not create new todo');
    });
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

function renderTodoList(list) {
    const html = list.map(generateTodoHtml).join('');

    todoList.insertAdjacentHTML('beforeend', html);
}

function renderTodoItem(todo) {
    const todoItemTemplateHTML = generateTodoHtml(todo);

    todoList.insertAdjacentHTML('beforeend', todoItemTemplateHTML);
}

function generateTodoHtml(todo) {
    const status = todo.status ? 'done' : '';

    return `
        <li class="todoItem ${status}">
            <span>${todo.title}</span>
            <button class="editBtn">[Edit]</button>
            <button class="deleteBtn">[Delete]</button>
        </li>
    `;
}

function clearForm() {
    todoForm.reset();
}