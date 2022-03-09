const dropdownDropGuests = document.querySelector(".dropdown__drop");
toDoList();
function toDoList() {
  let adult = toDoPerson("Взрослые", 0);
  let child = toDoPerson("Дети", 0);
  let baby = toDoPerson("Младенцы", 0);
  dropdownDropGuests.innerHTML =
    `<div class="dropdown__drop-list">${adult + child + baby}</div>` +
    `<div class="dropdown-drop-item-button icon-click-default">Применить</div>`;

  function toDoPerson(person, num) {
    return `<div class='dropdown__drop-string'><div class = 'dropdown__drop-item tit3'>${person}</div><div class='dropdown__drop-item'><div class='dropdown_drop-change-button tit4'>-</div><div class='tit3'>${num}</div><div class='dropdown_drop-change-button '>+</div></div></div>`;
  }
}
