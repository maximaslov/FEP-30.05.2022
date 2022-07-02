const ul = document.querySelector('#todoList');
const input = document.querySelector('#msgInput');
const button = document.querySelector('#msgButton');

button.addEventListener('click', onButtonClick);

addTodoItem('XXX');
addTodoItem('YYY');
addTodoItem('QQQ');

function onButtonClick() {
    const message = getMessage();

    if (!isMessageValid(message)) {
        showError();
        return;
    }

    addTodoItem(message);
    clear();
}



function getMessage() {
    return input.value;
}

function isMessageValid(message) {
    return message.trim() !== '';
}

function showError() {
    alert('Поле сообщение не должно быть пустым');
}

function addTodoItem(message) {
    const li = document.createElement('li');

    li.textContent = message;
    ul.append(li);
}

function clear() {
    input.value = '';
}