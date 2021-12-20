import "./styles/index.scss";

// Dropdown
let dropdownArrow = document.querySelectorAll(".dropdown-arrow");
for (let i = 0; i < dropdownArrow.length; i++) {
  let thisLink = dropdownArrow[i].previousElementSibling;
  let subMenu = dropdownArrow[i].nextElementSibling;
  let thisArrow = dropdownArrow[i];
  thisLink.classList.add("parent");
  dropdownArrow[i].addEventListener("click", function () {
    subMenu.classList.toggle("open");
    thisArrow.classList.toggle("active");
  });
}

let listElem = document.querySelector(".dropdown__link");
let detectedList = listElem.textContent;

let mainElement = document.querySelector(".dropdown__link");
let selectedElem = mainElement.textContent;
let subLinkElem = document.querySelectorAll(".sub-dropdown__link");
for (let i = 0; i < subLinkElem.length; i++) {
  let selectedGuest = subLinkElem[i].textContent;

  subLinkElem[i].addEventListener("click", function () {
    document.querySelector(".dropdown__link").innerHTML = selectedGuest;
  });
}

/* DateDrop */
let arrowCustom = document.querySelectorAll(".arrow-custom");
for(let i=0;i<arrowCustom.length;i++){
	
	let subMenu = arrowCustom[i].nextElementSibling;
	let thisArrow = arrowCustom[i];
	
	arrowCustom[i].addEventListener("click",function(){
		subMenu.classList.toggle("open")
		thisArrow.classList.toggle("active")
		})
	}

  /* Subscription */
let customArrowSub = document.querySelectorAll('.input-subscription-arrow-custom')
for (let arrow of customArrowSub) {
	arrow.addEventListener('click',function(){
		let email = document.querySelector('.input-email').value
		console.log('sending to server: ' + email)
	})
}