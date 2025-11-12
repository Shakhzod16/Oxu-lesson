// 1. split()

// 📌 Matnni bo‘lib massivga aylantiradi.

// let text = "salom dunyo";
// let arr = text.split(" "); // bo‘shliq bo‘yicha bo‘linadi

// console.log(arr); // ["salom", "dunyo"]

// 👉 split("") qilinsa, harflarga bo‘lib beradi:

// let word = "javascript";
// console.log(word.split(""));
// // ["j","a","v","a","s","c","r","i","p","t"]

// 2. reverse()

// 📌 Massiv elementlarini teskarisiga o‘giradi.

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// console.log(arr); // [5, 4, 3, 2, 1]

// 3. join()

// 📌 Massiv elementlarini bitta matnga aylantiradi.

// let arr = ["salom", "dunyo"];
// let text = arr.join(" "); // elementlar orasiga bo‘shliq qo‘yildi

// console.log(text); // "salom dunyo"

// 👉 join("-") qilinsa:

// let arr = [2025, 9, 19];
// console.log(arr.join("-")); // "2025-9-19"

// Uchalasini birgalikda ishlatish

// Ko‘p hollarda split + reverse + join bitta matnni teskarisiga o‘girish uchun ishlatiladi.

// let text = "hello";
// let reverseText = text.split("").reverse().join("");

// console.log(reverseText); // "olleh"

// ✅ Xullas:

// split → matndan massivga o‘giradi

// reverse → massivni teskariga aylantiradi

// join → massivdan matn yasaydi

// Masalalar

// 1 - masala

// let massiv = ['bir', 'ikki', 'uch', 'tort', 'besh', 'bir'];
// let reverse = massiv.reverse();

// console.log(reverse);

// ================================================
//  OBJECT

// Object – bu JavaScript’da ma’lumotlarni kalit-qiymat juftliklari shaklida saqlovchi tuzilma.

// Ya’ni, object ichida bitta narsa haqida ko‘p xususiyatlar (properties)ni bitta joyda jamlash mumkin.

// 🔹 Oddiy misol:
// let user = {
// 	ism: 'Shahzod',
// 	yosh: 20,
// 	kasb: 'Dasturchi',
// };

// console.log(odam.ism);   // "Shahzod"
// console.log(odam["yosh"]); // 20

// 📌 Bu yerda odam – object.

// ism, yosh, kasb → property (kalit)

// "Shahzod", 20, "Dasturchi" → qiymatlar

// qiymat o'chirish

// delete user.ism;
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// --------------------------------------------------

// let names = ['karim', 'asad', 'dilbek', 'miron'];
// let user = {};
// for (let i of names) {
// 	user[i] = Number(prompt(`${i}-balance`));
// }
// console.log(user);

// Topshiriq

// 1 - topshiriq

// console.log('5' +  2)

// let names = ['karim', 'aziz', 'dilbek', 'miron', 'aziz'];
// let user = {};

// for (let i of names) {
// 	if (i !== 'aziz') {
// 		user[i] = Number(prompt(`${i}-balance`));
// 	}
// }

// console.log(user);

// HOMEWORK

// 1-masala
// let words = [];
// for (let i = 0; i < 6; i++) {
// 	words.push(prompt(`${i + 1}-so‘zni kiriting:`));
// }

// let reversed = words.reverse();

// if (reversed[0] === reversed[reversed.length - 1]) {
// 	console.log("Birinchi va oxirgi so‘z bir xil:", reversed[0]);
// } else {
// 	console.log("Birinchi va oxirgi so‘z har xil");
// }

// console.log(reversed);

//  2-masala
// let nums = [2, 4, 6, 1, 3, 5];
// let middle = Math.floor(nums.length / 2);

// let left = nums.slice(0, middle);
// let right = nums.slice(middle);

// let leftSum = 0, rightSum = 0;

// for (let i of left) leftSum += i;
// for (let i of right) rightSum += i;

// if (leftSum > rightSum) {
// 	console.log("Chap bo‘lak yig‘indisi katta:", leftSum);
// } else {
// 	console.log("O‘ng bo‘lak yig‘indisi katta:", rightSum);
// }

