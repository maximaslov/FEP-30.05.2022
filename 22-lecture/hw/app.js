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
const $noteList = $(LIST_SELECTOR)
  .on('click', DELETE_NOTE_SELECTOR, onDeleteClick)
  .on('focusout', EDIT_NOTE_CONTROL_SELECTOR, onStickerFocusout)

$(ADD_NOTE_SELECTOR).on('click', onAddNoteBtnClick);

StickerApi.getList()
  .then((list) => {
    notesList = list;

    renderStickers(list);
  })

function onDeleteClick() {
  const id = getElementId($(this)); // $(e.target)

  deleteSticker(id);
}

function onStickerFocusout() {
  const $input = $(this);
  const id = getElementId($input);
  const changes = {
    description: $input.val(),
  };

  updateSticker(id, changes);
}

function onAddNoteBtnClick(e) {
  const sticker = getSticker();

  StickerApi
    .create(sticker)
    .then((newSticker) => {
      renderSticker(newSticker);
    })
}

function getSticker() {
  return EMPTY_NOTE;
}

function renderStickers(stickers) {
  const htmlArr = stickers.map(generateStickerHtml);

  $noteList.append(htmlArr);
}

function renderSticker(sticker) {
  const html = generateStickerHtml(sticker);

  $noteList.append(html);
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

      Object.keys(changes).forEach(key => sticker[key] = changes[key]);
    })
}