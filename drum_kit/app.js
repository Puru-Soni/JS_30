window.addEventListener("keydown", playSound);

function playSound(ev) {
	// console.log(ev);
	const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);

	if (!audio) return; // Stops the funcition
	audio.currentTime = 0; // rewinds audio to the start
	audio.play();

	key.classList.add("playing");
}

function removeTransition(ev){
	// console.log(ev);
	if (ev.propertyName != "transform") return;
	this.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
	key.addEventListener("transitionend", removeTransition);
});
