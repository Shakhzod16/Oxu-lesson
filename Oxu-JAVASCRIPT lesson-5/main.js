// String methods

// String metodlari — bu matn (string) ustida turli xil amallar bajarishga yordam beradigan JavaScript’ning tayyor funksiyalari.

// Eng ko‘p ishlatiladigan String metodlari:

// 📌 length – matn uzunligini qaytaradi.

// let text = "Salom!";
// console.log(text.length); // 6

// 📌 toUpperCase() – hamma harflarni katta qiladi.

// let text = "salom";
// console.log(text.toUpperCase()); // "SALOM"

// 📌 toLowerCase() – hamma harflarni kichik qiladi.

// let text = "HELLO";
// console.log(text.toLowerCase()); // "hello"

// 📌 charAt(index) – indeksdagi harfni qaytaradi.

// let text = "JavaScript";
// console.log(text.charAt(4)); // "S"

// 📌 indexOf("so'z") – so‘z qayerdan boshlanganini ko‘rsatadi.

// let text = "Salom dunyo";
// console.log(text.indexOf("dunyo")); // 6

// 📌 includes("so'z") – matnda shu so‘z bormi yoki yo‘q (true/false).

// let text = "Men dasturchiman";
// console.log(text.includes("dastur")); // true

// 📌 slice(boshlash, tugash) – qirqib olish.

// let text = "JavaScript";
// console.log(text.slice(0, 4)); // "Java"

// 📌 substring(boshlash, tugash) – slicega o‘xshaydi.

// let text = "JavaScript";
// console.log(text.substring(4, 10)); // "Script"

// 📌 replace("eski","yangi") – so‘zni almashtiradi.

// let text = "Salom dunyo";
// console.log(text.replace("dunyo", "JS")); // "Salom JS"

// 📌 trim() – matnning oldi va oxiridagi bo‘sh joylarni olib tashlaydi.

// let text = "   Salom   ";
// console.log(text.trim()); // "Salom"

// 📌 split("belgi") – stringni massivga aylantiradi.

// let text = "olma,anor,uzum";
// console.log(text.split(",")); // ["olma", "anor", "uzum"]

// 🔹 1. Uzunlik va qidirish

// length – string uzunligini qaytaradi.

// let str = "JavaScript";
// console.log(str.length); // 10

// charAt(index) – berilgan indexdagi belgini qaytaradi.

// console.log(str.charAt(4)); // S

// charCodeAt(index) – belgining Unicode kodini qaytaradi.

// console.log(str.charCodeAt(0)); // 74 (J harfi)

// indexOf(substr) – berilgan matnning birinchi uchrashgan indeksini qaytaradi.

// console.log(str.indexOf("Script")); // 4

// lastIndexOf(substr) – oxiridan qidiradi.

// console.log(str.lastIndexOf("a")); // 3

// includes(substr) – string ichida bor-yo‘qligini tekshiradi (true/false).

// console.log(str.includes("Java")); // true

// startsWith(substr) – string shu bilan boshlanadimi?

// console.log(str.startsWith("Java")); // true

// endsWith(substr) – string shu bilan tugaydimi?

// console.log(str.endsWith("Script")); // true

// 🔹 2. Kesish va bo‘lish

// slice(start, end) – qismni ajratib oladi.

// console.log(str.slice(0, 4)); // Java

// substring(start, end) – slice ga o‘xshaydi, lekin manfiy index qabul qilmaydi.

// console.log(str.substring(4, 10)); // Script

// substr(start, length) – startdan boshlab length ta belgi oladi.

// console.log(str.substr(4, 6)); // Script

// 🔹 3. O‘zgartirish

// toUpperCase() – hammasini katta harf.

// console.log(str.toUpperCase()); // JAVASCRIPT

// toLowerCase() – hammasini kichik harf.

// console.log(str.toLowerCase()); // javascript

// trim() – bosh va oxiridagi bo‘sh joylarni olib tashlaydi.

// let s = "   Hello   ";
// console.log(s.trim()); // "Hello"

// replace(old, new) – matndagi birinchi uchrashganini almashtiradi.

// console.log(str.replace("Java", "Type")); // TypeScript

// replaceAll(old, new) – hammasini almashtiradi.

// let txt = "Hi Hi Hi";
// console.log(txt.replaceAll("Hi", "Hello")); // Hello Hello Hello

// 🔹 4. Bo‘lish va qo‘shish

// split(separator) – stringni massivga bo‘ladi.

// let words = "one,two,three".split(",");
// console.log(words); // ["one", "two", "three"]

// concat(str) – stringlarni birlashtiradi.

// let a = "Hello", b = "World";
// console.log(a.concat(" ", b)); // Hello World

// repeat(n) – stringni n marta qaytaradi.

// console.log("Hi!".repeat(3)); // Hi!Hi!Hi!

// 🔹 5. Belgilar bilan ishlash

// padStart(length, symbol) – oldiga belgilar qo‘shadi.

// console.log("5".padStart(3, "0")); // 005

// padEnd(length, symbol) – oxiriga belgilar qo‘shadi.

// console.log("5".padEnd(3, "0")); // 500

// 3-masala

// bankAccounts massivini tuzing: { owner, balance }.

