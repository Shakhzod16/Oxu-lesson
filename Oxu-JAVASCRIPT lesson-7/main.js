// 🔹 1. forEach

// 👉 Massiv elementlarini birma-bir aylanib chiqish uchun ishlatiladi. Hech qanday qiymat qaytarmaydi.

// let fruits = ["olma", "banan", "uzum"];

// fruits.forEach(function(fruit, index) {
//   console.log(index + ": " + fruit);
// });

// // Natija:
// // 0: olma
// // 1: banan
// // 2: uzum

// 🔹 2. map

// 👉 Har bir elementni o‘zgartirib, yangi massiv qaytaradi.

// let numbers = [1, 2, 3, 4];

// let squares = numbers.map(function(num) {
//   return num * num;
// });

// console.log(squares); // [1, 4, 9, 16]

// 🔹 3. filter

// 👉 Shartga mos keladigan elementlarni tanlab oladi va yangi massiv qaytaradi.

// let numbers = [5, 12, 8, 130, 44];

// let bigNumbers = numbers.filter(function(num) {
//   return num > 10;
// });

// console.log(bigNumbers); // [12, 130, 44]

// 🔹 4. find

// 👉 Shartga mos birinchi elementni qaytaradi. Agar topilmasa undefined qaytaradi.

// let numbers = [5, 12, 8, 130, 44];

// let firstBig = numbers.find(function(num) {
//   return num > 10;
// });

// console.log(firstBig); // 12

// 🔹 5. match (string metod)

// 👉 Matn ichidan mos keladigan qismni topadi. Odatda regex (regular expression) bilan ishlatiladi.

// let text = "Men 2025-yilda JavaScript o‘rganmoqdaman";

// let result = text.match(/\d+/); // faqat raqamlarni olish
// console.log(result[0]); // 2025

// ✅ Xullas:

// forEach → faqat aylanish, yangi massiv qaytarmaydi

// map → har bir elementni o‘zgartirib yangi massiv beradi

// filter → shartga mos elementlarni tanlab yangi massiv beradi

// find → shartga mos birinchi elementni qaytaradi

// match → matndan regex orqali qism topadi

// JavaScript’da reduce metodi massivni bitta qiymatga qisqartirish uchun ishlatiladi.
// 👉 Masalan: yig‘indi olish, ko‘paytma hisoblash, eng katta sonni topish, yoki massivdan obyekt yig‘ish.

// 🔹 Sintaksis:
// array.reduce((accum, current) => { ... }, boshlangichQiymat)

// accum → yig‘ilib boradigan qiymat (boshlanishda boshlangichQiymat)

// current → massivdagi hozirgi element

// boshlangichQiymat → ixtiyoriy, agar yozilmasa massivning 1-elementidan boshlanadi

// 🔹 Misollar:
// 1. Massiv yig‘indisi
// let numbers = [1, 2, 3, 4];

// let sum = numbers.reduce((accum, current) => accum + current, 0);

// console.log(sum); // 10

// 2. Massiv ko‘paytmasi
// let numbers = [2, 3, 4];

// let product = numbers.reduce((accum, current) => accum * current, 1);

// console.log(product); // 24

// 3. Eng katta sonni topish
// let numbers = [5, 12, 8, 130, 44];

// let max = numbers.reduce((accum, current) => {
//   return current > accum ? current : accum;
// });

// console.log(max); // 130

// 4. Elementlarni guruhlash (advanced misol)
// let words = ["salom", "ha", "yo'q", "kitob", "ol"];

// let grouped = words.reduce((accum, word) => {
//   let length = word.length;
//   if (!accum[length]) {
//     accum[length] = [];
//   }
//   accum[length].push(word);
//   return accum;
// }, {});

// console.log(grouped);
// // { 2: ["ha", "ol"], 4: ["yo'q"], 5: ["salom", "kitob"] }

// ✅ Xullas, reduce — massivni bitta qiymatga qisqartiradigan eng qulay metodlardan biri.

// let numbers = [1, 2, 3, 4];

// let sum = numbers.reduce((accum, current) => accum + current, 0);

// console.log(sum);

// Homework;

// filter 1 - masala

// let users = [
//   { name: "Ali", age: 19 },
//   { name: "Vali", age: 25 },
//   { name: "Dilnoza", age: 17 }
// ];
// let kattaYoshlar = users.filter(user => user.age > 18);
// console.log(kattaYoshlar);

