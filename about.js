console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted Successfully')
	// console.log('form submit');
}

const cheekyDuck = (evt) => {
	evt.preventDefault();

	alert('Hey good lookin! >.<')
}


let form = document.querySelector('#contact');
const ducky = document.querySelector('#ducky')

form.addEventListener('submit', handleSubmit);
ducky.addEventListener('mouseover', cheekyDuck)