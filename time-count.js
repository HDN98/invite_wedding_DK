document.addEventListener('DOMContentLoaded', () => {
	const newYear = new Date('Aug 2 2025 15:30:00');
	
	const daysVal = document.querySelector('.time-count-days .time-count-val');
	const hoursVal = document.querySelector('.time-count-hours .time-count-val');
	const minutesVal = document.querySelector('.time-count-minutes .time-count-val');

	const daysText = document.querySelector('.time-count-days .time-count-text');
	const hoursText = document.querySelector('.time-count-hours .time-count-text');
	const minutesText = document.querySelector('.time-count-minutes .time-count-text');

	function declOfNum(number, titles) {  
		let cases = [2, 0, 1, 1, 1, 2];  
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
	}

	const timeCount = () => {
		let now = new Date();
		let leftUntil = newYear - now;
		
		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;

		daysVal.textContent = days;
		hoursVal.textContent =	hours;
		minutesVal.textContent = minutes;

		daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
		hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
		minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
	};

	timeCount();
	setInterval(timeCount, 1000);
});