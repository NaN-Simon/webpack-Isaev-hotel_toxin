let customArrowSub = document.querySelectorAll('.input-subscription-arrow-custom')
for (let arrow of customArrowSub) {
	arrow.addEventListener('click',function(){
		let email = document.querySelector('.input-email').value
		console.log('sending to server: ' + email)
	})
}