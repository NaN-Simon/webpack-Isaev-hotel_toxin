const dropdownArrow = document.querySelector(".dropdown-arrow");
const subDropdownList = document.querySelector(".sub-dropdown-list");
dropdownArrow.addEventListener("click", function () {
  subDropdownList.classList.toggle("open");
});

const subDropdownLink = document.querySelectorAll(".sub-dropdown__link");

subDropdownLink.forEach((element) => {
  element.addEventListener("click", function () {
    document.querySelector(".dropdown__link").innerHTML = element.textContent;
  });
});