// 2 - masala

// let words = ["salom", "apple", "dunyo", "ananas", "javascript"];
// let aWords = words.filter(word => word.startsWith("a"));
// console.log(aWords);

// 3 - masala

// find
// let products = ["telefon", "noutbuk", "planshet", "televizor"];
// let plProduct = products.find(product => product.startsWith("pl"));
// console.log(plProduct);

// 4 - masala

// findIndex
// let colors = ["red", "blue", "green", "yellow"];
// let greenIndex = colors.findIndex(color => color === "green");
// console.log(greenIndex);

// 5 - masala

// let cities = ["Toshkent", "Samarqand", "Buxoro", "Xiva"];
// let buxoroIndex = cities.findIndex(city => city === "Buxoro");
// console.log(buxoroIndex);

// 6 - masala

// map
// let names = ["ali", "vali", "dilnoza"];
// let capitalizedNames = names.map(name => name[0].toUpperCase() + name.slice(1));
// console.log(capitalizedNames);

// 7 - masala

// let books = ["JavaScript", "Python", "C++"];
// let kitoblar = books.map(book => book + " kitobi");
// console.log(kitoblar);

// 8 - masala

// match
// let text = 'Men bugun JavaScript va Python o‘rganyapman';
// let faqatKichik = text.match(/\b[a-z]+\b/g);
// console.log(faqatKichik);

// 9 - masala

// let sentence = 'Telefon raqam: +99890-123-45-67';
// let telRaqam = sentence.match(/\+998\d{2}-\d{3}-\d{2}-\d{2}/);
// console.log(telRaqam[0]);

// 10 - masala

// forEach
// let fruits = ["apple", "banana", "cherry"];
// fruits.forEach(fruit => console.log("Meva: " + fruit));

// Topshiriq

// 1 - masala

// function addEmoji(text, emoji) {
// 	text.split(' ');
// 	text = text + emoji;
// 	return text;
// }
// let result = addEmoji('hello js' + '😁');
// console.log(result);

// ==============

// function addEmoji(text, emoji) {
// 	let words = text.split(' ');
// 	for (let i = 0; i < words.length; i++) {
// 		words.length[i];
// 	}
// }

// 2 - masala

// function isSpam(message) {
// 	let A = prompt("So'z kiritng");
// 	isSpam.massiv[('reklama', 'bonus', 'chegirma')];
// 	{
// 		alert(true);
// 	}
// 	if (isSpam('Bugun katta chegirma bor!')) {
// 		return true;
// 	} else isSpam('Assalomu alaykum');
// 	return false;
// }
// console.log(isSpam);

// ===============================

// function isSpam(message) {
// 	let spamWords = ['reklama', 'bonus', 'chegirma'];
// 	for (let word of spamWords) {
// 		if (message.toLowerCase().includes(word)) {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// console.log(isSpam('Bugun katta chegirma bor!'));
// console.log(isSpam('Assalomu alaykum'));

// 3 - masala

// function shuffleWords(sentence) {
// 	let words = sentence.split(' ');
// 	for (let i = words.length - 1; i > 0; i--) {
// 		let j = Math.floor(Math.random() * (i + 1));
// 		[words[i], words[j]] = [words[j], words[i]];gfthyyy
// 	}
// 	return words.join(' ');
// }
// console.log(shuffleWords('hello world this is a test'));

// 4 - masala

// function foydalanuvchi_nomi_yaratish(ism, yil) {
//   return ism.toLowerCase() + yil;
// }

// 5- masala

// function hashtag_yaratish(jumla) {
//   return (
//     '#' +
//     jumla
//       .split(' ')
//       .map(soz => soz.charAt(0).toUpperCase() + soz.slice(1))
//       .join('')
//   );
// }

// 6 - masala

// function sozlarni_aralashtir(jumla) {
//   let sozlar = jumla.split(' ');
//   for (let i = sozlar.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [sozlar[i], sozlar[j]] = [sozlar[j], sozlar[i]];
//   }
//   return sozlar.join(' ');
// }

// 7 - masala

