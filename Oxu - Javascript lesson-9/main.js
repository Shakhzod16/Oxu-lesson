// 🧩 DOM Mavzusi

// 🔍 Muhim DOM metodlari:
// Metod	Tavsif
// document.getElementById("id")	ID orqali elementni topadi
// document.querySelector("selector")	CSS selector orqali elementni topadi
// document.querySelectorAll("selector")	Bir nechta elementni tanlaydi (NodeList qaytaradi)
// element.textContent	Element ichidagi matnni olish yoki o‘zgartirish
// element.innerHTML	Element ichidagi HTML kodni olish yoki o‘zgartirish
// element.style.property	Elementning CSS xususiyatini o‘zgartiradi
// addEventListener("event", function)	Hodisaga (masalan, bosish) javob beradi

// =======================================

// 🧠 Eslab qolish uchun:

// document — butun HTML sahifani bildiradi.

// getElementById, querySelector — sahifadagi elementni topish uchun.

// addEventListener — foydalanuvchi harakatlariga (click, input, hover) javob berish uchun.
// ========================================
// let a = document.getElementById('text');
// let b = document.getElementsByClassName('text');
// let c = document.getElementsByTagName('h1');
// let e = document.querySelectorAll('.text');
// let d = document.querySelector('h1').textContent;
// document.querySelector('h1').innerText = 'salom dunyo';
// console.log(c);
// ======================================
// 🔹 Kod:

// const myElement = document.querySelector('.myDiv');
// myElement.innerHTML = '<h1> New Heading</h1><p> Some new text.</p>';

// =============================================

// onclick — bu hodisa (event) bo‘lib, foydalanuvchi elementni bosganda (click) bajariladigan funksiyani ishga tushiradi.

// let box = document.querySelector('.box');

// alert(box.innerText);
// alert(box.innerHTML);

// ==================================

// let a = document.querySelector('button');

// a.addEventListener('mouseout', function () {
// 	document.querySelector('h1').innerText = 'Salom';
// });

// Dom ga oid masalalar

// 1 - masala

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
// 	document.querySelector('h1').innerText = 'salom';
// });
// btn.addEventListener('dblclick', function () {
// 	document.querySelector('h1').innerText = 'qayta bosilsin';
// });

// 3 - masala

// let text = document.querySelector('p');

// text.addEventListener('mouseover', function () {
// 	document.querySelector('p').innerText = 'Siz matn ustidasiz';
// });

// text.addEventListener('mouseout', function () {
// 	document.querySelector('p').innerText = 'Matndan chiqdingiz';
// });

// 4 - masala

// let text = document.querySelector('div')

// text.addEventListener('mousemove', function () {
// document.querySelector('div').innerText = `Harakatlar soni : ${div} `;
// });

// let text = document.querySelector('div');
// let count = 0;

// text.addEventListener('mousemove', function () {
// 	count++;
// 	text.innerText = `Harakatlar soni: ${count}`;
// });

// 7 - masala

// let text = document.querySelector('div');

// text.addEventListener('mousedown', function () {
// 	document.querySelector('div').innerText = 'bosildi';
// });

// text.addEventListener('mouseup', function () {
// 	document.querySelector('div').innerText = "qo'yib yuborildi";
// });

// 8 - masala

// const text1 = document.querySelector('div');
// const text2 = document.querySelector('ul');

// text1.addEventListener('mouseover', function () {
// 	document.querySelector('div').innerText = 'bosildi';
// });

// text2.addEventListener('mouseout', function () {
// 	document.querySelector('ul').innerText = "qo'yib yuborildi";
// });

// =============

// const div = document.querySelector('div');
// const ul = document.querySelector('ul');
// div.addEventListener('mouseover', function () {
// 	const li = document.createElement('li');
// 	li.innerText = 'kirdi ';
// 	ul.appendChild(li);
// });
// div.addEventListener('mouseout', function () {
// 	const li = document.createElement('li');
// 	li.innerText = 'chiqdi ';
// 	ul.appendChild(li);
// });

