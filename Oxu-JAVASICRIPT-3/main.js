// Massiv (array) — bu bitta o‘zgaruvchida bir nechta qiymatlarni saqlash uchun ishlatiladigan ma’lumot tuzilmasi.
// Oddiy o‘zgaruvchi faqat bitta qiymatni saqlaydi, massiv esa ko‘p qiymatlarni tartib bilan saqlaydi.

// 📌 Massiv yaratish

// Kvadrat qavs yordamida:

// let mevalar = ["olma", "banan", "gilos"];

// Array konstruktor yordamida:

// let sonlar = new Array(1, 2, 3, 4, 5);

// 👉 Amalda ko‘pincha 1-usul ishlatiladi.

// 📌 Massiv elementlariga murojaat qilish

// Har bir element indeks orqali olinadi (indeks 0 dan boshlanadi):

// let ranglar = ["qizil", "yashil", "ko'k"];

// console.log(ranglar[0]); // qizil
// console.log(ranglar[1]); // yashil
// console.log(ranglar[2]); // ko'k

// 📌 Massiv uzunligi

// .length yordamida elementlar sonini olish mumkin:

// let raqamlar = [10, 20, 30, 40];
// console.log(raqamlar.length); // 4

// 📌 Asosiy metodlar

// push() – oxiriga element qo‘shadi

// let mevalar = ["olma", "banan"];
// mevalar.push("shaftoli");
// console.log(mevalar); // ["olma", "banan", "shaftoli"]

// pop() – oxirgi elementni o‘chiradi

// mevalar.pop();
// console.log(mevalar); // ["olma", "banan"]

// unshift() – boshiga element qo‘shadi

// mevalar.unshift("gilos");
// console.log(mevalar); // ["gilos", "olma", "banan"]

// shift() – birinchi elementni o‘chiradi

// mevalar.shift();
// console.log(mevalar); // ["olma", "banan"]

// for loop bilan yurish:

// let sonlar = [1, 2, 3, 4, 5];

// for (let i = 0; i < sonlar.length; i++) {
//     console.log(sonlar[i]);
// }

// forEach() – massiv elementlari bo‘yicha yuradi:

// sonlar.forEach(function(son) {
//     console.log(son);
// });

// 📌 Qisqa xulosa

// Massiv — bir nechta qiymatlarni tartib bilan saqlaydi.

// Indeks 0 dan boshlanadi.

// .length uzunlik beradi.

// push, pop, shift, unshift kabi metodlar massivni boshqarish uchun ishlatiladi.

// 1️⃣ delete operatori

// 👉 delete massivdagi elementni o‘chiradi, lekin indeksni bo‘sh joy qilib qoldiradi.

// let mevalar = ["olma", "banan", "gilos"];
// delete mevalar[1];

// console.log(mevalar);      // ["olma", empty, "gilos"]
// console.log(mevalar.length); // 3 (uzunligi o‘zgarmaydi!)

// 📌 Minus tomoni: massiv uzunligi o‘zgarmaydi, bo‘sh joy (empty) qoladi. Shu sababli amalda kam ishlatiladi.

// 2️⃣ splice() metodi

// 👉 Massivdan elementlarni qo‘shish, o‘chirish yoki almashtirish uchun ishlatiladi.
// Sintaksisi:

// array.splice(start, deleteCount, item1, item2, ...)

// start → qaysi indeksdan boshlash

// deleteCount → nechta elementni o‘chirish

// item1, item2... → qo‘shiladigan elementlar

// Misollar:
// let sonlar = [1, 2, 3, 4, 5];

// //  2-indeksdan boshlab 2 ta elementni o‘chiradi
// sonlar.splice(2, 2);
// console.log(sonlar); // [1, 2, 5]

// // 1-indeksdan boshlab 0 ta element o‘chirib, yangi element qo‘shadi
// sonlar.splice(1, 0, 10, 20);
// console.log(sonlar); // [1, 10, 20, 2, 5]

// // 2-indeksdan boshlab 1 ta elementni o‘chirib, o‘rniga boshqa qo‘yadi
// sonlar.splice(2, 1, 99);
// console.log(sonlar); // [1, 10, 99, 2, 5]

// 📌 Afzalligi: massivni o‘zgartiradi (o‘chiradi, qo‘shadi, almashtiradi).

// 3️⃣ slice() metodi

// 👉 Massivdan bo‘lak (nusxa) olib beradi.
// Sintaksisi:

// array.slice(start, end)

// start → qaysi indeksdan boshlash

// end → qaysi indeksgacha (o‘zi kirmaydi)

// Misollar:
// let ranglar = ["qizil", "yashil", "ko'k", "sariq"];

// // 1-indeksdan 3-indeksgacha (3 kirmaydi)
// let qism = ranglar.slice(1, 3);
// console.log(qism); // ["yashil", "ko'k"]

// // Butun nusxa olish
// let nusxa = ranglar.slice();
// console.log(nusxa); // ["qizil", "yashil", "ko'k", "sariq"]

