const EDIT_BTN_CLASS = 'editBtn';
const DELETE_BTN_CLASS = 'deleteBtn';
const CONTACT_ITEM_SELECTOR = '.contactItem';

const contactForm = document.querySelector('#newContactForm');
const inputs = document.querySelectorAll('.form-input');
const contactTemplate = document.querySelector('#contactTemplate').innerHTML;
const contactList = document.querySelector('#contactList');

contactForm.addEventListener('submit', onContactFormSubmit);
contactList.addEventListener('click', onContactListClick);

addContactItem({ name: 'John', surname: 'Smith', phone: '6666'});
addContactItem({ name: 'Harry', surname: 'Potter', phone: '8888'});


// 1. Событие сохранить
// 2. Получить данные
// 3. Провалидировать
// 4. Добавить новый контакт
// 5. Очистить форму
function onContactFormSubmit(e) {
    e.preventDefault()

    const contact = getContact();

    if (!isValidContact(contact)) {
        showError();
        return;
    }

    addContactItem(contact);
    clearForm();
}

function onContactListClick(e) {
    const classList = e.target.classList;

    if (classList.contains(EDIT_BTN_CLASS)) {
        const contactItem = getContactItem(e.target);

        contactItem.style.color = 'red';
    }
    if (classList.contains(DELETE_BTN_CLASS)) {
        e.target.closest(CONTACT_ITEM_SELECTOR).remove()
    }
}

function getContactItem(element) {
  return element.closest(CONTACT_ITEM_SELECTOR);
}

function getContact() {
    const contact = {};

    for (const input of inputs) {
        contact[input.name] = input.value;
    }

    return contact;
}

function isValidContact(contact) {
    return isNotEmptyString(contact.name)
    && isNotEmptyString(contact.surname)
    && isPhone(contact.phone);
}

function isNotEmptyString(str) {
    return str !== '';
}

function isPhone(phone) {
    return isNotEmptyString(phone) && !isNaN(phone);
}

function showError() {
    alert('Some field error');
}

function addContactItem(contact) {
    const html = generateContactHtml(contact);

    contactList.insertAdjacentHTML('beforeend', html);
}

function generateContactHtml(contact) {
    return contactTemplate
        .replace('{name}', contact.name)
        .replace('{surname}', contact.surname)
        .replace('{phone}', contact.phone);
}

function clearForm() {
    contactForm.reset();
}