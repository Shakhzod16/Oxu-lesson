// let browsers = 'chrome'

// switch (browsers) {
// 	case 'Edge':
// 		console.log("You've got the Edge!");
// 		break;
// 	case 'Chrome':
// 	case 'Firefox':
// 	case 'Safari':
// 	case 'Opera':
// 		alert('Okay we support these browsers too');
// 		break;
// 	default:
// 		alert('We hope that this page looks ok!');
// }

// FUNCTION

// Funksiya — bu dasturlashda biror kodni qayta-qayta ishlatish uchun alohida blok qilib yozib qo‘yish.

// Oddiy qilib aytganda, funksiya bu nomlangan kichik dasturcha, unga kerakli ma’lumotlarni yuborish mumkin va u natija qaytaradi yoki shunchaki amal bajaradi.

// Asosiy tushunchalar:

// E’lon qilish (yaratish)
// Funksiya dasturda avval yoziladi. Masalan (JavaScript misolida):

// function salomBer() {
//   console.log("Assalomu alaykum!");
// }

// Bu funksiya har safar chaqirilganda "Assalomu alaykum!" degan yozuvni chiqaradi.

// Misollar

// function showMessage() {
// 	let message = 'salom , dilbek';
// 	alert(message);
// }
// showMessage();
// alert(message);

// let userName = 'jahon';
// function showMessage() {
// 	let message = 'salom' + userName;
// 	alert(message);
// }

// --------------------------------------------------------

// function showMessage() {
// 	let message = 'Hello, MUXRIDDIN!';
// 	alert(message);
// }
// showMessage();
// alert(message);

// let username = 'Shahzod';
// function greet() {
// 	let username = 'MUXRIDDIN';
// 	alert('Salom, ' + username);
// }

// --------------------------------------------------------

// 🟢 Funksiya parametri nima?

// Parametr – bu funksiyaga kiruvchi ma’lumot.

// Funksiya chaqirilganda unga argument beriladi, parametr esa shu argumentni qabul qiladi.

// Oddiy qilib:
// 👉 Parametr – bu qutining nomi.
// 👉 Argument – qutiga solingan haqiqiy qiymat.

// 🟢 Misollar
// 1. Bitta parametr
// function kvadrat(son) {
//   return son * son;
// }

// console.log(kvadrat(5)); // 25
// console.log(kvadrat(10)); // 100

// ➡️ Bu yerda son – parametr, 5 va 10 – argument.

// 2. Bir nechta parametr
// function yigindi(a, b) {
//   return a + b;
// }

// console.log(yigindi(3, 7)); // 10
// console.log(yigindi(20, 5)); // 25

// ➡️ Parametrlar a va b. Argumentlar 3, 7 yoki 20, 5.

// return — bu funksiyaning natijasini qaytaradigan operator.

// U funksiyani to‘xtatadi va qiymatni tashqariga yuboradi.

// Agar return yozilmasa, funksiya undefined qaytaradi.

// 🟢 return vazifasi

// Funksiya ichidagi hisob-kitob natijasini tashqariga chiqaradi.

// O‘sha natijani boshqa joyda ishlatish imkonini beradi.

// Funksiya bajarilishini darhol to‘xtatadi.

// 🟢 Misollar
// 1. Oddiy misol
// function yigindi(a, b) {
//   return a + b;   // natijani qaytaradi
// }

// let natija = yigindi(4, 6);
// console.log(natija); // 10

// ➡️ Bu yerda yigindi(4, 6) funksiyasi 10 qaytaradi va u natija ga yoziladi.

// 2. return bo‘lmasa
// function kvadrat(son) {
//   son * son;   // return yo‘q!
// }

// console.log(kvadrat(5)); // undefined

// ➡️ Natija chiqmaydi, chunki return ishlatilmagan.

// Birinchi faylda funksiyalar, o‘zgaruvchilar yoki class’larni export qilamiz.

// Ikkinchi faylda ularni import qilib ishlatamiz.

// ⚠️ Eslatma: bu usul ES6 (ECMAScript 2015) modullarida ishlaydi va fayllarni .js emas, odatda .mjs bilan chaqirish yoki type="module" atributi bilan ulash kerak.

// 🟢 Misollar
// 1. Funksiyani export va import qilish

// math.js

// // Funksiya yaratamiz va export qilamiz
// export function kvadrat(x) {
//   return x * x;
// }

// app.js

// // math.js dan kvadrat funksiyasini import qilamiz
// import { kvadrat } from './math.js';

// console.log(kvadrat(5)); // 25

// 2. Bir nechta narsani export qilish

// math.js

// export const PI = 3.14;

// export function aylanaUzunligi(r) {
//   return 2 * PI * r;
// }

// app.js

// import { PI, aylanaUzunligi } from './math.js';

// console.log(PI);                // 3.14
// console.log(aylanaUzunligi(10)); // 62.8

// Topshiriqlar

// 1 - masala

// function greet(name) {
// 	return 'Salom, ' + name + '!';
// }

// console.log(greet('Shahzod'));

// 2 - masala

// function strLength(str) {
// 	return str.length;
// }

// console.log(strLength('salom'));

// 3 - masala

// function getFirst(arr) {
// 	return arr[0];
// }

// console.log(getFirst([1, 32, 4]));

