// Boshlang'ich vaqtni olamiz (kun, soat, daqiqa, soniya)
let days = 3;
let hours = 23;
let minutes = 19;
let seconds = 56;

// Elementlarni olish
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateTimer() {
	if (seconds > 0) {
		seconds--;
	} else {
		if (minutes > 0) {
			minutes--;
			seconds = 59;
		} else {
			if (hours > 0) {
				hours--;
				minutes = 59;
				seconds = 59;
			} else {
				if (days > 0) {
					days--;
					hours = 23;
					minutes = 59;
					seconds = 59;
				} else {
					// Vaqt tugadi
					clearInterval(timerInterval);
					document.querySelector('.time-detail').innerHTML = "<p style='font-size: 24px; color: red;'>Vaqt tugadi!</p>";
					return;
				}
			}
		}
	}

	// Elementlarni yangilash, 2 xonali qilib ko'rsatamiz
	daysEl.textContent = String(days).padStart(2, '0');
	hoursEl.textContent = String(hours).padStart(2, '0');
	minutesEl.textContent = String(minutes).padStart(2, '0');
	secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Dastlab bir marta ko'rsatamiz
updateTimer();

// Har sekundda yangilaymiz
const timerInterval = setInterval(updateTimer, 1000);
