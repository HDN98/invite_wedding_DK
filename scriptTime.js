const times1 = document.querySelectorAll('.time1');
const times2 = document.querySelectorAll('.time2');
const times3 = document.querySelectorAll('.time3');
const times4 = document.querySelectorAll('.time4');

const checkBoxes = () => {
	const triger = (window.innerHeight);
	for (const time1 of times1) {
		const topOfBox = time1.getBoundingClientRect().top;
		if (topOfBox <triger) {
			time1.classList.add('show');
			console.log('add show');
		}
	}
}

const checkBoxes2 = () => {
	const triger = (window.innerHeight);
	for (const time2 of times2) {
		const topOfBox = time2.getBoundingClientRect().top;
		if (topOfBox <triger) {
			time2.classList.add('show');
		}
	}
}

const checkBoxes3 = () => {
	const triger = (window.innerHeight);
	for (const time3 of times3) {
		const topOfBox = time3.getBoundingClientRect().top;
		if (topOfBox <triger) {
			time3.classList.add('show');
		}
	}
}

const checkBoxes4 = () => {
	const triger = (window.innerHeight);
	for (const time4 of times4) {
		const topOfBox = time4.getBoundingClientRect().top;
		if (topOfBox <triger) {
			time4.classList.add('show');
		}
	}
}

window.addEventListener('scroll', checkBoxes);
window.addEventListener('scroll', checkBoxes2);
window.addEventListener('scroll', checkBoxes3);
window.addEventListener('scroll', checkBoxes4);