// function brauzerni_aniqlash(foydalanuvchi_agent) {
//   if (foydalanuvchi_agent.includes('Edge')) return 'Edge';
//   if (foydalanuvchi_agent.includes('Chrome')) return 'Chrome';
//   if (foydalanuvchi_agent.includes('Firefox')) return 'Firefox';
//   if (foydalanuvchi_agent.includes('Safari') && !foydalanuvchi_agent.includes('Chrome')) return 'Safari';
//   return 'Noma’lum brauzer';
// }

// 8 - masala

// function telefonni_yashirish(raqam) {
//   let oxirgi_ikki = raqam.slice(-2);
//   let yulduzlar = '*'.repeat(raqam.length - 2);
//   return yulduzlar + oxirgi_ikki;
// }

// 9 - masala

// function url_qisqartirish(url) {
//   let qisqa = url.replace(/https?:\/\/(www\.)?/, '');
//   return qisqa.split('/')[0];
// }

// 10 - masala

// function sozlarni_aylantirish(jumla) {
//   let sozlar = jumla.split(' ');
//   let birinchi = sozlar.shift();
//   sozlar.push(birinchi);
//   return sozlar.join(' ');
// }

//  ======================================================

// Yangi 10 ta masal
//
// 11 - masala;

// function kontaktlarni_boshqarish(kontaktlar, yangi_kontakt) {
//   let mavjud = kontaktlar.some(k => k.name === yangi_kontakt.name);
//   if (!mavjud) kontaktlar.push(yangi_kontakt);
//   return kontaktlar.map(k => `${k.name}: ${k.phone}`).join(', ');

//12 - masala

// function kitob_topish(kutubxona, nom) {
//   for (let i = 0; i < kutubxona.length; i++) {
//     if (kutubxona[i].title.toLowerCase() === nom.toLowerCase()) {
//       return `Topildi: muallif - ${kutubxona[i].author}`;
//     }
//   }
//   return 'Bunday kitob yo‘q';

// 13 - masala

// function vazifalarni_boshqarish(vazifalar, buyruq, vazifa) {
//   if (buyruq === 'add') {
//     if (!vazifalar.includes(vazifa)) vazifalar.push(vazifa);
//   } else if (buyruq === 'remove') {
//     let idx = vazifalar.indexOf(vazifa);
//     if (idx !== -1) vazifalar.splice(idx, 1);
//   } else if (buyruq === 'list') {
//     return vazifalar.join(', ');
//   }
//   return vazifalar;
//
// 14 - masala

// function matn_statistikasi(matn) {
//   let sozlar = matn.split(' ');
//   let statistika = {};
//   let eng_uzun = '';
//   for (let soz of sozlar) {
//     statistika[soz] = soz.length;
//     if (soz.length > eng_uzun.length) eng_uzun = soz;
//   }
//   return { statistika, eng_uzun };
//
// 15 - masala

// function tizimga_kirish(foydalanuvchilar, login, parol) {
//   for (let i = 0; i < foydalanuvchilar.length; i++) {
//     if (foydalanuvchilar[i].username === login && foydalanuvchilar[i].password === parol) {
//       return 'Xush kelibsiz';
//     }
//   }
//   return 'Login yoki parol xato';

//16 - masala

// function film_reytingi(filmlar, nom, reyting) {
//   for (let film of filmlar) {
//     if (film.title.toLowerCase() === nom.toLowerCase()) {
//       film.ratings.push(reyting);
//       let summa = film.ratings.reduce((a, b) => a + b, 0);
//       let ortacha = summa / film.ratings.length;
//       return `O‘rtacha reyting: ${ortacha.toFixed(1)}`;
//     }
//   }
//   return 'Film topilmadi';

//17 - masala

// function spam_filtri(xabarlar, taqiqlangan_sozlar) {
//   return xabarlar.map(xabar => {
//     for (let soz of taqiqlangan_sozlar) {
//       if (xabar.toLowerCase().includes(soz.toLowerCase())) {
//         return '

//18 - masala

// function savatchani_boshqarish(savatcha, mahsulot, buyruq) {
//   let idx = savatcha.findIndex(m => m.name === mahsulot.name);
//   if (buyruq === 'add') {
//     if (idx !== -1) {
//       savatcha[idx].count += mahsulot.count;
//     } else {
//       savatcha.push(mahsulot);
//     }
//   } else if (buyruq === 'remove') {
//     if (idx !== -1) {
//       savatcha[idx].count -= mahsulot.count;
//       if (savatcha[idx].count <= 0) savatcha.splice(idx, 1);
//     }
//   }
//   return savatcha;

