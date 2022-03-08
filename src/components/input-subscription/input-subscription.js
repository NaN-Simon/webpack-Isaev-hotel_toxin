let customArrowSub = document.querySelectorAll('.subscription-form .material-icons.arrow_color_blue')
for (let arrow of customArrowSub) {
	arrow.addEventListener('click',()=>{
		sendEmail(event)
	})
}

function sendEmail(event){
	event.preventDefault();
	let email = document.querySelector('.input-email').value
		console.log('sending to server: ' + email)
}