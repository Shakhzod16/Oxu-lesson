// Burger yaratish
const burger = document.createElement('div');
burger.classList.add('burger');
burger.innerHTML = `<div></div><div></div><div></div>`;
document.querySelector('.nav').appendChild(burger);

// Nav linklarini burger pastida yaratish
const nav = document.createElement('div');
nav.classList.add('nav-links');

// Original .text1 linklarini olamiz
const textLinks = document.querySelectorAll('.nav .text1 a');
textLinks.forEach(link => {
	const a = document.createElement('a');
	a.href = link.href;
	a.textContent = link.textContent;
	nav.appendChild(a);
});

document.querySelector('.nav').appendChild(nav);

// Burger click animatsiyasi
burger.addEventListener('click', () => {
	nav.classList.toggle('active');
	burger.classList.toggle('toggle');
});