//19 - masala

// function fayllarni_filtrlash(fayllar, kengaytma) {
//   let natija = [];
//   for (let fayl of fayllar) {
//     if (fayl.endsWith('.' + kengaytma)) {
//       natija.push(fayl);
//     }
//   }
//   return natija;
//
// 20 - masala

// function chatni_teskari_korsatish(xabarlar) {
//   let natija = [];
//   let i = xabarlar.length - 1;
//   while (i >= 0) {
//     natija.push(xabarlar[i]);
//     i--;
//   }
//   return natija;
// }

// vazifa

// 11 - masala

// function manageComments(comments, action, newComment) {
//   if (action == 'add') {
//     comments = newComment
//   } else if (action == 'delete') {
//     delete  newComment
//   } else if (action = 'list') {
//     comments + newComment
//     for (let i = 0; i < comments.length; i++){
//       let str = comments[i]
//     }
//   }
// }
// let comments = { user: "Ali", text: "Zo‘r maqola!" }

// 12 - masala

// function cleanAdText(text, bannedWords) {
//   for (let i = 0; i <= text.length; i++) {
//   if (text[i] == "Super chegirma bonus") {
//     console.log('super')
//     }
//   }
// }

// 13 - masala

// function updateProfile(user, updates) {
//   if (user.age == updates.age) {
//     user.age = updates.age
//   }
//   console.log(user)
// }

// let user = [{ name: 'Ali', age: 20, city: 'Toshkent' }]
// let updates = { age: 21 }

// 14 - masala

// functionmanagePlaylist(playlist, command, song){
//   if (command == 'add') {
//     playlist+=song
//   } else if (command == 'remove') {
//     song.slice()
//   } else if (command == 'shuffle') {
//     song.sort()
//   }
// }

// function wordFrequency(text) {
//   text.split(" '' ")
// }

// 15. So‘z chastotasini hisoblash
// function wordFrequency(text) {
//   let words = text.split(" ");
//   let freq = {};
//   for (let word of words) {
//     freq[word] = (freq[word] || 0) + 1;
//   }
//   return freq;
// }

// 16. Foydalanuvchi ro‘yxatini filtrlash

// function filterUsers(users, minAge) {
//   return users.filter(u => u.age >= minAge);
// }

//  17. Matnni qisqartirish

// function shortenText(text, limit) {
//   if (text.length > limit) {
//     return text.slice(0, limit) + "...";
//   }
//   return text;
// }

//  18. Sessiya vaqtini tekshirish

// function checkSession(users, username) {
//   let user = users.find(u => u.name === username);
//   if (!user) return "Foydalanuvchi topilmadi";
//   return user.lastActive <= 10 ? "Onlayn" : "Oflayn";
// }

//  19. Mahsulotlarni qidirish

// function searchProducts(products, keyword) {
//   return products.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));
// }

//  20. Xabarlarni guruhlash

// function groupMessages(messages) {
//   let grouped = {};
//   for (let msg of messages) {
//     if (!grouped[msg.user]) {
//       grouped[msg.user] = [];
//     }
//     grouped[msg.user].push(msg.text);
//   }
//   return grouped;
// }

// =============================

// yangi masalalar

// 1 - masala

// function mysteryInbox(messages) {
// 	let result = { priority: [], normal: [] };
// 	for (let msg of messages) {
// 		if (msg.text.includes('?') || msg.text.includes('...')) {
// 			result.priority.push(msg);
// 		} else {
// 			result.normal.push(msg);
// 		}
// 	}
// 	return result;
// }
// let messages = [
// 	{ from: 'A', text: 'Yordam?' },
// 	{ from: 'B', text: 'Salom' },
// 	{ from: 'A', text: 'Qanday yordam bera olishim mumkin?' },
// 	{ from: 'C', text: 'Xush kelibsiz!' },
// ];
// console.log(mysteryInbox(messages));

// 2 - masala

// 2) recipeOrganizer(recipes)
// function recipeOrganizer(recipes) {
//   let result = { dessert: [], main: [], other: [] };

//   for (let recipe of recipes) {
//     let ingredients = recipe.ingredients.map(i => i.toLowerCase());