// JS ni css ga aylantirib still berish

// let a = document.querySelector('button');

// a.addEventListener('click', function () {
// 	document.querySelector('p').style.color = 'red';
// });

// let a = document.querySelector('button');
// let b = document.querySelector('.red');
// let c = document.querySelector('.yellow');
// let d = document.querySelector('.green');

// function TurnOff() {
// 	document.querySelector('red').computedStyleMap.background = 'grey';
// 	document.querySelector('yellow').computedStyleMap.background = 'grey';
// 	document.querySelector('green').computedStyleMap.background = 'grey';
// }

// a.addEventListener('click', function () {
// 	setTimeout(TurnRed, 5000);
// 	setTimeout(TurnRed, 5000);
// 	setTimeout(Turnyellow, 5000);
// 	setTimeout(TurnYellow, 5000);
// 	setTimeout(TurnGreen, 5000);
// 	setTimeout(TurnGreen, 5000);
// });

// function TurnRED() {
// 	b.style.background = 'red';
// 	c.style.background = 'gray';
// 	d.style.background = 'gray';
// }

// function TurnYellow() {
// 	b.style.background = 'gray';
// 	c.style.background = 'yellow';
// 	d.style.background = 'gray';
// }

// function TurnGreen() {
// 	b.style.background = 'gray';
// 	c.style.background = 'gray';
// 	d.style.background = 'green';
// }

// a.addEventListener('click', function () {
// 	setTimeout(TurnRED, 10000);
// 	setTimeout(TurnYellow, 5000);
// 	setTimeout(TurnGreen, 5000);
// });

// Masalalar

// 1 - masala

// let message = document.getElementById('message');
// let retryBtn = document.getElementById('retry');
// let timer;

// // Funksiya: 5 soniyadan keyin xabarni almashtiradi
// function startLoading() {
// 	message.textContent = 'Yuklanmoqda...';
// 	clearTimeout(timer); // eski taymerni to‘xtatish
// 	timer = setTimeout(() => {
// 		message.textContent = 'Xatolik yuz berdi. Qayta urinib ko‘ring.';
// 	}, 5000);
// }

// // Boshlanishda ishga tushsin
// startLoading();

// // Tugmani bosganda yana qayta yuklansin
// retryBtn.addEventListener('click', startLoading);

// 2 - masala

// let time = 0;
// let interval;
// let timerDisplay = document.getElementById('timer');

// document.getElementById('start').addEventListener('click', () => {
// 	if (!interval) {
// 		// faqat bitta interval bo‘lishi uchun
// 		interval = setInterval(() => {
// 			time++;
// 			timerDisplay.textContent = time;
// 		}, 1000);
// 	}
// });

// document.getElementById('stop').addEventListener('click', () => {
// 	clearInterval(interval);
// 	interval = null;
// });

// document.getElementById('reset').addEventListener('click', () => {
// 	clearInterval(interval);
// 	interval = null;
// 	time = 0;
// 	timerDisplay.textContent = time;
// });

// 3 - masla

// const banner = document.getElementById('banner');
// const ads = [
// 	' Reklama 1: Web kurslarga yoziling!',
// 	' Reklama 2: Yangi telefonlar aksiyasi!',
// 	' Reklama 3: Video montaj xizmatlari!',
// ];

// let interval = setInterval(() => {
// 	const randomAd = ads[Math.floor(Math.random() * ads.length)];
// 	banner.textContent = randomAd;
// }, 3000);

// // 10 soniyadan keyin butunlay yashirish
// setTimeout(() => {
// 	clearInterval(interval);
// 	banner.style.display = 'none';
// }, 10000);

// ========================================

const heart = document.querySelector('.fa-heart');

heart.addEventListener('click', () => {
	if (heart.style.color === 'red') {
		heart.style.color = '#fff'; // oq
	} else {
		heart.style.color = 'red';
	}
});