// 📌 Muhimi: slice() asl massivni o‘zgartirmaydi, faqat yangi nusxa qaytaradi.

// 📊 Xulosa

// delete – elementni o‘chiradi, bo‘sh joy qoldiradi.

// splice() – massivni o‘zgartiradi (o‘chiradi, qo‘shadi, almashtiradi).

// slice() – massivdan nusxa yoki bo‘lak olib beradi, asl massiv o‘zgarmaydi.

// 1️⃣ indexOf()

// 👉 Massiv ichida birinchi uchragan elementning indeksini qaytaradi.
// Agar topilmasa, -1 qaytaradi.

// let mevalar = ["olma", "banan", "gilos", "banan"];

// console.log(mevalar.indexOf("banan")); // 1 (birinchi banan 1-indeksda)
// console.log(mevalar.indexOf("shaftoli")); // -1 (yo‘q)

// 📌 Sintaksis:

// array.indexOf(element, fromIndex)

// element → qaysi qiymatni qidirish

// fromIndex → qaysi indeksdan qidirishni boshlash (ixtiyoriy)

// 2️⃣ lastIndexOf()

// 👉 Massiv ichida oxirgi uchragan elementning indeksini qaytaradi.
// Agar topilmasa, -1 qaytaradi.

// let mevalar = ["olma", "banan", "gilos", "banan"];

// console.log(mevalar.lastIndexOf("banan")); // 3 (oxirgi banan 3-indeksda)
// console.log(mevalar.lastIndexOf("shaftoli")); // -1

// 📌 Sintaksis:

// array.lastIndexOf(element, fromIndex)

// element → qaysi qiymatni qidirish

// fromIndex → qaysi indeksdan orqaga qarab qidirish (ixtiyoriy)

// 3️⃣ includes()

// 👉 Massivda element mavjudligini tekshiradi.
// true yoki false qaytaradi.

// let mevalar = ["olma", "banan", "gilos"];

// console.log(mevalar.includes("banan"));  // true
// console.log(mevalar.includes("shaftoli")); // false

// 📌 Sintaksis:

// array.includes(element, fromIndex)

// element → qaysi qiymatni qidirish

// fromIndex → qaysi indeksdan qidirishni boshlash (ixtiyoriy)

// 📊 Xulosa

// indexOf() → birinchi uchragan element indeksini beradi (-1 agar topilmasa).

// lastIndexOf() → oxirgi uchragan element indeksini beradi (-1 agar topilmasa).

// includes() → massivda element bor yoki yo‘qligini true/false qilib qaytaradi.

// let arr = ['bir', 'ikki'];

// console.log(arr.indexOf('birr'));

// Masalalar

// 1-masala

// Foydalanuvchidan sonlar massivini yarating. for sikli yordamida faqat juft sonlarni yangi massivga push qiling. Agar massiv bo‘sh bo‘lsa, if orqali "Massiv bo‘sh" degan xabar chiqsin.

// for (let i = 0; i < 10; i++) {
// 	let n = Number(prompt('number: '));
// 	if (n % 2 == 0) {
// 		a.push(n);
// 	}
// }
// if (a.length == 0) {
// 	alert("massiv bo'sh");
// }
// console.log(a);

// 2-masala

// Berilgan massivdan birinchi elementni shift orqali olib tashlang. Keyin if/else yordamida massiv uzunligini (length) tekshirib, agar 5 dan katta bo‘lsa, yangi element qo‘shing (unshift bilan).

// let mevalar = ['olma', 'behi', 'sabzi', 'banan', 'olcha'];

// mevalar.shift();
// if (mevalar.length <= 5) {
// 	alert(mevalar);
// } else let;
// mevalar.unshift('gilos');
// console.log(mevalar);

// ******************************************************************

// let mevalar = ['olma', 'behi', 'sabzi', 'banan', 'olcha', 'tarbuz'];

// mevalar.shift();
// if (mevalar.length > 5) {
// 	alert(mevalar);
// } else;
// mevalar.unshift('gilos');
// console.log(mevalar);

// 3-masala

// Foydalanuvchidan 7 ta so‘z kiriting va massivga joylashtiring. while yordamida massivdan har bir elementni pop bilan olib tashlang. So‘z uzunligi 4 dan kichik bo‘lsa, chiqarib boring.

// let word = [];

// let words = prompt("So'z kiriting");

// while (words.length > 0) {
// 	let word = words.pop();
// 	if (word.length <= 4) {
// 		console.log(word);
// 	}
// }

// **********************************************************

// let words = [];
// let i = 0;

// while (i < 7) {
// 	let input = prompt(i + 1 + "-so'zni kiriting:");
// 	words.push(input);
// 	i++;
// }

// while (words.length > 0) {
// 	let word = words.pop();

// 	if (word.length <= 4) {
// 		console.log(word);
// 	}
// }

// 4-masala

