const dateDropdownList = document.querySelectorAll(".date-dropdown-list");
const subDateDropdownList = document.querySelectorAll('.sub-date-dropdown-list')

dateDropdownList.forEach((element)=>{
	element.addEventListener('click',function(){
		if(element.lastElementChild.innerHTML == 'expand_more'){
			element.lastElementChild.innerHTML = 'expand_less'
		} else {
			element.lastElementChild.innerHTML = 'expand_more'
		}
		element.nextElementSibling.classList.toggle('open')
			})
		})