//  3-masala
// let arr = ["hello", "world", "javascript", "is", "awesome"];
// let str = arr.join(" ");

// if (str.length > 30) {
// 	console.log(str.slice(0, 30));
// } else {
// 	console.log(str);
// }

//  4-masala

// let nums = [];
// for (let i = 0; i < 10; i++) {
// 	nums.push(Number(prompt(`${i + 1}-sonni kiriting:`)));
// }

// let i = 0;
// while (i < nums.length) {
// 	if (nums[i] < 0) {
// 		nums.splice(i, 1);
// 	} else {
// 		i++;
// 	}
// }

// console.log(nums.join(", "));

//  5-masala
// let words = ["alma", "olcha", "kitob", "daraxta", "qora"];
// let newArr = [];

// for (let i = 0; i < words.length; i++) {
// 	if (words[i].slice(-1) === "a") {
// 		newArr.push(words[i]);
// 	}
// }

// console.log(newArr.reverse());

//  6-masala
// let arr = ["html", "css", "python", "js"];

// if (arr.includes("js")) {
// 	console.log(arr.reverse());
// } else {
// 	arr.push("not found");
// 	console.log(arr);
// }

// let arr = ['hmtl', 'python', 'scss', 'js']

// if (arr.includes('js')) {
//   console.log(arr.reverse())
// } else {
//   arr.push('no found')
//   console.log(arr)
// }

//  7-masala
// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenIndexArr = [];

// for (let i = 0; i < nums.length; i++) {
// 	if (i % 2 === 0) {
// 		evenIndexArr.push(nums[i]);
// 	}
// }

// console.log(evenIndexArr.join(", "));

//  8-masala
// let arr = [2, 1, 4, 5, 7, 3, 6];
// let lastThree = arr.slice(-3);

// let sum = 0;
// for (let i of lastThree) sum += i;

// if (sum > 10) {
// 	console.log(lastThree.reverse());
// } else {
// 	arr.splice(-3);
// 	console.log(arr);
// }

//  9-masala
// let arr = ["salom", "dunyo", "javascript", "zo'r"];
// let str = "";
// let i = 0;

// while (i < arr.length) {
// 	str += arr[i];
// 	i++;
// }

// console.log( str);
// console.log( str.length);

//  10-masala

// let arr = ['xizmat', 'olma', 'xurmo', 'banan', 'xona'];

