const checkboxListItemsMarkDownFirst =
  document.querySelector(".mark-down-second");
const checkboxListItems = document.querySelector(".checkbox-list-items");
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
});
