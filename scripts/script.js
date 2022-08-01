// // 1 - Создать переменную каждого типа данных
// var number = 10 + 10;
// console.log(number)
//
// var str = "homework3";
// console.log(str)
//
// var q = true;
// console.log(q)
//
// var trust
// console.log(trust)
//
// var myNull = null;
// console.log(myNull)
//
// var synbol = Symbol("id")
// console.log(synbol)
//
// var bigInt = 1000n;
// console.log(bigInt)
//
// var myObj = {
//     name: "Illia",
//     lastName: "Mall",
//     age: 28,
// };
// console.log(myObj)
//

// // 2 - Создать переменную var, let, const. Перезаписать их значения(не для const )
//
// var number1 = 15 + 10;
// number1 = 500
// console.log(number1)
//
// let myAge = "28";
// myAge = 100;
// console.log(myAge)
//
// // const height = 186;
// // height = 200;
// // console.log(height)
// const height = {
//     height1: "186"
// };
// height.height1 = "200";
// console.log(height)
//

// //3 - Привести тип каждого типа данных хотя бы 2-3мя способами
// // String
// let str1 = "1111";
// console.log(typeof str1);
// console.log(str1);
//
// let one = +str1;
// console.log(typeof one);
// console.log(one);
//
// let two = !!str1;
// console.log(typeof two);
// console.log(two);
//
// // Number
// let num = 2222;
// console.log(typeof num);
// console.log(num);
//
// let one1 = String(num);
// console.log(typeof one1);
// console.log(one1);
//
// let two1 = !!num;
// console.log(typeof two1);
// console.log(two1);
//
// // Undefined
// let und = undefined;
// console.log(typeof und);
// console.log(und);
//
// let one2 = +und;
// console.log(typeof one2);
// console.log(one2);
//
// let two2 = String(und);
// console.log(typeof two2);
// console.log(two2);
//
// let three2 = !!und;
// console.log(typeof three2);
// console.log(three2);
//
// // Null
// let nul = null;
// console.log(typeof nul);
// console.log(nul);
//
// let one3 = +nul;
// console.log(typeof one3);
// console.log(one3);
//
// let two3 = String(nul);
// console.log(typeof two3);
// console.log(two3);
//
// let three = !!nul;
// console.log(typeof three);
// console.log(three);
//
// // Boolean
// let bool = true;
// console.log(typeof bool);
// console.log(bool);
//
// let one4 = +bool;
// console.log(typeof one4);
// console.log(one4);
//
// let two4 = String(bool);
// console.log(typeof two4);
// console.log(two4);
//
// // BigInt
// let bInt = BigInt("3333");
// console.log(typeof bInt);
// console.log(bInt);
//
// let one5 = String(bInt);
// console.log(typeof one5);
// console.log(one5);
//
// let two5 = !!bInt;
// console.log(typeof two5);
// console.log(two5);

// // 4 - Сделать сложение: строка с каждым типом данных; числа с каждым типом данных.
//
// let str2 = 'Hello';
// let str22 = 'World';
// let strStr1 = str2 + str22;
// console.log(strStr1);
//
// let str3 = 'height';
// let num = 186;
// let strNum = str3 + num;
// console.log(strNum);
//
// let str4 = 'Name ';
// let und1 = undefined;
// let str1Und = str4 + und1;
// console.log(str1Und);
//
// let str5 = 'Illia ';
// let bool1 = true;
// let str2Bool = str5 + bool1;
// console.log(str2Bool);
//
// let str6 = 'LastName ';
// let nul2 = null;
// let str3Nul = str6 + nul2;
// console.log(str3Nul);
//
// let str7 = 'Mall ';
// let bInt1 = BigInt('1111');
// let str4BInt = str4 + bInt1;
// console.log(str4BInt);
//
// let str8 = 'test';
// let sym = Symbol('1111');
// let str5Sym = str8 + sym;
// console.log(str5Sym);
//
// let str9 = 'test';
// let testObj = {a: 1};
// let str6TestObj = str9 + testObj;
// console.log(str6TestObj);
//
//----------------------------------------
//
// let num1 = 1111;
// let num11 = 100;
// let num1Numb = num1 + num11;
// console.log(num1Numb);
//
// let num2 = 1111;
// let str0 = 'test';
// let num2Str = num2 + str0;
// console.log(num2Str);
//
// let num3 = 1111;
// let und = undefined;
// let num3Und = num3 + und;
// console.log(num3Und);
//
// let num4 = 1111;
// let bool2 = true;
// let num4Bool = num4 + bool2;
// console.log(num4Bool);
//
// let num5 = 1111;
// let nul1 = null;
// let num5Nul = num5 + nul1;
// console.log(num5Nul);
//
// let num6 = 1111;
// let bInt2 = BigInt('123123');
// let num6BInt = num6 + bInt1;
// console.log(num6BInt);
//
// let num7 = 1111;
// let sym = Symbol('123123');
// let num5Sym = num7 + sym;
// console.log(num5Sym);
//
// let num8 = 1111;
// let testObj1 = {a: 1};
// let num6TestObj = num8 + testObj1;
// console.log(num6TestObj);

