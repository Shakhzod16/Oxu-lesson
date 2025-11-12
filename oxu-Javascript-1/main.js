// let a = '5';
// let b = ' hello ';
// console.log(b * a);
// let a = Number(prompt('son kiriting'));
// console.log(typeof a);

// let a = confirm('siz 18 yoshdan kattamisiz?');
// let b = prompt('ismingiz nima');
// console.log(a);
// console.log(b);

// --------------------------------------------------------------------

// Shart operatorlari misollar :

// 1 - misoll :

// let a = prompt('age: ');

// if (a == 18) {
// 	alert('welcome');
// } else if ('a<18') {
// 	alert('error');
// } else if (a > 18) {
// 	alert('2x welcome');
// } else {
// 	alert('error number');
// }

// 2 - misoll :

// let a = prompt('password: ');
// let b = prompt('username: ');

// if (a == '123' || b == 'admin') {
// 	alert('true');
// } else {
// 	alert('false');
// }

// Misollar

// 1 - misol

// let a = prompt('Son kiriting');

// if (a > 0) {
// 	alert('musbat');
// } else if (a < 0) {
// 	alert('manfiy');
// } else if (a == 0) {
// 	alert('musbat');
// }

// 2 - misol

// let a = Number (prompt('son kiriting'));
// let b = Number (prompt('son kiriting'));

// if (a < b) {
// 	console.log(b)
// } else if (a > b) {
// 	console.log(a);
// } else if (a === b) {
// 	console.log('teng');
// }

// 3 - misol

// let a = number(prompt('1-son: '));
// let b = number(prompt('2-son: '));
// let c = number(prompt('3-son: '));

// if (a > b && a > c) {
// 	console.log(a);
// } else if (b > a && b > c) {
// 	console.log(b);
// } else if (c > a && c > b) {
// 	console.log(c);
// } else if (a == b && a > c) {
// 	console.log(a);
// 	console.log(b);
// } else if (c == b && c > a) {
// 	console.log(c);
// 	console.log(b);
// } else if (a == c && a > b) {
// 	console.log(a);
// 	console.log(c);
// } else {
// 	console.log('teng');
// }

// 4 - misol

// let a = prompt('Ismingiz kiriting');
// let b = prompt('Manzilingizni kiriting');
// let c = prompt('Yoshingizni kiriting');
// let d = prompt('Balansingizni kiriting');

// if ((a = Alisher)) {
// 	alert('false');
// } else if (a != alisher) {
// 	alert('true');
// } else if ((b = Andijon)) {
// 	alert('false');
// } else if (b != Andijon) {
// 	alert('true');
// } else if (c >= 18) {
// 	alert('false');
// } else if (c < 18) {
// 	alert('true');
// } else if ((d = 999999)) {
// 	alert('false');
// } else if (d != 999999) {
// 	alert('true');
// } else if ((a, b, c, (d = true))) {
// 	console.log(a, b, c, d);
// }

// let a = prompt('Ismingizni kiriting');
// let b = prompt('Manzilingizni kiriting');
// let c = Number(prompt('Yoshingizni kiriting'));
// let d = Number(prompt('Balansingizni kiriting'));

// if (a === 'Alisher') {
// 	alert('false');
// } else if (a !== 'Alisher') {
// 	alert('true');
// }

// if (b === 'Andijon') {
// 	alert('false');
// } else if (b !== 'Andijon') {
// 	alert('true');
// }

// if (c >= 18) {
// 	alert('false');
// } else if (c < 18) {
// 	alert('true');
// }

// if (d === 999999) {
// 	alert('false');
// } else if (d !== 999999) {
// 	alert('true');
// }

// console.log('Ism:', a);
// console.log('Manzil:', b);
// console.log('Yosh:', c);
// console.log('Balans:', d);

// let ismi = prompt('Ismingizni kiriting');
// let manzil = prompt('Manzilingizni kiriting');
// let yosh = Number(prompt('Yoshingizni kiriting'));
// let balans = Number(prompt('Balansingizni kiriting'));

// if (ismi === 'Alisher' || manzil === 'Andijon' || yosh < 18) {
// 	console.log('Qabul qilinmadi ');
// } else {
// 	if (balans >= 999999) {
// 		balans = 0;
// 	}
// 	console.log(`Ismi: ${ismi}, Manzili: ${manzil}, Yoshi: ${yosh}, Balansi: ${balans}`);
// }

// My homework

// 1 - mashq

// let ism = prompt('Ismingizni kiriting');
// let manzil = prompt('Shaharingizni kiriting');
// let yosh = Number(prompt('Yoshingizni kiriting'));
// let balans = Number(prompt('Balansingizni kiriting'));

// if (ism == 'Aziza' || manzil == 'Toshkent' || yosh < 20) {
// 	console.log('Qabul qilinmadi');
// } else {
// 	if (balans < 1000) {
// 		balance = 100;
// 	}
// 	console.log('${ism} ${manzil} ${yosh} ${balans}');
// }

// 2 - mashq

// let nomi = prompt('Kitob nomini kiriting');
// let muallifi = prompt('Muallifni kiriting');
// let yili = Number(prompt('Yilingizni kiriting'));
// let narxi = Number(prompt('Narxini kiriting'));

// if (nomi === 'Harry Potter' || muallifi === 'Unknown' || yili < 2000) {
// 	console.log('Qabul qilinmadi ');
// } else {
// 	if (narxi === 0) {
// 		narxi = 500;
// 	}
// 	console.log(`Nomi: ${nomi}, Muallifi: ${muallifi}, Yili: ${yili}, Narxi: ${narxi}`);
// }

// 3 - mashq

// let modili = prompt('Telefon modelini kiriting');
// let rangi = prompt('Rangini kiriting');
// let Xotira = Number(prompt('Xotirasini kiriting'));
// let narxi = Number(prompt('Narxini kiriting'));

// if (modili === 'IPhone 6' || rangi === 'sariq' || Xotira < 2) {
// 	console.log('Qabul qilinmadi ');
// } else {
// 	if (narxi === 1000000) {
// 		narxi = 900000;
// 	}
// 	console.log(`Modili: ${modili}, Rangi: ${rangi}, Xotira: ${Xotira}, Narxi: ${narxi}`);
// }

// 4 - mashq

// let ismi = prompt('Talabani ismini kiriting');

// let gruhi = prompt('Gruhini kiriting');
// let yoshi = Number(prompt('Yoshini kiriting'));
// let stipendiyasi = Number(prompt('Stipendiya kiriting'));

// if (ismi === 'Jasur' || gruhi === 'ATT-20' || yoshi < 17) {
// 	console.log('Qabul qilinmadi ');
// } else {
// 	if (stipendiyasi === 0) {
// 		stipendiyasi = 300;
// 	}
// 	console.log(`Ismi: ${ismi}, Gruhi: ${gruhi}, Yoshi: ${yoshi}, stipendiyasi: ${stipendiyasi}`);
// }
