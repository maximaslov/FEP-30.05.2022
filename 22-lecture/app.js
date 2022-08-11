const DELETE_NOTE_SELECTOR = '.delete-note';
const EDIT_NOTE_CONTROL_SELECTOR = '.edit-note-control';
const NOTE_ITEM_SELECTOR = '.note';
const TEMPLATE_SELECTOR = '#noteTemplate';
const LIST_SELECTOR = '#list';
const ADD_NOTE_SELECTOR = '#addNoteBtn';
const DRAGGABLE_SELECTOR = '.draggable-note';
const MODAL_SELECTOR = '#noteModal';
const EDIT_SELECTOR = '.edit-note';

const noteTemplate = $(TEMPLATE_SELECTOR).html();
const EMPTY_NOTE = {
  description: '',
  height: 150,
  width: 250,
  id: '',
};
let notesList = [];

$(ADD_NOTE_SELECTOR).on('click', onAddNoteBtnClick);

const $noteList = $(LIST_SELECTOR)
  .on('click', DELETE_NOTE_SELECTOR, onDeleteClick)
  .on('click', EDIT_SELECTOR, onEditClick)
  .on('focusout', EDIT_NOTE_CONTROL_SELECTOR, onStickerFocusout)

const $form = $(`${MODAL_SELECTOR} form`)[0];
const $modal = $(MODAL_SELECTOR).dialog({
  autoOpen: false,
  modal: true,
  show: {
    effect: "blind",
    duration: 1000
  },
  hide: {
    effect: "explode",
    duration: 1000
  },
  buttons: {
    Save: () => {
      const sticker = getSticker();

      if (sticker.id) {
        updateSticker(sticker.id, sticker);
      } else {
        createSticker(sticker);
      }

      closeModal();
    },
    Cancel: closeModal
  },
  close: closeModal
})

function openModal(sticker) {
  fillForm(sticker);
  $modal.dialog('open');
}

function closeModal() {
  $modal.dialog('close');
}

function fillForm(sticker) {
  $form.id.value = sticker.id;
  $form.description.value = sticker.description;
}

function getSticker() {
  return {
    ...EMPTY_NOTE,
    id: $form.id.value,
    description: $form.description.value,
  };
}

StickerApi.getList()
  .then((list) => {
    notesList = list;

    renderStickers(list);
  })

function onAddNoteBtnClick(e) {
  openModal(EMPTY_NOTE);
}

function onDeleteClick() {
  const id = getElementId($(this)); // $(e.target)

  deleteSticker(id);
}

function onEditClick() {
  const id = getElementId($(this));
  const sticker = notesList.find(item => item.id === id);

  openModal(sticker);
}

function onStickerFocusout() {
  const $input = $(this);
  const id = getElementId($input);
  const changes = {
    description: $input.val(),
  };

  updateSticker(id, changes);
}

function renderStickers(stickers) {
  const $stickers = stickers.map(generateStickerEl);

  $noteList.append($stickers);
}

function renderSticker(sticker) {
  const $sticker = generateStickerEl(sticker);

  $noteList.append($sticker);
}

function generateStickerEl(sticker) {
  const $sticker = $(generateStickerHtml(sticker));

  $sticker
    .css({
      width: sticker.width,
      height: sticker.height,
      top: sticker.top,
      left: sticker.left,
    })
    .draggable({
      handle: DRAGGABLE_SELECTOR,
      stop: (event, ui) => updateSticker(sticker.id, ui.position),
    })
    .resizable({
      stop: (event, ui) => updateSticker(sticker.id, ui.size),
    });

  return $sticker;
}

function generateStickerHtml(sticker) {
  return noteTemplate
    .replace('{{id}}', sticker.id)
    .replace('{{description}}', sticker.description)
}

function getElementId($el) {
  const $sticker = getStickerEl($el);

  return String($sticker.data('id'));
}

function getStickerEl($el) {
  return $el.closest(NOTE_ITEM_SELECTOR);
}

function findStickerElById(id) {
  return $noteList.find(`[data-id="${id}"]`);
}

function createSticker(sticker) {
  StickerApi
    .create(sticker)
    .then((newSticker) => {
      renderSticker(newSticker);
      notesList.push(newSticker);
    })
}

function deleteSticker(id) {
  StickerApi.delete(id)
    .then(() => {
      const $sticker = findStickerElById(id);
      notesList = notesList.filter(item => item.id !== id);

      $sticker.remove();
    })
}

function updateSticker(id, changes) {
  StickerApi.update(id, changes)
    .then(() => {
      const sticker = notesList.find(item => item.id === id);
      const $sticker = findStickerElById(id);

      Object.keys(changes).forEach(key => sticker[key] = changes[key]);

      $sticker.replaceWith(generateStickerEl(sticker));
    })
}