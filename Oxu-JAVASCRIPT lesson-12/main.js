// const btn = document.querySelector('#btn');
// const joy = document.querySelector('#joy');

// btn.addEventListener('click', function () {
// 	const p = document.createElement('p');
// 	p.textContent = 'Hello';

// 	joy.appendChild(p);
// });

// const btn = document.querySelector('#btn');
// const joy = document.querySelector('#joy');

// btn.addEventListener('click', function () {
// 	const p = document.createElement('p');
// 	p.textContent = 'Hello';
// 	if (p.length >= 20) {
// 		alert("20 tadan ko'p qo'shib bo'lmaydi! ");
// 	}

// 	joy.appendChild(p);
// });

//=====================================

// const btn = document.querySelector('.text')[0];
// const btn1 = document.querySelector('.text')[1];
// const joy = document.querySelector('.btn');

// btn.addEventListener('click', function () {
// 	const count = joy.querySelectorAll('p').length;

// 	if (count >= 20) {
// 		alert("20 tadan ko'p qo'shib bo'lmaydi!");
// 		return;
// 	}

// 	const p = document.createElement('p');
// 	p.textContent = 'Hello';
// 	joy.appendChild(p);
// });

// ========================================

// const btn = document.querySelector('.btn');
// const inputs = document.querySelectorAll('input');
// const container = document.querySelector('.container');

// const resultDiv = document.createElement('div');
// document.body.appendChild(resultDiv);

// btn.addEventListener('click', () => {
// 	const fio = inputs[0].value.trim();
// 	const manzil = inputs[1].value.trim();

// 	if (fio === '' || manzil === '') {
// 		alert('Iltimos, barcha maydonlarni to‘ldiring!');
// 		return;
// 	}

// 	resultDiv.innerHTML = `
//     <h3>🧾 Kiritilgan ma'lumotlar:</h3>
//     <p><strong>F.I.O:</strong> ${fio}</p>
//     <p><strong>Manzil:</strong> ${manzil}</p>
//   `;

// 	inputs[0].value = '';
// 	inputs[1].value = '';
// });

// localStorage.setItem('test', 1);
// alert(localStorage.getItem('test'));

// delete localStorage.test;

// let key = 'lenght';
// localStorage[key] = 5;
