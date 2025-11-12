// while va do while mavzusi

// 🔁 while loop

// Avval shart tekshiriladi, keyin kod bajariladi.

// Shart true bo‘lsa, ichidagi kod qayta-qayta ishlaydi.

// **********************************************************

// 🔁 do...while loop

// Avval kod bir marta ishlaydi, keyin shart tekshiriladi.

// Shart true bo‘lsa, yana ishlashda davom etadi.

// Missollar :

// 1 - misol

// let i = 0;
// while (i < 3) {
// 	alert(i);
// 	i++;
// }

// 2 - misol

// let i = 0;
// do {
// 	alert(i);
// 	i++;
// } while (i < 3);

// ===========================================================

// 🛑 break

// Loop ichida ishlatiladi.

// U loopni to‘xtatadi va tashqariga chiqib ketadi.

// Misol:
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     break; // 5 ga yetganda loop to‘xtaydi
//   }
//   console.log(i);
// }

// 📌 Natija: 1 2 3 4 chiqadi, chunki 5 da break bo‘lib, loop to‘xtaydi.

// 🔄 continue

// Loopni to‘xtatmaydi.

// Faqat o‘sha aylanishni tashlab, keyingisiga o‘tadi.

// Misol:
// for (let i = 1; i <= 5; i++) {
// 	if (i === 3) {
// 		continue; // 3 ni tashlab ketadi
// 	}
// 	console.log(i);
// }

// 📌 Natija: 1 2 4 5 chiqadi, chunki 3 tashlab o‘tiladi.

// Masalalar

// 1 - misol

// Foydalanuvchi sonlar kiritsin juftlarini alertga chiqarib ko'rsating. Exit kiritsa sikl ishdan to'xtatsin

// let a = Number(prompt('Son kiriting'));
// let i = o;
// while (true) {
// 	if (i % 2 == 0) {
// 		alert(true);
// 	} else if (i == exit) break;
// }

// while (true) {
// 	let i = prompt("Son kiriting (yoki 'exit' deb yozib chiqib keting):");

// 	if (i === 'exit') {
// 		break;
// 	}

// 	i = Number(i);

// 	if (i % 2 === 0) {
// 		alert('Juft son');
// 	} else {
// 		alert('Toq son');
// 	}
// }

// 2 - misol

// Foydalanuvchi kiritgan toq sonlar yig'indisini topish sikl 10 marta ishlaydi

// let i = 0;
// let s = 0;
// while (i <= 10) {
// 	let a = Number(prompt(`${i}-son`));
// 	if (a % 2 !== 0) {
// 		s += a;
// 	}
// 	i++;
// }

// 3 - misol

// let a = 0;
// let b = 0;

// while (a < 5) {
// 	let name = prompt('Ism kiriting:');
// 	let d = Number(prompt('Son kiriting:'));

// 	console.log(`${name} - ${d}`);

// 	b += d;
// 	a++;
// }

// console.log("Yig'indi:", b);

// 🔁 for sikl

// Bu — takrorlash uchun ishlatiladigan operator.

// Tuzilishi:
// for (boshlanish; shart; qadam) {

// }

// ⚡ Oddiy misol:
// for (let i = 1; i <= 5; i++) {
// 	console.log(i);
// }

// 📌 Bu kod:

// let i = 1 → boshlanish (i 1 dan boshlanadi).

// i <= 5 → shart (5 gacha ishlaydi).

// i++ → qadam (har safar 1 ga oshadi).

// ✅ Natija: 1 2 3 4 5 chiqadi.

// let n = Number(prompt('Son kiriting'));
// let tub = true;
// if (n <= 1) {
// 	tub = false;
// } else {
// 	for (let i = 2; i < n; i++) {
// 		if (n % i == 0) {
// 			tub = false;
// 			break;
// 		}
// 	}
// }
// if (tub) {
// 	console.log(n + 'tub son');
// } else {
// 	console.log(n + 'tub son emas');
// }

// 4 - masala

// let son = Number(prompt('Son kiriting:'));

// for (let i = son; i >= 1; i--) {
// 	console.log(i);
// }

// 5 - masala

// foydalanuvchi n son kiritsin, for yordamida 1 dan n gacha bo'lgan sonlarning yig'indisini hisoblang. Yig'indi juft bo'lsa yigindi juft chiqsin. Aks holda yig'indi toq chiqsin.

let n = Number(prompt('n sonini kiriting:'));
let yigindi = 0;

for (let i = 1; i <= n; i++) {
	yigindi += i;
}

console.log("Yig'indi:", yigindi);

if (yigindi % 2 === 0) {
	console.log("Yig'indi juft");
} else {
	console.log("Yig'indi toq");
}
