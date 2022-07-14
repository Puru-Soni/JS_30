const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
	const current = new Date();

	const sec = (current.getSeconds() / 60) * 360 + 90; // converting 1-60 sec in 0-360 degress
	secHand.style.transform = `rotate(${sec}deg)`;

	const min = (current.getMinutes() / 60) * 360 + 90;
	minHand.style.transform = `rotate(${min}deg)`;

	const hour = (current.getHours() / 12) * 360 + 90;
	hourHand.style.transform = `rotate(${hour}deg)`;
}

setInterval(setTime, 1000);