// 4 - masala

// function reverseArray(arr) {
// 	massiv = [{ salom }];
// 	arr.reverse(massiv);
// }

// console.log(reverseArray(arr.reverse));

// --------------------------------------------

// function reverseArray(arr) {
// 	return arr.reverse();
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(reverseArray(numbers));

// 5 - masala

// function capitalize(word) {
//   return word.toUpperCase();
// }

// let text = 'salom';
// console.log(capitalize(text));

// 6 - masala

// function countChar(str, char) {
// 	let massiv = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] === char) {
// 			massiv++;
// 		}
//   }
//   return massiv
// }

// console.log(countChar('javascript', 'a'));

// 7 - masala

// function exists(arr, value) {
//   return arr.includes(value);
// }

// console.log(exists([1, 2, 3, 4], 3));  // true
// console.log(exists([1, 2, 3, 4], 7));  // false

// 8 - masala

// function uniqueArray(arr) {
//   return [...new Set(arr)];
// }

// console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5]));

// 9 - masala

// function sortWords(str) {
// 	return str.split(' ').sort().join(' ');
// }

// console.log(sortWords('salom dunyo javascript hello'));

// 10 - masala

// function groupByLength(arr) {
// 	let result = {};

// 	for (let word of arr) {
// 		let len = word.length;
// 		if (!result[len]) {
// 			result[len] = [];
// 		}
// 		result[len].push(word);
// 	}

// 	return result;
// }

// console.log(groupByLength(['hi', 'yes', 'ok', 'word']));

// Masalalar (funksiyaga oid)

// 1 - masala

// function reverseName(name) {
// 	let reverceName = prompt('Ismingizni kiriting');
// 	return name.split('').reverse().join('');
// }

// console.log(reverseName(' reverceName'));

// ======================================

// function reverseName(name) {
// 	let reversed = '';

// 	for (let i = name.length - 1; i >= 0; i--) {
// 		reversed += name[i];
// 	}

// 	return reversed;
// }

// let userName = prompt('Ismingizni kiriting:');
// console.log(reverseName(userName));

// 2 - masala

// function isStrongPassword(password) {
// 	if (password.length < 8) {
// 		return false;
// 	}

// 	let hasUpper = false;
// 	let hasLower = false;
// 	let hasDigit = false;

// 	for (let char of password) {
// 		if (char >= 'A' && char <= 'Z') hasUpper = true;
// 		if (char >= 'a' && char <= 'z') hasLower = true;
// 		if (char >= '0' && char <= '9') hasDigit = true;
// 	}

// 	return hasUpper && hasLower && hasDigit;
// }

// console.log(isStrongPassword('Asdf1234'));

// ---------------------------------------------

// function isStrongPassword(password) {
//   if (password.length < 8) return false;

//   if (!/[a-z]/.test(password)) return false;

//   if (!/[A-Z]/.test(password)) return false;

//   if (!/[0-9]/.test(password)) return false;

//   return true;
// }

// console.log(isStrongPassword('Asdf1234'));
// console.log(isStrongPassword('asdf1234'));
// console.log(isStrongPassword('ASDF1234'));
// console.log(isStrongPassword('Asdfghjk'));

// 3 - masala

// function checkEmail(email) {
// 	let a = false;
// 	let b = false;
// 	if (email[0] != '@' && email[email.indexOf('@') + 1] != '.') {
// 		a = true;
// 	}

// 	if (email[0] != '.' && email.indexOf('.') - email.indexOf('@') >= 2) {
// 		b = true;
// 	}
// 	return a && b;
// }
// console.log(checkEmail(prompt('email: ')));

// 4 - masala

// function cleanText(text) {
//   return text.replace(/[ !?.]/g, "");
// }

// console.log(cleanText("Salom! Nima gap?"));

// 5 - masala;

// function getDomain(url) {
// 	let domain = url.replace('https://', '').replace('http://', '').replace('www.', '');
// 	return domain.split('/')[0];
// }

// console.log(getDomain('https://www.openai.com/about'));

// 6 - masala;

// function getFileExtension(fileName) {
// 	return fileName.split('.').pop();
// }

// console.log(getFileExtension('photo.jpeg'));

// 7 - masala;

// function convertTo12Hour(time24) {
//   let [hour, minute] = time24.split(":");
//   hour = Number(hour);
//   let ampm = hour >= 12 ? "PM" : "AM";
//   hour = hour % 12 || 12;
//   return `${hour}:${minute} ${ampm}`;
// }

// console.log(convertTo12Hour("18:30"));

// 8 - masala;

// function extractLetters(text) {
//   return text.replace(/[^a-zA-Z]/g, "");
// }

// console.log(extractLetters("123@Hello!456"));

// 9 - masala;

// function capitalizeWords(text) {
// 	return text
// 		.split(' ')
// 		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
// 		.join(' ');
// }

// console.log(capitalizeWords('salom dunyo'));

// 10 - masala

// function addTask(taskList, newTask) {
// 	if (!taskList.includes(newTask)) {
// 		taskList.push(newTask);
// 	}
// 	return taskList;
// }

// console.log(addTask(['oqi', 'uxla', 'yoz'], prompt('newtask')));

let text = 'Salom dunyo, Js dunyosi';
let result = text.match(/dunyo/g);
console.log(result);
