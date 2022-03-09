const dropdownDropGuests = document.querySelector(".dropdown__drop");
toDoList();
function toDoList() {
  let adultNum = 0;
  let childNum = 0;
  let babyNum = 0;
  const adult = toDoPerson("Взрослые", adultNum);
  const child = toDoPerson("Дети", childNum);
  const baby = toDoPerson("Младенцы", babyNum);
  dropdownDropGuests.innerHTML =
    `<div class="dropdown__drop-list">${adult + child + baby}</div>` +
    `<div class="dropdown-drop-item-button icon-click-default">Применить</div>`;

  function toDoPerson(person, num) {
    return `<div class='dropdown__drop-string'><div class = 'dropdown__drop-item tit3'>${person}</div><div class='dropdown__drop-item'><div class='dropdown__drop-change-button tit4'>-</div><div class='tit3'>${num}</div><div class='dropdown__drop-change-button tit4'>+</div></div></div>`;
  }
  
  function listener(){
    const button = document.querySelectorAll(".dropdown__drop-list .dropdown__drop-string .dropdown__drop-item .dropdown__drop-change-button")
    button.forEach(elem=>{
      elem.addEventListener('click',()=>{
        //console.log(elem.parentElement.children[1].innerHTML)
        //console.log(Array.from(elem.parentElement.children).indexOf(elem))
        const currentString = Array.from(elem.parentElement.children)
        if(currentString.indexOf(elem) == 0){console.log('minus',currentString[1].innerHTML = adultNum--)}
        if(currentString.indexOf(elem) == 2){console.log('plus',currentString[1].innerHTML = adultNum++)}
      })
    })
  }
  listener()
}