// arr.reverse();

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i].slice(0, 1) === 'x') {
// 		continue;
// 	}
// 	console.log(arr[i]);
// }

// let massiv = ['html', 'scss', 'python', 'js'];

// if (massiv.includes('js')) {
// 	console.log(massiv.reverse());
// } else {
// 	massiv.push('not found');
// 	console.log(massiv);
// }

// let massiv = ['html', 'scss', 'python', 'js'];

// if (massiv.includes('js')) {
// 	console.log(massiv.reverse());
// } else {
// 	massiv.push('not found');
// 	console.log(massiv);
// }

// let ar = ['html', 'scss', 'python', 'js'];

// if (ar.includes('js')) {
// 	console.log(ar.reverse());
// } else {
// 	ar.push('not found');
// 	console.log(ar);
// }

// let Students = {
// 	name: 'Bahrom',
// 	age: '23',
// 	grades: '4',
// };

// 1 - masala;

// let student = {
// 	ism: 'Shahzod',
// 	yosh: 20,
// 	baholar: [5, 4, 3, 5, 4],
// };

// student.group = 'ATT';

// let sum = 0;
// for (let i = 0; i < student.baholar.length; i++) {
// 	sum += student.baholar[i];
// }
// let ortachaBaho = sum / student.baholar.length;

// console.log('Ism:', student.ism);
// console.log('O‘rtacha baho:', ortachaBaho);

// 2 - masala

// let car = {
// 	model: 'bwd',
// 	yil: '2021',
// 	rang: 'qora',
// };
// car.rang = 'oq';
// car.mileage = '1000km';

// console.log(car);

// 3 - masala

// let book = {
// 	title: 'urush va tinchlik',
// 	author: 'Dostayeviski',
// 	pages: '45',
// };
// book.pages = '24';
// book.publisher = 'ahad qayum';

// console.log(book);

// 4 - masala

// let phone = {
// 	brand: 'samsung',
// 	model: 'a55',
// 	price: '399$',
// };

// let keys = Object.keys(phone);
// console.log(keys);

// 5 - masala

// let shopItems = {
// 	names: 'shim',
// 	price: 99,
// 	quality: 90,
// };

// let total = shopItems.price * shopItems.quality;
// shopItems.dicount = total * 0.01;

// console.log(total, shopItems);

// 6 - masala

// let employee = {
// 	name: 'Ali',
// 	position: 'developer',
// 	salary: 1000,
// };

// employee.salary = employee.salary * 1.2;
// for (let i in employee) {
// 	console.log(employee[i]);
// }

// 7 - masala

// let user = {
//   'username': 'Harry',
//   'email': 'harryPotter@imortallitey',
//   'isAddmin': 'Volendemort'
// }

// delete user.isAddmin

// console.log(Object.keys(user))

// 8 - masala

// let laptor = {
//   'brand': 'deathwocht',
//   'model': 'blackDethert.312',
//   'battery': '23000AP'
// }

// laptor.battery = '17000AP'
// console.log(Object.values(laptor))

// 9 - masala

// let classrom = {
//   student: ['Dilshod', 'Ali', 'Javohir'],
// };

// for (let i = 0; i < classrom.student.length; i++) {
//   classrom.student[i] += ' Omad';
// }
// console.log(classrom)

// 10 - masala

// function Calculator(str, a, b) {
//   let sum;
//   if (str == 'add') {
//     sum = a + b
//     return sum
//   } else if (str == subtract) {
//     sum = a - b
//     return sum
//   } else if (str == multiply) {
//     sum = a * b
//     return sum
//   } else if (str == multiply && str !== 0) {
//     sum = a / b
//     return sum
//   }
// }

// console.log(Calculator('add', 5, 7))

// HOMEWORK

// let users = [
// 	{ name: 'Ali', age: 25, isAdmin: true, balance: 5000 },
// 	{ name: 'Vali', age: 30, isAdmin: false, balance: 3000 },
// 	{ name: 'Guli', age: 22, isAdmin: true, balance: 7000 },
// 	{ name: 'Gani', age: 28, isAdmin: false, balance: 2000 },
// 	{ name: 'Murod', age: 35, isAdmin: true, balance: 8000 },
// ];
// let totalBalance = 0;
// for (let i = 0; i < users.length; i++) {
// 	if (users[i].isAdmin) {
// 		totalBalance += users[i].balance;
// 	}
// }
// console.log('Jami balans: ' + totalBalance);

// HOMEWORK

// 1-masala

// let students = [
//   { name: "Ali", age: 20, grades: [5, 4, 5] },
//   { name: "Vali", age: 21, grades: [4, 4, 3] },
//   { name: "Nodira", age: 19, grades: [5, 5, 5] }
// ];

// for (let i = 0; i < students.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < students[i].grades.length; j++) {
//     sum += students[i].grades[j];
//   }
//   let avg = sum / students[i].grades.length;

//   if (avg >= 4.5) {
//     console.log(students[i].name, "→ A’lochi");
//   } else {
//     console.log(students[i].name, "→ Oddiy");
//   }
// }

// 2-masala

// let products = [
//   { name: "Telefon", price: 12000, quantity: 2 },
//   { name: "Kitob", price: 8000, quantity: 5 },
//   { name: "Kompyuter", price: 15000, quantity: 1 }
// ];

// let total = 0;
// for (let i = 0; i < products.length; i++) {
//   total += products[i].price * products[i].quantity;

//   if (products[i].price > 10000) {
//     console.log("Qimmat mahsulot:", products[i].name);
//   }
// }
// console.log("Umumiy qiymat:", total);

// 3-masala

// let bankAccounts = [
//   { owner: "Ali", balance: 5000 },
//   { owner: "Vali", balance: 12000 },
//   { owner: "Nodira", balance: 8000 }
// ];

// let totalBalance = 0;
// let maxBalance = bankAccounts[0];

// for (let i = 0; i < bankAccounts.length; i++) {
//   totalBalance += bankAccounts[i].balance;
//   if (bankAccounts[i].balance > maxBalance.balance) {
//     maxBalance = bankAccounts[i];
//   }
// }
// console.log("Jami balans:", totalBalance);
// console.log("Eng boy mijoz:", maxBalance.owner);

// 4-masala

// let numbers = [5, 8, 12, 3, 9, 20];

// console.log("Juft sonlar:");
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

// console.log("Toq sonlar:");
// let i = 0;
// while (i < numbers.length) {
//   if (numbers[i] % 2 !== 0) {
//     console.log(numbers[i]);
//   }
//   i++;
// }

// let max = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log("Eng katta son:", max);

// 5-masala

// let employees = [
//   { name: "Ali", position: "Developer", salary: 2500 },
//   { name: "Vali", position: "Manager", salary: 4000 },
//   { name: "Nodira", position: "Designer", salary: 2800 }
// ];

// for (let i = 0; i < employees.length; i++) {
//   console.log(employees[i].name, employees[i].position, employees[i].salary);
//   if (employees[i].salary < 3000) {
//     console.log("→ Kam maoshli");
//   } else {
//     console.log("→ Yaxshi maoshli");
//   }
// }

// 6-masala

// let books = [
//   { title: "JavaScript", author: "Jon", pages: 250 },
//   { title: "CSS Mastery", author: "David", pages: 180 },
//   { title: "HTML Basics", author: "Sara", pages: 220 }
// ];

// let totalPages = 0;
// for (let i = 0; i < books.length; i++) {
//   totalPages += books[i].pages;

//   if (books[i].pages > 200) {
//     console.log("Katta kitob:", books[i].title);
//   }
// }
// console.log("Jami sahifalar:", totalPages);

// 7-masala

// let orders = [
//   { id: 1, amount: 5000, status: "delivered" },
//   { id: 2, amount: 3000, status: "pending" },
//   { id: 3, amount: 7000, status: "delivered" }
// ];

// let totalAmount = 0;
// for (let i = 0; i < orders.length; i++) {
//   totalAmount += orders[i].amount;

//   if (orders[i].status === "delivered") {
//     console.log("Yetkazilgan:", orders[i]);
//   }
// }
// console.log("Jami buyurtmalar summasi:", totalAmount);

// 8-masala

// let users = [
//   { username: "Ali", age: 20, isAdmin: false },
//   { username: "Vali", age: 17, isAdmin: true },
//   { username: "Nodira", age: 25, isAdmin: true }
// ];

// console.log("Barcha foydalanuvchilar:");
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].username);
//   if (users[i].isAdmin) {
//     console.log("→ Admin foydalanuvchi:", users[i].username);
//   }
// }

