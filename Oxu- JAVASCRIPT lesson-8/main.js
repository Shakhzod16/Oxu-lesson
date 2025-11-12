// FUNCSIYAGA DOIR MASALALAR

// 1 - masala

// function filterCategory(items, category) {
// 	for (let i = 0; i < items.length; i++) {
// 		if (items[i].category === category) {
// 			console.log(items[i]);
// 		}
// 	}
// }

// filterCategory(
// 	[
// 		{ name: 'Mari', category: 'x' },
// 		{ name: 'Nodir', category: 'b' },
// 	],
// 	'x',
// );

// 2 - masala

// function shortMessages(messages, maxLen) {
// 	let result = [];

// 	for (let i = 0; i < messages.length; i++) {
// 		if (messages[i].length <= maxLen) {
// 			result.push(messages[i]);
// 		}
// 	}

// 	return result;
// }

// console.log(shortMessages(["hi", "hello world"], 5));

// 3 - masala

// function collectTags(posts) {
//     let result = [];
//     for (let i = 0; i < posts.length; i++) {
//       let tags = posts[i].tags;

//       for (let j = 0; j < tags.length; j++) {
//         if (!result.includes(tags[j])) {
//           result.push(tags[j]);
//         }
//       }
//     }
//     return result;
//   }
//   console.log(
//     collectTags([
//       { tags: ["a", "b"] },
//       { tags: ["b", "c"] },
//       { tags: ["d", "a"] }
//     ])
//   );

// 3. masala
// function collectTags(posts) {
// 	let all = [];
// 	posts.forEach(post => all.push(...post.tags));
// 	return [...new Set(all)]; // takrorlanmas
// }

// console.log(collectTags([{tags:["a","b"]},{tags:["b","c"]}])); // ["a","b","c"]

// // 4. masala
// function countEmptyFields(obj) {
// 	let count = 0;
// 	for (let key in obj) {
// 		if (obj[key] === "" || obj[key] === null) count++;
// 	}
// 	return count;
// }

// console.log(countEmptyFields({a:"", b:1, c:null})); // 2

// // 5. masala
// function cleanPath(path) {
// 	let parts = path.split("/").filter(p => p !== "." && p !== "");
// 	let stack = [];

// 	for (let part of parts) {
// 		if (part === "..") stack.pop();
// 		else stack.push(part);
// 	}

// 	return stack.join("/");
// }

// console.log(cleanPath("./folder/../file"));

// // 6 masala
// function isMorning(time) {
// 	let [hour, min] = time.split(":").map(Number);
// 	return hour >= 6 && hour < 12;
// }

// console.log(isMorning("08:30")); // true

// // 7. masala
// function isProfileComplete(profile, requiredFields) {
// 	return requiredFields.every(f => profile[f] && profile[f] !== "");
// }

// console.log(isProfileComplete({name:"Ali", email:"a"}, ["name", "email"])); // true

// // 8. masala
// function reverseEachWord(sentence) {
// 	return sentence
// 		.split(" ")
// 		.map(word => word.split("").reverse().join(""))
// 		.join(" ");
// }

// console.log(reverseEachWord("salom dunyo")); // "molas oynud"

// // 9. masala
// function updateStock(products, name, delta) {
// 	let item = products.find(p => p.name === name);
// 	if (item) item.qty += delta;
// 	else products.push({name, qty: delta});
// 	return products;
// }

// console.log(updateStock([{name:"A",qty:2}], "A", 3));

// // 10. masala
// function hasAllCaps(sentence) {
// 	return sentence.split(" ").every(word =>
// 		word[0] === word[0].toUpperCase()
// 	);
// }

// console.log(hasAllCaps("Salom Dunyo")); // true

// // 11. masala
// function pickByIndexes(arr, indexes) {
// 	let result = [];
// 	for (let i = 0; i < indexes.length; i++) {
// 		result.push(arr[indexes[i]]);
// 	}
// 	return result;
// }

// console.log(pickByIndexes(["a","b","c","d"], [0,2]));

// // 12. masala
// function firstRepeatedWord(text) {
// 	let words = text.split(" ");
// 	let seen = {};

// 	for (let word of words) {
// 		if (seen[word]) return word;
// 		seen[word] = true;
// 	}
// 	return null;
// }

// console.log(firstRepeatedWord("salom dunyo salom")); // "salom"

// 5 ta misol

// 5 - masala

// function getCityFromAddress(user) {
// 	for (let i = 0; i < user.length; i++) {
// 		if (user[i] == ',') {
// 			console.log(user.slice(0, i).trim());
// 			break;
// 		}
// 	}
// }

// getCityFromAddress('Toshkent, Yakkasaroy, 12');

// 6 - masala

// function groupByStatus(users) {
// 	function groupByStatus(users) {
// 		let natija = {};

// 		for (let i = 0; i < users.length; i++) {
// 			let user = users[i];
// 			let holat = user.status;

// 			if (!natija[holat]) {
// 				natija[holat] = [user];
// 			} else {
// 				natija[holat].push(user);
// 			}
// 		}

// 		return natija;
// 	}

// 	console.log(
// 		groupByStatus([
// 			{ name: 'Ali', status: 'online' },
// 			{ name: 'Vali', status: 'offline' },
// 			{ name: 'Hasan', status: 'online' },
// 		]),
// 	);
// }

// 7 - masala

// function uniqueCharacters(text) {
// 	let natija = [];

// 	for (let i = 0; i < text.length; i++) {
// 		let belgi = text[i];
// 		let nechta = 0;

// 		for (let j = 0; j < text.length; j++) {
// 			if (text[j] === belgi) {
// 				nechta++;
// 			}
// 		}

// 		if (nechta === 1) {
// 			natija.push(belgi);
// 		}
// 	}

// 	return natija;
// }

// console.log(uniqueCharacters('aabbcde'));

// 8 - masala

// function findKeysContaining(obj, keyword) {
// 	let natija = [];

// 	for (let key in obj) {
// 		if (key.includes(keyword)) {
// 			natija.push(key);
// 		}
// 	}

// 	return natija;
// }

// console.log(findKeysContaining({ username: 'Ali', userAge: 20, email: 'a' }, 'user'));

// 9 - masala

// function toSnakeCase(text) {
// 	let yangi = '';

// 	for (let i = 0; i < text.length; i++) {
// 		let harf = text[i];

// 		if (harf === ' ') {
// 			yangi += '_';
// 		} else if (harf >= 'A' && harf <= 'Z') {
// 			yangi += '_' + harf.toLowerCase();
// 		} else {
// 			yangi += harf;
// 		}
// 	}

// 	return yangi;
// }

// console.log(toSnakeCase('Salom Dunyo JS'));

// 10 - masala

// function objectToArray(obj) {
// 	let natija = [];

// 	for (let key in obj) {
// 		let juftlik = [key, obj[key]];
// 		natija.push(juftlik);
// 	}

// 	return natija;
// }

// console.log(objectToArray({ a: 1, b: 2 }));

// let son = +prompt('son kiritng');

// if (son % 2 == 0) {     // if - agar
// 	alert('juft son');
// } else {                // esle - aks holda
// 	alert('toq son');
// }
