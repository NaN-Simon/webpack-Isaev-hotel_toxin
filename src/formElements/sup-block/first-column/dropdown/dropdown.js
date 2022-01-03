const dropdownArrow = document.querySelector(".dropdown-arrow");
const dropdownAddOpen = dropdownArrow.nextElementSibling;
dropdownArrow.addEventListener("click", function () {
  dropdownAddOpen.classList.toggle("open");
});

const subDropdownLink = document.querySelectorAll(".sub-dropdown__link");
for (let i = 0; i < subDropdownLink.length; i++) {
  let selectGuest = subDropdownLink[i].textContent;

  subDropdownLink[i].addEventListener("click", function () {
    document.querySelector(".dropdown__link").innerHTML = selectGuest;
  });
}