// 5 - Слелать отнимание: строка с каждым типом данных; числа с каждым типом данных.
//
// let str1 = 'test';
// let str11 = 'test';
// let str1Str0 = str1 - str11;
// console.log(str1Str0);
//
// let str = 'test';
// let num = 1111;
// let strNum = str - num;
// console.log(strNum);
//
// let str2 = 'test';
// let und = undefined;
// let str2Und = str2 - und;
// console.log(str2Und);
//
// let str3 = 'test';
// let bool = true;
// let str3Bool = str3 - bool;
// console.log(str3Bool);
//
// let str4 = 'test';
// let nul = null;
// let str4Nul = str4 - nul;
// console.log(str4Nul);
//
// // let str5 = 'test string';
// // let bInt = BigInt('123123');
// // let str5BInt = str5 - bInt;
// // console.log(str5BInt);
// //
// // let str6 = 'test string';
// // let sym = Symbol('123123');
// // let str6Sym = str6 - sym;
// // console.log(str6Sym);
//
// let str7 = 'test string';
// let testObj = {a: 1};
// let str7TestObj = str7 - testObj;
// console.log(str7TestObj);
//
//-----------------------
//
// let num = 1111;
// let str = 'test';
// let numStr = num - str;
// console.log(numStr);
//
// let num1 = 1111;
// let num11 = 111;
// let num1Num = num1 - num11;
// console.log(num1Num);
//
// let num2 = 1111;
// let und = undefined;
// let num2Und = num2 - und;
// console.log(num2Und);
// let num3 = 1111;
// let bool = true;
// let num3Bool = num3 - bool;
// console.log(num3Bool);
//
// let num4 = 1111;
// let nul1 = null;
// let num4Nul = num4 - nul1;
// console.log(num4Nul);
// //
// // let num5 = 1111;
// // let bInt1 = BigInt('123456');
// // let num5BInt = num5 - bInt1;
// // console.log(num5BInt);
//
// // let num6 = 1111;
// // let sym = Symbol('123456');
// // let num6Sym = num6 - sym;
// // console.log(num6Sym);
//
// let num7 = 1111;
// let myObj = {a: 1};
// let num7myObj = num7 - myObj;
// console.log(num7myObj);

// 6 - Задача (Условный оператор)
// Пользователь вводит логин и пароль.
// Если логин и пароль совпадают с указанными ниже, (для проверки login: 'kykold' password: '1234asdQQ')
// то выводится «Добро пожаловать». Если не совпадают – то «Ошибка входа».
//
// let login = prompt(`Enter login`);
// let password = prompt(`Enter password`);
// let loginPassword = login + password;
// alert(loginPassword);
// if (loginPassword === `kykold1234asdQQ`) {
// 	alert(`Добро пожаловать.`);
// } else {
// 	alert(`Ошибка входа`);
// }