//     if (ingredients.includes("sugar")) {
//       result.dessert.push(recipe.title);
//     } else if (ingredients.includes("salt") && ingredients.includes("meat")) {
//       result.main.push(recipe.title);
//     } else {
//       result.other.push(recipe.title);
//     }
//   }
//   return result;
// }

// // Misol
// console.log(recipeOrganizer([
//   { title: "Cake", ingredients: ["flour", "sugar", "milk"], steps: [] },
//   { title: "Stew", ingredients: ["meat", "salt", "onion"], steps: [] },
//   { title: "Salad", ingredients: ["tomato", "cucumber"], steps: [] }
// ]));

// 3 - masa-la
//  detectImpostor(players)
// function detectImpostor(players) {
//   let result = { suspicious: [], normal: [] };

//   for (let player of players) {
//     let wordCount = {};

//     for (let msg of player.messages) {
//       let words = msg.toLowerCase().split(" ");
//       for (let w of words) {
//         wordCount[w] = (wordCount[w] || 0) + 1;
//       }
//     }

//     let trust = wordCount["trust"] || 0;
//     let team = wordCount["team"] || 0;
//     let total = Object.values(wordCount).reduce((a, b) => a + b, 0);

//     if ((trust + team) > total / 2) {
//       result.suspicious.push(player.name);
//     } else {
//       result.normal.push(player.name);
//     }
//   }
//   return result;
// }

// // Misol
// console.log(detectImpostor([
//   { name: "Ali", role: "crew", messages: ["trust team", "team trust"] },
//   { name: "Vali", role: "crew", messages: ["hi all", "what now?"] }
// ]));

// 4 - masala
//  museumTour(paths, startRoom)
// function museumTour(paths, startRoom) {
//   let route = startRoom;
//   let current = startRoom;

//   while (true) {
//     let next = paths.find(p => p.from === current);
//     if (!next) break;

//     if (next.note.includes("locked")) {
//       return "Blocked at " + next.from;
//     }

//     route += " -> " + next.to;
//     current = next.to;
//   }

//   return route;
// }

// // Misol
// console.log(museumTour([
//   { from: "A", to: "B", note: "" },
//   { from: "B", to: "C", note: "dark corridor" },
//   { from: "C", to: "D", note: "locked door" }
// ], "A"));

// 5 - masala
//  emojiTranslator(chat, dictionary)
// function emojiTranslator(chat, dictionary) {
//   let words = chat.split(" ");

//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let clean = word.toLowerCase();

//     if (dictionary[clean]) {
//       words[i] = dictionary[clean];
//     }
//   }

//   return words.join(" ");
// }

// // Misol
// console.log(emojiTranslator("I love coffee", {
//   coffee: "☕️",
//   love: "❤️"
// }));

// 6 - masala
//  movieNightPlanner(guests)
// function movieNightPlanner(guests) {
//   let availableGuests = guests.filter(g => g.available);
//   let genreCount = {};

//   for (let g of availableGuests) {
//     for (let genre of g.likes) {
//       genreCount[genre] = (genreCount[genre] || 0) + 1;
//     }
//   }

//   let entries = Object.entries(genreCount);
//   if (entries.length === 0) return "no guests";

//   entries.sort((a, b) => b[1] - a[1]);
//   let top = entries[0][1];
//   let maxGenres = entries.filter(e => e[1] === top);

//   return maxGenres.length > 1 ? "mixed" : maxGenres[0][0];
// }

// // Misol
// console.log(movieNightPlanner([
//   { name: "Ali", likes: ["comedy", "action"], available: true },
//   { name: "Vali", likes: ["comedy"], available: true },
//   { name: "Hasan", likes: ["drama"], available: false }
// ]));

// 7 - masala

// function lostAndFound(items, query) {
// 	const results = [];
// 	const lowerQuery = query.toLowerCase();

// 	for (let i = 0; i < items.length; i++) {
// 		const item = items[i];
// 		const descLower = item.desc.toLowerCase();

// 		if (descLower.includes(lowerQuery)) {
// 			const status = item.owner ? `claimed by ${item.owner}` : 'unclaimed';

// 			results.push({
// 				id: item.id,
// 				desc: item.desc,
// 				status: status,
// 			});
// 		}
// 	}

// 	return results;
// }

// const items = [
// 	{ id: 1, desc: 'Blue umbrella', owner: null },
// 	{ id: 2, desc: 'Red wallet', owner: 'Ali' },
// 	{ id: 3, desc: 'Green umbrella', owner: 'Laylo' },
// ];

