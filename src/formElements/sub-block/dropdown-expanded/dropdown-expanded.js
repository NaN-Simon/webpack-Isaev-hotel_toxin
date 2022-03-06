let dropdownExpandLink = document.querySelectorAll(".dropdown-expand__link");
dropdownExpandLink.forEach((element)=>{
  element.addEventListener('click',function(){
    document.querySelector('.dropdown ul.dropdown-expand-list ul.sub-dropdown-expand-list').classList.toggle("open")
    if(element.lastElementChild.innerHTML == 'expand_more'){
			element.lastElementChild.innerHTML = 'expand_less'
		} else {
			element.lastElementChild.innerHTML = 'expand_more'
		}
  })
})
/* let dropdownExpendAddOpen = dropdownExpendArrow.nextElementSibling; */
/* dropdownExpendArrow.addEventListener("click", function () {
  dropdownExpendAddOpen.classList.toggle("open");
}); */
/* console.log(dropdownExpandList) */

// Dropdown-buttons

// // Bedroom
const bedroomCounterMinus = document.querySelector(".bedroom.counter-minus");
const bedroomCounterPlus = document.querySelector(".bedroom.counter-plus");
let bedroomCounterEquals = 2;
let lineBedroom = document.querySelector(".dropdown__link-line1");

bedroomCounterPlus.addEventListener("click", function () {
  toggleBedroom("plus");
  if (bedroomCounterEquals > 1) {
    lineBedroom.innerHTML = bedroomCounterEquals + " cпальни";
    bedroomCounterMinus.classList.remove("op50");
  }
});
bedroomCounterMinus.addEventListener("click", function () {
  toggleBedroom();
  if (bedroomCounterEquals <= 1) {
    lineBedroom.innerHTML = bedroomCounterEquals + " cпальня";
    bedroomCounterMinus.classList.add("op50");
  }
});

function toggleBedroom(sign) {
  if (sign == "plus" && bedroomCounterEquals < 10) {
    bedroomCounterEquals++;
  } else if (bedroomCounterEquals > 1) {
    bedroomCounterEquals--;
  }
  document.querySelector(`.bedroom.counter-equals`).innerHTML =
    bedroomCounterEquals;
}

// // Bed
const bedCounterMinus = document.querySelector(".bed.counter-minus");
const bedCounterPlus = document.querySelector(".bed.counter-plus");
let bedCounterEquals = 2;
let lineBed = document.querySelector(".dropdown__link-line2");
bedCounterPlus.addEventListener("click", function () {
  toggleBed("plus");
  if (bedCounterEquals > 1) {
    lineBed.innerHTML = bedCounterEquals + " кровати..";
    bedCounterMinus.classList.remove("op50");
  }
});
bedCounterMinus.addEventListener("click", function () {
  toggleBed();
  if (bedCounterEquals <= 1) {
    lineBed.innerHTML = bedCounterEquals + " кровать..";
    bedCounterMinus.classList.add("op50");
  }
});

function toggleBed(sign) {
  if (sign == "plus" && bedCounterEquals < 10) {
    bedCounterEquals++;
  } else if (bedCounterEquals > 1) {
    bedCounterEquals--;
  }
  document.querySelector(`.bed.counter-equals`).innerHTML = bedCounterEquals;
}

// // Bathroom
const bathroomCounterMinus = document.querySelector(".bathroom.counter-minus");
const bathroomCounterPlus = document.querySelector(".bathroom.counter-plus");
let bathroomCounterEquals = 0;
bathroomCounterPlus.addEventListener("click", function () {
  toggleBathroom("plus");
  bathroomCounterMinus.classList.remove("op50");
});
bathroomCounterMinus.addEventListener("click", function () {
  toggleBathroom();
  if (bathroomCounterEquals == 0) {
    bathroomCounterMinus.classList.add("op50");
  }
});

function toggleBathroom(sign) {
  if (sign == "plus" && bathroomCounterEquals < 10) {
    bathroomCounterEquals++;
  } else if (bathroomCounterEquals > 0) {
    bathroomCounterEquals--;
  }
  document.querySelector(`.bathroom.counter-equals`).innerHTML =
    bathroomCounterEquals;
}