// console.log("18 yoshdan kichiklar:");
// let i = 0;
// while (i < users.length) {
//   if (users[i].age < 18) {
//     console.log(users[i].username);
//   }
//   i++;
// }

// 9-masala

// let movies = [
//   { title: "Movie1", rating: 7.5, year: 2019 },
//   { title: "Movie2", rating: 9.0, year: 2021 },
//   { title: "Movie3", rating: 8.2, year: 2020 }
// ];

// let bestMovie = movies[0];
// for (let i = 1; i < movies.length; i++) {
//   if (movies[i].rating > bestMovie.rating) {
//     bestMovie = movies[i];
//   }
// }
// console.log("Eng yuqori reytingli film:", bestMovie.title);

// for (let i = 0; i < movies.length; i++) {
//   if (movies[i].year >= 2020) {
//     console.log("2020 dan keyingi film:", movies[i].title);
//   }
// }

// 10-masala

// let numbers2 = [5, 12, 7, 20, 3];

// let min = numbers2[0];
// let max2 = numbers2[0];

// for (let i = 1; i < numbers2.length; i++) {
//   if (numbers2[i] < min) min = numbers2[i];
//   if (numbers2[i] > max2) max2 = numbers2[i];
// }
// console.log("Eng kichik:", min, "Eng katta:", max2);

// let sum = 0;
// let i2 = 0;
// while (i2 < numbers2.length) {
//   sum += numbers2[i2];
//   i2++;
// }
// console.log("O‘rtacha qiymat:", sum / numbers2.length);



