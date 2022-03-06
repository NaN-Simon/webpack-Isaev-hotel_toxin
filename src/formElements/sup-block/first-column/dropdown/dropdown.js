const dropdownList = document.querySelectorAll(".dropdown-list");
const subDropdownList = document.querySelector(".sub-dropdown-list");
const dropdownExpand = document.querySelector('.dropdown ul span.material-icons');
dropdownList.forEach((element)=>{
  element.addEventListener('click',function(){
    subDropdownList.classList.toggle("open")
    if(dropdownExpand.innerHTML == 'expand_more'){
      dropdownExpand.innerHTML = 'expand_less'
    } else {
      dropdownExpand.innerHTML = 'expand_more'
    }
  })
})


const subDropdownLink = document.querySelectorAll(".sub-dropdown__link");

subDropdownLink.forEach((element) => {
  element.addEventListener("click", function () {
    document.querySelector(".dropdown__link").innerHTML = element.textContent;
  });
});