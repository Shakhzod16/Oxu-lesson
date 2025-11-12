// document.addEventListener('DOMContentLoaded', () => {
// 	const nav = document.querySelector('.nav');
// 	if (!nav) return;

// 	const btn = nav.querySelector('button');

// 	nav.style.display = 'none';
// 	nav.style.opacity = 0;
// 	nav.style.transform = 'translateY(-10px)';
// 	nav.style.transition = 'opacity 300ms ease, transform 300ms ease';

// 	setTimeout(() => {
// 		nav.style.display = '';

// 		requestAnimationFrame(() => {
// 			nav.style.opacity = 1;
// 			nav.style.transform = 'translateY(0)';
// 		});
// 	}, 2000);

// 	if (btn) {
// 		btn.addEventListener('click', () => {
// 			const ok = confirm('Oynani yopmoqchimisiz?');
// 			if (!ok) return;

// 			nav.style.opacity = 0;
// 			nav.style.transform = 'translateY(-10px)';

// 			setTimeout(() => {
// 				if (nav.parentNode) nav.parentNode.removeChild(nav);
// 			}, 300);
// 		});
// 	}
// });

// ================ Secondry - Task =========================

document.addEventListener('DOMContentLoaded', () => {
	const addRowBtn = document.getElementById('addRowBtn');
	const tableBody = document.querySelector('#myTable tbody');

	let rows = JSON.parse(localStorage.getItem('savedRows')) || [];

	function renderTable() {
		tableBody.innerHTML = '';
		rows.forEach(() => {
			const tr = document.createElement('tr');
			for (let i = 0; i < 4; i++) {
				const td = document.createElement('td');
				td.textContent = '';
				tr.appendChild(td);
			}
			tableBody.appendChild(tr);
		});
	}

	renderTable();

	addRowBtn.addEventListener('click', () => {
		rows.push(['', '', '', '']);

		localStorage.setItem('savedRows', JSON.stringify(rows));

		const tr = document.createElement('tr');
		for (let i = 0; i < 4; i++) {
			const td = document.createElement('td');
			td.textContent = '';
			tr.appendChild(td);
		}

		tr.style.opacity = '0';
		tr.style.transform = 'translateY(-10px)';
		tableBody.appendChild(tr);
		requestAnimationFrame(() => {
			tr.style.transition = 'opacity 300ms ease, transform 300ms ease';
			tr.style.opacity = '1';
			tr.style.transform = 'translateY(0)';
		});
	});
});
