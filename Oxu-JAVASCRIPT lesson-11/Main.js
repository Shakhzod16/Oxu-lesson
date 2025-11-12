// const taskInput = document.getElementById('taskInput');
// const addBtn = document.getElementById('addBtn');
// const taskList = document.getElementById('taskList');

// addBtn.addEventListener('click', () => {
// 	const text = taskInput.value.trim(); // 🔧 to‘g‘rilandi
// 	if (text === '') return;

// 	const li = document.createElement('li');
// 	const span = document.createElement('span');
// 	span.textContent = text;
// 	li.appendChild(span);

// 	const btnGroup = document.createElement('div');
// 	btnGroup.className = 'btn-group';

// 	const editBtn = document.createElement('button');
// 	editBtn.textContent = '✏️';
// 	editBtn.addEventListener('click', () => updateTask(span));

// 	const deleteBtn = document.createElement('button');
// 	deleteBtn.textContent = '🗑';
// 	deleteBtn.addEventListener('click', () => li.remove());

// 	btnGroup.appendChild(editBtn);
// 	btnGroup.appendChild(deleteBtn);
// 	li.appendChild(btnGroup);

// 	taskList.appendChild(li);
// 	taskInput.value = '';
// });

// function updateTask(spanElement) {
// 	const newText = prompt('Yangi matn kiriting:', spanElement.textContent);
// 	if (newText !== null && newText.trim() !== '') {
// 		spanElement.textContent = newText.trim();
// 	}
// }


// ===============================

// elementlarni olish
const cardInput = document.querySelectorAll('#taskInput')[0];
const dateInput = document.querySelectorAll('#taskInput')[1];
const fioInput = document.querySelectorAll('#taskInput')[2];
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// "Qo‘shish" tugmasi bosilganda
addBtn.addEventListener('click', () => {
  const card = cardInput.value.trim();
  const date = dateInput.value.trim();
  const fio = fioInput.value.trim();

  if (card === '' || date === '' || fio === '') {
    alert("Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }

  // <li> element yaratamiz
  const li = document.createElement('li');
  li.className = 'task-item';

  // ma'lumot matni
  const info = document.createElement('div');
  info.innerHTML = `
    <strong>Karta:</strong> ${card} <br>
    <strong>Muddati:</strong> ${date} <br>
    <strong>F.I.O:</strong> ${fio}
  `;
  li.appendChild(info);

  // tugmalar uchun div
  const btnGroup = document.createElement('div');
  btnGroup.className = 'btn-group';

  // ✏️ tahrirlash tugmasi
  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️';
  editBtn.className = 'edit-btn';
  editBtn.addEventListener('click', () => {
    const newCard = prompt("Yangi karta raqamini kiriting:", card);
    const newDate = prompt("Yangi muddatni kiriting:", date);
    const newFio = prompt("Yangi F.I.O kiriting:", fio);

    if (newCard && newDate && newFio) {
      info.innerHTML = `
        <strong>Karta:</strong> ${newCard} <br>
        <strong>Muddati:</strong> ${newDate} <br>
        <strong>F.I.O:</strong> ${newFio}
      `;
    }
  });

  // 🗑️ o‘chirish tugmasi
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  // tugmalarni ulash
  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);
  li.appendChild(btnGroup);

  // ro‘yxatga qo‘shish
  taskList.appendChild(li);

  // inputlarni tozalash
  cardInput.value = '';
  dateInput.value = '';
  fioInput.value = '';
});
