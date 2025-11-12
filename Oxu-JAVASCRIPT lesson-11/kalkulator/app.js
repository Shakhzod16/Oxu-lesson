const ac = document.getElementById('AC');
const acplus = document.getElementById('Acplus');
const prosent = document.getElementById('Protsent');
const device = document.getElementById('device');
const seven = document.getElementById('seven');
const eight = document.getElementById('eigth');
const nine = document.getElementById('nine');
const multiply = document.getElementById('multiply');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const sub = document.getElementById('sub');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const add = document.getElementById('add');
const returnn = document.getElementById('return');
const zero = document.getElementById('zero');
const comma = document.getElementById('comma');
const equal = document.getElementById('equality');
const ekran = document.querySelector('.ekran');



let current = '';
let operator = '';
let previous = '';

ekran.textContent = '0';

function appendNumber(num) {
  current += num;
  ekran.textContent = current;
}

function chooseOperator(op) {
  if (current === '') return;
  if (previous !== '') calculate();
  operator = op;
  previous = current;
  current = '';
}

function calculate() {
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  if (isNaN(prev) || isNaN(curr)) return;

  let result;
  switch (operator) {
    case '+': result = prev + curr; break;
    case '-': result = prev - curr; break;
    case 'x': result = prev * curr; break;
    case '/': result = prev / curr; break;
    default: return;
  }
  current = result.toString();
  operator = '';
  previous = '';
  ekran.textContent = current;
}

one.addEventListener('click', () => appendNumber('1'));
two.addEventListener('click', () => appendNumber('2'));
three.addEventListener('click', () => appendNumber('3'));
four.addEventListener('click', () => appendNumber('4'));
five.addEventListener('click', () => appendNumber('5'));
six.addEventListener('click', () => appendNumber('6'));
seven.addEventListener('click', () => appendNumber('7'));
eight.addEventListener('click', () => appendNumber('8'));
nine.addEventListener('click', () => appendNumber('9'));
zero.addEventListener('click', () => appendNumber('0'));
comma.addEventListener('click', () => appendNumber('.'));
add.addEventListener('click', () => chooseOperator('+'));
sub.addEventListener('click', () => chooseOperator('-'));
multiply.addEventListener('click', () => chooseOperator('x'));
device.addEventListener('click', () => chooseOperator('/'));

equal.addEventListener('click', () => calculate());

// AC button
ac.addEventListener('click', () => {
  current = '';
  previous = '';
  operator = '';
  ekran.textContent = '0';
});

// %
prosent.addEventListener('click', () => {
  if (current !== '') {
    current = (parseFloat(current) / 100).toString();
    ekran.textContent = current;
  }
});

// +/−
acplus.addEventListener('click', () => {
  if (current !== '') {
    current = (parseFloat(current) * -1).toString();
    ekran.textContent = current;
  }
});

function appendNumber(num) {
  if (current.length >= 16) {
    alert('maxsimal raqam 16 ta bolishi mumkin!!');
    return;
  }
  current += num;
  ekran.textContent = current;
}

document.addEventListener('keydown', e => {
	const key = e.key;

	// raqamlar
	if (!isNaN(key)) appendNumber(key);

	// nuqta
	if (key === '.') appendNumber('.');

	// operatorlar
	if (key === '+') chooseOperator('+');
	if (key === '-') chooseOperator('-');
	if (key === '*') chooseOperator('x');
	if (key === '/') chooseOperator('/');

	// tenglik
	if (key === '=' || key === 'Enter') calculate();

	// orqaga o‘chirish
	if (key === 'Backspace') {
		current = current.slice(0, -1);
		ekran.textContent = current || '0';
	}

	// tozalash
	if (key === 'Escape') {
		current = '';
		previous = '';
		operator = '';
		ekran.textContent = '0';
	}
})

returnn.addEventListener('click', () => {
  current = current.slice(0, -1);
  ekran.textContent = current || '0';
})

