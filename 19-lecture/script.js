const TODO_ITEM_SELECTOR = '.todoItem';
const EDIT_BTN_CLASS = 'editBtn';
const DELETE_BTN_CLASS = 'deleteBtn';

const todoListEL = document.querySelector('#todoList');
const todoForm = document.querySelector('#todoForm');
let todoList = [];

todoForm.addEventListener('submit', onTodoFormSubmit);
todoListEL.addEventListener('click', onTodoListClick);


TodoApi.getList()
    .then((list) => {
        todoList = list;

        renderTodoList(list);
    })
    .catch(showError);


function onTodoFormSubmit(e) {
    e.preventDefault();

    const todo = getTodo();

    // validate todo

    // create or update?
    if (todo.id) {
        TodoApi.update(todo.id, todo)
            .then(TodoApi.getList)
            .then(renderTodoList)
            .then(clearForm)
            .catch(showError);
    } else {
        TodoApi.create(todo)
            .then(newTodo => {
                renderTodoItem(newTodo);
                clearForm();
            })
            .catch(showError);
    }
}

function getTodo() {
    const { id, title } = todoForm.children;
    const todo = todoList.find(todoItem => todoItem.id === id.value) || {};

    return {
        status: false,
        ...todo,
        title: title.value,
    };
}


function onTodoListClick(e) {
    const todoEl = getTodoItem(e.target);
    const id = todoEl.dataset.id;
    const todo = todoList.find(todoItem => todoItem.id === id);

    if (todo) {
        if (e.target.classList.contains(EDIT_BTN_CLASS)) {
            fillForm(todo);
            return;
        }
        if (e.target.classList.contains(DELETE_BTN_CLASS)) {
            TodoApi.delete(id).catch(showError);
            todoEl.remove();
            return;
        }

        TodoApi.update(id, { status: !todo.status })
                .then(() => {
                    todo.status = !todo.status;
                })
                .catch(showError);
        todoEl.classList.toggle('done');
    }
}

function fillForm(todo) {
    const { id, title } = todoForm.children;
    title.value = todo.title;
    id.value = todo.id;
}

function getTodoItem(el) {
    return el.closest(TODO_ITEM_SELECTOR);
}

function renderTodoList(list) {
    const html = list.map(generateTodoHtml).join('');

    todoListEL.innerHTML = html;
}

function renderTodoItem(todo) {
    const todoItemTemplateHTML = generateTodoHtml(todo);

    todoListEL.insertAdjacentHTML('beforeend', todoItemTemplateHTML);
}

function generateTodoHtml(todo) {
    const status = todo.status ? 'done' : '';

    return `
        <li
            class="todoItem ${status}"
            data-id="${todo.id}"
        >
            <span>${todo.title}</span>
            <button class="editBtn">[Edit]</button>
            <button class="deleteBtn">[Delete]</button>
        </li>
    `;
}

function clearForm() {
    todoForm.reset();
}

function showError(e) {
    alert(e.message);
}