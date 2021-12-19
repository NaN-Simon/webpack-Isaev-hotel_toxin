import "./styles/index.scss";

// Dropdown
let arrow = document.querySelectorAll(".arrow");
for (let i = 0; i < arrow.length; i++) {
  let thisLink = arrow[i].previousElementSibling;
  let subMenu = arrow[i].nextElementSibling;
  let thisArrow = arrow[i];
  thisLink.classList.add("parent");
  arrow[i].addEventListener("click", function () {
    subMenu.classList.toggle("open");
    thisArrow.classList.toggle("active");
  });
}

let listElem = document.querySelector(".menu__link");
let detectedList = listElem.textContent;

let mainElement = document.querySelector(".menu__link");
let selectedElem = mainElement.textContent;
let subLinkElem = document.querySelectorAll(".sub-menu__link");
for (let i = 0; i < subLinkElem.length; i++) {
  let selectedGuest = subLinkElem[i].textContent;

  subLinkElem[i].addEventListener("click", function () {
    document.querySelector(".menu__link").innerHTML = selectedGuest;
  });
}

/* DateDrop */
let DateDropArrow = document.querySelectorAll(".customArrow");
for(let i=0;i<DateDropArrow.length;i++){
	
	let subMenu = DateDropArrow[i].nextElementSibling;
	let thisArrow = DateDropArrow[i];
	
	DateDropArrow[i].addEventListener("click",function(){
		subMenu.classList.toggle("open")
		thisArrow.classList.toggle("active")
		})
	}