// sort orqali balanslarni kamayish tartibida joylashtiring.

// slice orqali faqat eng katta 3 ta balansni oling.

// let bankAccounts = [
// 	{ owner: 'Ali', balance: 5000 },
// 	{ owner: 'Vali', balance: 12000 },
// 	{ owner: 'Gulbahor', balance: 8000 },
// 	{ owner: 'Dilshod', balance: 20000 },
// 	{ owner: 'Shahnoza', balance: 15000 },
// ];

// bankAccounts.sort((a, b) => b.balance - a.balance);

// console.log(bankAccounts);

// let top1 = bankAccounts.slice(0, 3);

// console.log(top1);

// 4-masala

// numbers massivini yarating.

// reverse orqali sonlarni teskari tartibda chiqaring.

// join orqali sonlarni bitta string ko‘rinishida chiqarib bering ("1,2,3,...").

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let reversed = numbers.reverse();
// console.log(reversed);

// let joined = numbers.join(',');
// console.log(joined);

// 5-masala

// employees massivini tuzing: { name, position }.

// indexOf orqali massivda "manager" lavozimi mavjudligini tekshiring.

// includes orqali "developer" lavozimi borligini tekshiring.

// let employees = [
//     {name: "Ali", position: "developer"},
//     {name: "Vali", position: "manager"},
//     {name: "Nodira", position: "designer"}
//   ];

//   let positions = employees.map(function(employee) {
//     return employee.position;
//   });

//   let hasManager = positions.indexOf("manager") !== -1;
//   console.log(hasManager); // true
//   let hasDeveloper = positions.includes("developer");
//   console.log(hasDeveloper); // true

// 6-masala

// books massivini yarating: { title, pages }.

// sort orqali kitoblarni sahifalar soni bo‘yicha ortib boruvchi tartibda joylashtiring.

// slice orqali faqat 2 ta eng kichik kitobni oling.

// let books = [
// 	{ title: 'JavaScript ', pages: 350 },
// 	{ title: 'HTML ', pages: 200 },
// 	{ title: 'Dasturlash', pages: 420 },
// 	{ title: 'Algoritmlar', pages: 150 },
// 	{ title: "Ma'lumot", pages: 280 },
// ];

// books.sort((a, b) => a.pages - b.pages);

// console.log(books);

// let smallestTwo = books.slice(0, 2);

// console.log(smallestTwo);

// ===============================================

// let books = [
// 	{ title: 'JavaScript', pages: 350 },
// 	{ title: 'HTML', pages: 200 },
// 	{ title: 'Dasturlash', pages: 420 },
// 	{ title: 'Algoritmlar', pages: 150 },
// 	{ title: "Ma'lumot", pages: 280 },
// ];

// let min1 = { pages: Infinity };
// let min2 = { pages: Infinity };

// for (let book of books) {
// 	if (book.pages < min1.pages) {
// 		min2 = min1;
// 		min1 = book;
// 	} else if (book.pages < min2.pages) {
// 		min2 = book;
// 	}
// }

// console.log(min1, min2);

// -------------------------------------

// let books = [
// 	{ title: 'JavaScript', pages: 350 },
// 	{ title: 'HTML', pages: 200 },
// 	{ title: 'Dasturlash', pages: 420 },
// 	{ title: 'Algoritmlar', pages: 150 },
// 	{ title: "Ma'lumot", pages: 280 },
// ];

// for (let i = 0; i < books.length - 1; i++) {
// 	for (let j = i + 1; j < books.length; j++) {
// 		if (books[i].pages > books[j].pages) {
// 			let temp = books[i];
// 			books[i] = books[j];
// 			books[j] = temp;
// 		}
// 	}
// }

// console.log('Tartiblangan kitoblar:', books);

// let smallBooks = books.slice(0, 2);
// console.log('Eng kichik 2 ta kitob:', smallBooks);

// 10-masala

// numbers massivini yarating.
// lastIndexOf orqali ma’lum bir sonning oxirgi uchrashgan indexini toping.
// includes orqali massivda berilgan son borligini tekshiring.

// let numbers = [10, 25, 30, 25, 40, 50, 25, 60];

// let lastIndex = numbers.lastIndexOf(25);
// console.log(lastIndex);

// let son40 = numbers.includes(40);
// let son100 = numbers.includes(100);

// console.log(son100, son40);

// HOMEWORK

// 1.
// let str = "JavaScript";
// console.log(str.length);

// 2.
// let str = "Hello";
// console.log(str.charAt(0));

// 3.
// let str = "welcome";
// console.log(str.toUpperCase());

// 4.
// let str = "I like apple pie";
// console.log(str.includes("apple"));

// 5.
// let str = "example.com";
// console.log(str.endsWith(".com"));

// 6.
// let str = "JavaScript";
// console.log(str.slice(0, 5));

// 7.
// let str = "I love programming";
// console.log(str.split(" ").length); // 3

// 8.
// let str = " Hello World ";
// console.log(str.replace(/\s/g, ""));
// console.log(str.trim().split(" ").join(""));

// 9.
// let str = "I love JavaScript";
// console.log(str.split(" ").reverse().join(" "));

// 10.
// let str = "javascript is fun";

// let result = str
//   .split(" ")
//   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//   .join(" ");

// console.log(result);
