const dropdownDropGuests = document.querySelector(".dropdown__drop");
toDoList();
function toDoList() {
  const firstPerson ="Взрослые";
  const secondPerson ="Дети";
  const thirdPerson ="Младенцы";
  let adultNum = 2;
  let childNum = 0;
  let babyNum = 0;
  let sumPerson = 0;
  const adult = toDoPerson(firstPerson, adultNum);
  const child = toDoPerson(secondPerson, childNum);
  const baby = toDoPerson(thirdPerson, babyNum);
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
        const currentString = Array.from(elem.parentElement.children)
        const currentPlace = elem.parentNode.parentNode.children[0].innerHTML
        if(currentString.indexOf(elem) == 0){
          if(currentString[1].innerHTML != 0){
            currentString[1].innerHTML = Number(currentString[1].innerHTML)-1
            if(currentPlace==firstPerson){adultNum = Number(currentString[1].innerHTML)}
            if(currentPlace==secondPerson){childNum = Number(currentString[1].innerHTML)}
            if(currentPlace==thirdPerson){babyNum = Number(currentString[1].innerHTML)}
          }
        }
        if(currentString.indexOf(elem) == 2){
          if(currentString[1].innerHTML != 10){
            currentString[1].innerHTML = Number(currentString[1].innerHTML)+1
            if(currentPlace==firstPerson){adultNum = Number(currentString[1].innerHTML)}
            if(currentPlace==secondPerson){childNum = Number(currentString[1].innerHTML)}
            if(currentPlace==thirdPerson){babyNum = Number(currentString[1].innerHTML)}
          }
        }
        sumPerson = adultNum+childNum+babyNum
        let dropDownTitle = document.querySelector(".form-elements__dropdowns-wrapper .form-elements__dropdowns-container .dropdown-new.tit4");
        let showNumPerson = ""
        if (sumPerson==0){dropDownTitle.innerHTML = "Сколько гостей"}
        if (sumPerson==1 || sumPerson==21){dropDownTitle.innerHTML = sumPerson+" гость"}
        if (sumPerson >=2 && sumPerson <=4 ||sumPerson >=22 && sumPerson <=24){dropDownTitle.innerHTML = sumPerson+" гостя"}
        if (sumPerson >=5 && sumPerson <=20 ||sumPerson >=25 && sumPerson <=30){dropDownTitle.innerHTML = sumPerson+" гостей"}
      })
    })
  }
  listener()
}
/*hide button*/
const dropdownGuests = document.querySelector('.form-elements__dropdowns-container .dropdown__button-area')
dropdownGuests.addEventListener('click',()=>{
  dropdownDropGuests.classList.toggle('open')
  document.querySelector('.dropdown-new').classList.toggle('disable-border-botton')
})