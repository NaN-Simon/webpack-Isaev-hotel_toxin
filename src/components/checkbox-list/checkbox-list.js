/* const checkboxListItemsMarkDownFirst = document.querySelector(".mark-down-second");

let markDownSecondActive = false;
checkboxListItemsMarkDownFirst.addEventListener("click", () => {
  if (markDownSecondActive == false) {
    checkboxListItems.style.display = "flex";
    checkboxListItemsMarkDownFirst.innerHTML = "W";
    markDownSecondActive = true;
  } else if (markDownSecondActive == true) {
    checkboxListItems.style.display = "none";
    checkboxListItemsMarkDownFirst.innerHTML = "M";
    markDownSecondActive = false;
  }
}); */
const checkboxList = document.querySelectorAll('.checkbox-list-header-title')
const checkboxListItems = document.querySelector(".checkbox-list-items");
checkboxList.forEach((element)=>{
  element.addEventListener('click',function(){
		if(element.lastElementChild.innerHTML == 'expand_more'){
			element.lastElementChild.innerHTML = 'expand_less'
		} else {
			element.lastElementChild.innerHTML = 'expand_more'
		}
		element.nextElementSibling.classList.toggle('open')
			})
})