// console.log(lostAndFound(items, 'umbrella'));

// 8 - masala

//  storylineCompressor(paragraphs, maxSentences) — Hikoya siqish (narrative)

// paragraphs — array of strings (har biri bir nechta gap).

// Funksiya har bir paragrafni gaplarga bo‘lib, for yordamida har biridan maksimal maxSentences gacha olib yangi array yaratadi.

// Agar paragrafda "...continued" kabi belgi bo‘lsa → keyingi paragraf bilan birlashtiring.

// Natija: yangi qisqartirilgan paragraflar arrayi.
// Misol: storylineCompressor([...], 2) → har paragraf 2 gapdan oshmaydi.

// function countLongWords(words) {
// 	let count = 0;

// 	for (let word of words) {
// 		if (word.length > 5) {
// 			count++;
// 		}
// 	}

// 	return count;
// }

// let arr = ['cat', 'elephant', 'sun', 'planet'];
// alert(`5 belgidan uzun so‘zlar soni: ${countLongWords(arr)}`);

// function countLongWords(words) {
// 	count = 0;

// 	for (let word of words) {
// 		if (word.length > 5) {
// 			count++;
// 		}
// 	}
// 	return true;
// }
// let arr = ['cat', 'elephant', 'sun', 'planet'];

// alert(`uzun so'zlar: ${countLongWords(arr)}`);

// function countLongWords(words) {
// 	count = 0;
// 	for (let word of words) {
// 		if (word.lenth > 5) {
// 			count++;
// 		}
// 	}
// 	return true;
// }

// let arr = ['cat', 'elephant', 'sun', 'planet'];

// alert(`uzun so'zlar: ${countLongWords(arr)}`);

// function countLongWords(words) {
// 	count = 0;
// 	for (let word of words) {
// 		if (word.lenth > 5) {
// 			count++;
// 		}
// 	}
// 	return true;
// }

// alert(`uzun so'zlar $(countLongWords(arr))`);

// 1 - masala

// function findSecretCode(text) {
// 	let words = text.split(' ');

// 	for (let word of words) {
// 		if (word.startsWith('#')) {
// 		}

// 		return 'Kod topilmadi';
// 	}
// }
// let input = "Your code is #XG5T9 please don't share";
// alert(findSecretCode(input)); // 👉 "XG5T9"

// 2 - masala

// function hiddenCode(str){
//     let start = str.indexOf('#');
//     if (start === -1) return null;
//     let end = str.indexOf('', start);
//     if (end === -1) end = str.length;
//     return str.slice(start + 1, end);
// }
// console.log(hiddencode(nireinfie # idij2i3dji3))

// 3 - masala

// function countLongWords(words) {
// 	count = 0;
// 	for (let word of words) {
// 		if (word.lenth > 5) {
// 			count++;
// 		}
// 	}
// 	return true;
// }

// let arr = ['cat', 'elephant', 'sun', 'planet'];
// alert(`uzun soz ${countLongWords(arr)}`);

// 4 - masala

// function uniqueNames(names) {
// 	let count = {};

// 	for (let name of names) {
// 		count[name] = (count[name] || 0) + 1;
// 	}

// 	let result = [];
// 	for (let key in count) {
// 		if (count[key] === 1) {
// 			result.push(key);
// 		}
// 	}

// 	return result;
// }

// let arr = ['Ali', 'Vali', 'Ali', 'Lola'];
// alert(uniqueNames(arr));

// 5 - masala

// function reverseSentence(sentence) {
// 	let words = sentence.split(' ');
// 	let newSentence = '';

// 	for (let i = words.length - 1; i >= 0; i--) {
// 		if (i === 0) {
// 			newSentence += words[i];
// 		} else {
// 			newSentence += words[i] + ' ';
// 		}
// 	}

// 	return newSentence;
// }

// console.log(reverseSentence('Men JavaScript o‘rganyapman'));

// 6 - masala

// function removeEmptyValues(obj) {
// 	let newObj = {};

// 	for (let key in obj) {
// 		if (obj[key] !== '' && obj[key] !== null) {
// 			newObj[key] = obj[key];
// 		} else {
// 		}
// 	}

// 	return newObj;
// }

// console.log(removeEmptyValues({ name: 'Ali', email: '', phone: null }));
