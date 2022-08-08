const TODO_ITEM_SELECTOR = '.todoItem';
const EDIT_BTN_CLASS = 'editBtn';
const DELETE_BTN_CLASS = 'deleteBtn';

const $todoListEL = $('#todoList');
const $todoForm = $('#todoForm');
let todoList = [];
let editingTodoId = null;

$todoForm.on('submit', onTodoFormSubmit);

$todoListEL.on('click', '.' + EDIT_BTN_CLASS , onEditBtnClick);
$todoListEL.on('click', '.' + DELETE_BTN_CLASS ,onDeleteBtnClick);
$todoListEL.on('click', TODO_ITEM_SELECTOR ,onTodoElClick);


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
    const inputs = $todoForm.serializeArray();
    let todo = {
        status: false,
    };

    if (editingTodoId) {
        const currentTodo = todoList
          .find(todoItem => todoItem.id === editingTodoId) || {};

        todo = {
            ...todo,
            ...currentTodo,
        };
    }

    inputs.forEach(field => {
        todo[field.name] = field.value;
    })

    return todo;
}


function onEditBtnClick(e) {
    const todoEl = getTodoItem($(e.target));
    const id = todoEl.data('id').toString(); // dataset
    const todo = todoList.find(todoItem => todoItem.id === id);

    fillForm(todo);
    editingTodoId = id;
}

function onDeleteBtnClick(e) {
    const todoEl = getTodoItem($(e.target)); // DOM Object -> JQuery Collection
    const id = todoEl.dataset.id;
    const todo = todoList.find(todoItem => todoItem.id === id);

    TodoApi.delete(id).catch(showError);
    todoEl.remove();
}

function onTodoElClick(e) {
    const $todoEl = getTodoItem($(e.target));
    const id = $todoEl.dataset.id;
    const todo = todoList.find(todoItem => todoItem.id === id);

    TodoApi.update(id, { status: !todo.status })
      .then(() => {
          todo.status = !todo.status;
      })
      .catch(showError);
    $todoEl.toggleClass('done'); // classList
}

function fillForm(todo) {
    const { id, title } = $todoForm[0].children;
    title.value = todo.title;
    id.value = todo.id;
}

function getTodoItem($el) {
    return $el.closest(TODO_ITEM_SELECTOR);
}

function renderTodoList(list) {
    const html = list.map(generateTodoHtml).join('');

    $todoListEL.html(html); // innerHtml
}

function renderTodoItem(todo) {
    const html = generateTodoHtml(todo);

    $todoListEL.append(html);
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
    $todoForm[0].reset();
}

function showError(e) {
    alert(e.message);
}