//7 - Задача (Условный оператор)
//  Пользователь вводит год рождения. Программа показывает количество
//  лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
//  если нет – «вход воспрещен».
//
// let year = +prompt("Дата рождения:");
// let age = 2022 - year;
//  	if (age >= 16) {
//  		console.log(age, `Добро пожаловать.`);
//  	} else {
//  		console.log(age, `Вход восприщен.`);
//  	}

//8 - Задача (Условный оператор)
//  Создайте программу, которая выводит надбавку за стаж.
//  Пользователь вводит стаж работы, а программа пишет ему надбавку.
//
// let year = +prompt("Ваш стаж");
// if (year > 0 && year < 5) {
// 	console.log("Ваша надбавка 0%");
// } else if (year >= 5 && year < 10) {
// 	console.log("Ваша надбавка 5%");
// } else if (year >= 10 && year < 20) {
// 	console.log("Ваша надбавка 10%");
// } else if (year >= 20 && year <= 1000) {
// 	console.log("Ваша надбавка 20%");
// }

//9 - Задача (Условный оператор и свитч кейс)
//  Пользователь вводит число, показывает день недели в зависимости от числа (1 = 'Monday', 2 = 'Tuesday', и так далее)
// 9.1 Решить на иф елсах
//
// function dayWeek(day) {
// 	if (day === 1) {
// 		console.log("Monday")
// 	} else if (day === 2) {
// 		console.log("Tuesday")
// 	} else if (day === 3) {
// 		console.log("Wednesday")
// 	} else if (day === 4) {
// 		console.log("Thursday")
// 	} else if (day === 5) {
// 		console.log("Friday")
// 	} else if (day === 6) {
// 		console.log("Saturday")
// 	} else if (day === 7) {
// 		console.log("Sunday")
// 	} else {
// 		console.log('Error')
// 	}
// }
// const day = +prompt(`Select day`);
// dayWeek(day);
//
//9.2 Решить на свитч кейсе
//
// const day = prompt("Select day");
// console.log(day)
// switch (day) {
// 	case "1":
// 		console.log('Monday')
// 		break;
// 	case "2":
// 		console.log('Tuesday')
// 		break;
// 	case "3":
// 		console.log('Wednesday')
// 		break;
// 	case "4":
// 		console.log('Thursday')
// 		break;
// 	case "5":
// 		console.log('Friday')
// 		break;
// 	case "6":
// 		console.log('Saturday')
// 		break;
// 	case "7":
// 		console.log('Sunday')
// 		break;
// 	default:
// 			console.log('Error')
// }
//
// 9.3 Решить на тернарном операторе
//
// const day = prompt('Select Data');
// 	day === '1'
// 	? console.log("Monday"):
// 		day	=== '2'
// 			? console.log("Tuesday"):
// 			day	=== '3'
// 				? console.log("Wednesday"):
// 				day	=== '4'
// 					? console.log("Thursday"):
// 					day	=== '5'
// 						? console.log("Friday"):
// 						day	=== '6'
// 							? console.log("Saturday"):
// 							day	=== 's'
// 								? console.log("Sunday"):
// 								console.log("Error")

//10 - Задача (Условный оператор)
//  Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//  1, если значение больше нуля,
//  -1, если значение меньше нуля,
//  0, если значение равно нулю.
//
// let number = +prompt(`wright number`);
//    if (number < 0) {
//        alert("-1");
//    } else if ( number > 0) {
//        alert("1");
//    } else if ( number === 0) {
//       alert("0");
//    } else {
//        alert("wright a number!");
//    }

//11 - Задача (Тернарный оператор)
// Перепишите if..else с использованием нескольких операторов '?'.
// //
// // let message;
// //
// // if (login == 'Сотрудник') {
// //   message = 'Привет';
// // } else if (login == 'Директор') {
// //   message = 'Здравствуйте';
// // } else if (login == '') {
// //   message = 'Нет логина';
// // } else {
// //   message = '';
// // }
//--------------------
// let login = prompt("Enter login");
// login === "Сотрудник"
//     ? message = "Привет"
//     :  login === "Директор"
//         ? message = "Здравствуйте"
//         :  login === ""
//             ? message = "Нет такого логина"
//             : message =""
// console.log(message)









