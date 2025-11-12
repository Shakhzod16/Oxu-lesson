document.addEventListener('DOMContentLoaded', () => {
	const boxesContainer = document.getElementById('boxes');
	const createBtn = document.getElementById('createBtn');
	const deleteBtn = document.getElementById('deleteBtn');

	let count = 0; // qancha quti yaratilgan
	const maxBoxes = 50;

	createBtn.addEventListener('click', () => {
		if (count >= maxBoxes) return;

		const box = document.createElement('div');
		box.classList.add('box', 'filled');
		box.textContent = count + 1;

		boxesContainer.appendChild(box);
		count++;
	});

	deleteBtn.addEventListener('click', () => {
		if (count <= 0) return;
		const boxes = boxesContainer.querySelectorAll('.box');
		const lastBox = boxes[boxes.length - 1];
		lastBox.classList.add('remove');
		setTimeout(() => {
			boxesContainer.removeChild(lastBox);
		}, 250);
		count--;
	});
});