// Massivdan splice yordamida 2-chi va 4-chi elementlarni o‘chirib tashlang. if orqali massivda "javascript" so‘zi bormi (includes) tekshiring. Agar bo‘lsa, uni massiv oxiriga (push) qo‘shing.

// let massiv = ['sdfs', 'sefESF', 'effeWE', 'Javascript', 'ytfb'];
// words.push(input);
// i++;
// console.log(massiv.includes('javasript'));

// *******************************************************************

// let massiv = ['asfda', 'cssasd', 'javascript', 'python', 'java', 'afascsa'];

// massiv.splice(1, 1);
// massiv.splice(3, 1);

// if (massiv.includes('javascript')) {
// 	massiv.push('javascript');
// }

// console.log(massiv);

// 5-masala

// Berilgan massivni slice yordamida ikkiga ajrating. for sikli orqali ikkala bo‘lakdagi elementlarni solishtiring: qaysi bo‘lak uzunroq (length), o‘sha bo‘lak elementlarini chiqaring.

// let massiv = [1, 2, 3, 4, 5, 6, 7];

// let middle = Math.floor(massiv.length / 2);
// let firstPart = massiv.slice(0, middle);
// let secondPart = massiv.slice(middle);

// console.log('Birinchi bo‘lak:', firstPart);
// console.log('Ikkinchi bo‘lak:', secondPart);

// if (firstPart.length > secondPart.length) {
// 	console.log('Birinchi bo‘lak uzunroq:');
// 	for (let i = 0; i < firstPart.length; i++) {
// 		console.log(firstPart[i]);
// 	}
// } else if (secondPart.length > firstPart.length) {
// 	console.log('Ikkinchi bo‘lak uzunroq:');
// 	for (let i = 0; i < secondPart.length; i++) {
// 		console.log(secondPart[i]);
// 	}
// } else {
// 	console.log('Ikkala bo‘lak ham teng uzunlikda.');
// }

// 6 - masala

// let fruits = ['banana', 'apple', 'orange', 'apple', 'grape'];

// let firstIndex = fruits.indexOf('apple');
// let lastIndex = fruits.lastIndexOf('apple');

// if (firstIndex === -1) {
// 	console.log('Apple mavjud emas.');
// } else if (firstIndex === lastIndex) {
// 	console.log('Faqat bitta apple mavjud. Indeksi:', firstIndex);
// } else {
// 	console.log('Bir nechta apple mavjud. Birinchi:', firstIndex, 'Oxirgi:', lastIndex);
// }

// 7 - masala

// let numbers = [];
// for (let i = 0; i < 10; i++) {
// 	let num = Number(prompt(i + 1 + '-sonni kiriting:'));
// 	numbers.push(num);
// }

// for (let i = 1; i < numbers.length; i += 2) {
// 	delete numbers[i];
// }

// console.log('Delete qilingandan keyin massiv:', numbers);

// let i = 0;
// while (i < numbers.length) {
// 	if (numbers[i] !== undefined) {
// 		console.log(numbers[i]);
// 	}
// 	i++;
// }

// 8 - masala

// 8-masala
// Berilgan massivdan splice yordamida faqat manfiy sonlarni o‘chirib tashlang.
// if orqali massiv bo‘sh qolsa, "Barcha sonlar manfiy edi" deb chiqaring,
// aks holda massiv elementlarini for orqali chiqarib bering.

// let arr8 = [2, -5, 7, -3, 9, -1];
// for (let i = 0; i < arr8.length; i++) {
// 	if (arr8[i] < 0) {
// 		arr8.splice(i, 1);
// 		i--;
// 	}
// }
// if (arr8.length === 0) {
// 	console.log('8-masala: Barcha sonlar manfiy edi');
// } else {
// 	for (let i = 0; i < arr8.length; i++) {
// 		console.log('8-masala:', arr8[i]);
// 	}
// }

// 9-masala
// Matnlar massivida "hello" so‘zining mavjudligini includes bilan tekshiring.
// Agar mavjud bo‘lsa, massiv boshiga (unshift) "greeting" so‘zini qo‘shing.
// Aks holda massiv oxiriga (push) "not found" yozing.

// let arr9 = ['hi', 'welcome', 'hello', 'bye'];
// if (arr9.includes('hello')) {
// 	arr9.unshift('greeting');
// } else {
// 	arr9.push('not found');
// }
// console.log('9-masala:', arr9);

// 10-masala
// Foydalanuvchi kiritgan massivni while yordamida aylantirib chiqing.
// Agar element uzunligi (length) 3 dan kichik bo‘lsa, splice yordamida o‘chirib tashlang.
// Yakunda qolgan elementlar sonini ekranga chiqaring.
// let arr10 = ['it', 'sun', 'apple', 'go', 'car', 'ok'];
// let k = 0;
// while (k < arr10.length) {
// 	if (arr10[k].length < 3) {
// 		arr10.splice(k, 1);
// 	} else {
// 		k++;
// 	}
// }
// console.log('10-masala: Qolgan elementlar soni:', arr10.length);
// console.log('10-masala: Qolgan elementlar:', arr10);
