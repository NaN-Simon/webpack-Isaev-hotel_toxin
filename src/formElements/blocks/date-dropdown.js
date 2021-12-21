let arrowCustom = document.querySelectorAll(".arrow-custom");
for(let i=0;i<arrowCustom.length;i++){
	
	let subMenu = arrowCustom[i].nextElementSibling;
	let thisArrow = arrowCustom[i];
	
	arrowCustom[i].addEventListener("click",function(){
		subMenu.classList.toggle("open")
		thisArrow.classList.toggle("active")
		})
	}
