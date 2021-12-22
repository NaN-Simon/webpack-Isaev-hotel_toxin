
// Dropdown-buttons

let bedroomCounterMinus = document.querySelector(".bedroom.counter-minus");
let bedroomCounterPlus = document.querySelector(".bedroom.counter-plus");
let bedroomCounterEquals = document.querySelector(".bedroom.counter-equals");
let bedCounterMinus = document.querySelector(".bed.counter-minus");
let bedCounterPlus = document.querySelector(".bed.counter-plus");
let bathroomCounterMinus = document.querySelector(".bathroom.counter-minus");
let bathroomCounterPlus = document.querySelector(".bathroom.counter-plus");

let counterEqualsRoom = 1;
let counterEqualsBed = 1;
let counterEqualsBathroom = 1;

function letsEvent(param, symvol) {
  if (param == "bedroom") {
    if (symvol == "plus" && counterEqualsRoom != 99) {
      counterEqualsRoom++;
      document.querySelector(`.${param}.counter-equals`).innerHTML = counterEqualsRoom;
    } else if (symvol == "minus" && counterEqualsRoom != 1) {
      counterEqualsRoom--;
      document.querySelector(`.${param}.counter-equals`).innerHTML = counterEqualsRoom;
			if (counterEqualsRoom == 1) {console.log("тут будет значение 1 спальня")};
			showParam()
    }
  } else if (param == "bed") {
    if (symvol == "plus" && counterEqualsBed != 99) {
      counterEqualsBed++;
      document.querySelector(`.${param}.counter-equals`).innerHTML = counterEqualsBed;
    } else if (symvol == "minus" && counterEqualsBed != 1) {
      counterEqualsBed--;
      document.querySelector(`.${param}.counter-equals`).innerHTML =
        counterEqualsBed;
    }
  } else if (param == "bathroom") {
    if (symvol == "plus" && counterEqualsBathroom != 99) {
      counterEqualsBathroom++;
      document.querySelector(`.${param}.counter-equals`).innerHTML =
        counterEqualsBathroom;
    } else if (symvol == "minus" && counterEqualsBathroom != 1) {
      counterEqualsBathroom--;
      document.querySelector(`.${param}.counter-equals`).innerHTML =
        counterEqualsBathroom;
    }
  }
}

bedroomCounterPlus.addEventListener("click",function() {
	letsEvent("bedroom","plus");
	showParam();
})
bedroomCounterMinus.addEventListener("click", function () {
  letsEvent("bedroom", "minus");
	showParam();
});
bedCounterPlus.addEventListener("click", function () {
  letsEvent("bed", "plus");
	showParam();
});
bedCounterMinus.addEventListener("click", function () {
  letsEvent("bed", "minus");
	showParam();
});
bathroomCounterPlus.addEventListener("click", function () {
  letsEvent("bathroom", "plus");
});
bathroomCounterMinus.addEventListener("click", function () {
  letsEvent("bathroom", "minus");
});

// DropdownLink

let dropdownLink = document.querySelector(".dropdown-expanded__link");
let globalResult = "";
let resultRoom = "";
let resultBed = "";

function showParam() {
  if (counterEqualsRoom >= 0) {
    resultRoom = counterEqualsRoom + " cпальни, ";
  }
  if (counterEqualsBed >= 0) {
    resultBed = counterEqualsBed + " кровати... ";
  }
	globalResult = resultRoom+resultBed;
  dropdownLink.innerHTML = globalResult;
}
